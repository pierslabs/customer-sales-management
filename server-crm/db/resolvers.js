const Usuario = require("../models/Usuario");
const Producto = require("../models/Producto");
const Cliente = require("../models/Cliente");
const Pedido = require("../models/Pedido");
const bcryptjs = require("bcryptjs");
require("dotenv").config({ path: "variables.env" });
const jwt = require("jsonwebtoken");
const { Error } = require("mongoose");

const crearToken = (usuario, secreto, expiresIn) => {
  const { id, email, nombre, apellido } = usuario;

  return jwt.sign({ id, email, nombre, apellido }, secreto, { expiresIn });
};

// Resolvers
const resolvers = {
  // Querys -----------------------------------------------------------------------
  Query: {
    // Usuarios
    obtenerUsuario: async (_, {}, ctx) => {
      // const usuarioId = await jwt.verify(token, process.env.SECRET);
      // return usuarioId;
      return ctx.usuario;
    },

    // Productos
    obtenerProductos: async () => {
      try {
        const productos = await Producto.find({});
        console.log(productos);
        return productos;
      } catch (error) {
        console.log(error);
      }
    },

    obtenerProducto: async (_, { id }) => {
      const producto = await Producto.findById(id);
      if (!producto) {
        throw new Error("Producto no encontrado");
      }

      return producto;
    },

    // Clientes
    obtenerClientes: async () => {
      try {
        const clientes = await Cliente.find();
        return clientes;
      } catch (error) {
        console.log(error);
      }
    },

    obtenerClientesVendedor: async (_, {}, ctx) => {
      try {
        const clientes = await Cliente.find({
          vendedor: ctx.usuario.id.toString(),
        });
        return clientes;
      } catch (error) {
        console.log(error);
      }
    },

    obtenerCliente: async (_, { id }, ctx) => {
      const cliente = await Cliente.findById(id);
      if (!cliente) {
        throw new Error("El cliente no encontrado");
      }

      if (cliente.vendedor.toString() !== ctx.usuario.id) {
        throw new Error("No estas autorizado para ver este cliente");
      }

      return cliente;
    },

    // Busquedas avanzadas
    mejoresClientes: async () => {
      const clientes = await Pedido.aggregate([
        { $match: { estado: "COMPLETADO" } },
        {
          $group: {
            _id: "$cliente",
            total: { $sum: "$total" },
          },
        },
        {
          $lookup: {
            from: "clientes",
            localField: "_id",
            foreignField: "_id",
            as: "cliente",
          },
        },

        {
          $sort: { total: -1 },
        },
      ]);
      return clientes;
    },

    mejoresVendedores: async () => {
      const vendedores = await Pedido.aggregate([
        { $match: { estado: "COMPLETADO" } },
        {
          $group: {
            _id: "$vendedor",
            total: { $sum: "$total" },
          },
        },
        {
          $lookup: {
            from: "usuarios",
            localField: "_id",
            foreignField: "_id",
            as: "vendedor",
          },
        },

        {
          $sort: { total: -1 },
        },
      ]);
      return vendedores;
    },

    // Pedidos
    obtenerPedidos: async () => {
      try {
        const pedidos = await Pedido.find();
        return pedidos;
      } catch (error) {
        console.log(error);
      }
    },

    obtenerPedidosVendedor: async (_, {}, ctx) => {
      try {
        const pedidos = await Pedido.find({
          vendedor: ctx.usuario.id,
        }).populate("cliente");

        return pedidos;
      } catch (error) {
        console.log(error);
      }
    },

    obtenerPedido: async (_, { id }, ctx) => {
      const pedido = await Pedido.findById(id);
      if (!pedido) {
        throw new Error("EL pedido no existe");
      }

      if (pedido.vendedor.toString() !== ctx.usuario.id) {
        throw new Error("No tienes credenciales");
      }

      return pedido;
    },

    obtenerPedidoEstado: async (_, { estado }, ctx) => {
      const pedidos = await Pedido.find({ vendedor: ctx.usuario.id, estado });
      return pedidos;
    },

    buscarProducto: async (_, { texto }) => {
      const productos = await Producto.find({
        $text: { $search: texto },
      }).limit(10);
      return productos;
    },
  },

  Mutation: {
    // Usuarios
    nuevoUsuario: async (_, { input }) => {
      const { email, password } = input;

      //revisar usuario
      const existeUsuario = await Usuario.findOne({ email });
      if (existeUsuario) {
        throw new Error("el usuario ya esta registrado");
      }
      //hashear pasword
      const salt = await bcryptjs.genSalt(10);
      input.password = await bcryptjs.hash(password, salt);

      //guardar en ddbb
      try {
        const usuario = await new Usuario(input);
        usuario.save();
        return usuario;
      } catch (error) {
        console.log(error);
      }

      return "Crando...";
    },

    autenticarUsuario: async (_, { input }) => {
      const { email, password } = input;

      // si el usuario existe
      const existeUsuario = await Usuario.findOne({ email });

      if (!existeUsuario) {
        throw new Error("el usuario no existe");
      }

      // revisar el password es correcto
      const passwordCorrecto = await bcryptjs.compare(
        password,
        existeUsuario.password
      );
      if (!passwordCorrecto) {
        throw new Error("El password o el email es incorrecto");
      }

      // token
      return {
        token: crearToken(existeUsuario, process.env.SECRET, "24h"),
      };
    },

    nuevoProducto: async (_, { input }) => {
      try {
        const nuevoProducto = await new Producto(input);
        const producto = await nuevoProducto.save();
        return producto;
      } catch (error) {
        console.log(error);
      }
    },

    // Productos
    actualizarProducto: async (_, { id, input }) => {
      // mira si existe producto
      let producto = await Producto.findById(id);
      if (!producto) {
        throw new Error("Producto no encontrado");
      }
      // guardar
      producto = await Producto.findOneAndUpdate({ _id: id }, input, {
        new: true,
      });
      return producto;
    },

    eliminarProducto: async (_, { id }) => {
      let producto = await Producto.findById(id);
      if (!producto) {
        throw new Error("Producto no encontrado");
      }
      await Producto.findOneAndRemove({ _id: id });
      return "Producto eliminado";
    },

    // Clientes
    nuevoCliente: async (_, { input }, ctx) => {
      const { email } = input;

      const cliente = await Cliente.findOne({ email });
      if (cliente) {
        throw new Error("El cliente ya existe");
      }

      const nuevoCliente = await new Cliente(input);

      // asignar vendedor
      nuevoCliente.vendedor = ctx.usuario.id;

      // crear cliente

      try {
        const resultado = await nuevoCliente.save();
        return resultado;
      } catch (error) {
        console.log(error);
      }
    },

    actualizarCliente: async (_, { id, input }, ctx) => {
      // verificar si existe
      let cliente = await Cliente.findById(id);

      if (!cliente) {
        throw new Error("El cliente no existe");
      }

      // verificar el vendedor que lo esta editando
      if (cliente.vendedor.toString() !== ctx.usuario.id) {
        throw new Error("No estas authorizado a modificar este cliente");
      }
      // guardar el cliente

      cliente = await Cliente.findOneAndUpdate({ _id: id }, input, {
        new: true,
      });
      return cliente;
    },

    eliminarCliente: async (_, { id }, ctx) => {
      // verificar si existe
      let cliente = await Cliente.findById(id);

      if (!cliente) {
        throw new Error("El cliente no existe");
      }

      // verificar el vendedor que lo esta editando
      if (cliente.vendedor.toString() !== ctx.usuario.id) {
        throw new Error("No estas authorizado a eliminar este cliente");
      }

      await Cliente.findOneAndRemove({ _id: id });
      return "Cliente eliminado.";
    },

    // Pedidos
    nuevoPedido: async (_, { input }, ctx) => {
      const { cliente } = input;
      // verificar si existe
      let clienteFind = await Cliente.findById(cliente);

      if (!clienteFind) {
        throw new Error("El cliente no existe");
      }

      // verificar si el cliente es del vendedor
      if (clienteFind.vendedor.toString() !== ctx.usuario.id) {
        throw new Error("No estas authorizado a vender este cliente");
      }

      // verificar el stock
      // for await es un iterador asyncrono se implemento no hace mucho evita que se jecute el proximo codigo mientras no se haya completado
      for await (const articulo of input.pedido) {
        const { id } = articulo;
        const producto = await Producto.findById(id);

        if (articulo.cantidad > producto.existencia) {
          throw new Error(
            `El articulo ${producto.nombre} excede de la cantidad disponible`
          );
        } else {
          // restar cantidad de stock
          producto.existencia = producto.existencia - articulo.cantidad;
          await producto.save();
        }
      }

      // crear nuevo pedido
      let nuevoPedido = await new Pedido(input);

      // asignar vendedor
      nuevoPedido.vendedor = ctx.usuario.id;
      // guardar en ddbb

      const resultado = await nuevoPedido.save();
      console.log(resultado);
      return resultado;
    },

    actualizarPedido: async (_, { id, input }, ctx) => {
      const { cliente } = input;

      // si el pedido existe
      const existePedido = await Pedido.findById(id);
      if (!existePedido) {
        throw new Error(" El pedido no existe");
      }

      // si el cliente existe
      const existeCliente = await Cliente.findById(cliente);
      if (!existeCliente) {
        throw new Error(" El cliente no existe");
      }

      //  si el cliente y el pedido pertenece al vendedor
      if (existeCliente.vendedor.toString() !== ctx.usuario.id) {
        throw new Error("no tienes credenciales");
      }

      // revisar el stock
      if (input.pedido) {
        for await (const articulo of input.pedido) {
          const { id } = articulo;
          const producto = await Producto.findById(id);

          if (articulo.cantidad > producto.existencia) {
            throw new Error(
              `El articulo ${producto.nombre} excede de la cantidad disponible`
            );
          } else {
            producto.existencia = producto.existencia - articulo.cantidad;
          }
        }
      }

      // guardar
      const resultado = await Pedido.findOneAndUpdate({ _id: id }, input, {
        new: true,
      });

      return resultado;
    },

    eliminarPedido: async (_, { id }, ctx) => {
      const pedido = await Pedido.findById(id);
      if (!pedido) {
        throw new Error("el pedido no existe");
      }

      if (pedido.vendedor.toString() !== ctx.usuario.id) {
        throw new Error("No tienes credenciales");
      }

      await Pedido.findOneAndDelete({ _id: id });
      return "Pedido eliminado correctamente";
    },
  },
};

module.exports = resolvers;
