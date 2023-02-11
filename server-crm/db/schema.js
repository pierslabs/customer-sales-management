const { gql } = require("apollo-server");

// Schema
const typeDefs = gql`
  #types
  type Usuario {
    id: ID
    nombre: String
    apellido: String
    email: String
    creado: String
  }

  type TopVendedor {
    total: Float
    vendedor: [Usuario]
  }

  type Token {
    token: String
  }

  type Producto {
    id: ID
    nombre: String
    existencia: Int
    precio: Float
    creado: String
  }

  type Cliente {
    id: ID
    nombre: String
    apellido: String
    email: String
    empresa: String
    telefono: String
    vendedor: ID
  }

  type TopCLiente {
    total: Float
    cliente: [Cliente]
  }

  type Pedido {
    id: ID
    pedido: [PedidoGrupo]
    total: Float
    cliente: Cliente
    vendedor: ID
    fecha: String
    estado: EstadoPedido
  }

  type PedidoGrupo {
    id: ID
    cantidad: Int
    nombre: String
    precio: Float
  }

  #inputs
  input UsuarioInput {
    nombre: String!
    apellido: String!
    email: String!
    password: String!
  }

  input AutenticarInput {
    email: String!
    password: String!
  }

  input ProductoInput {
    nombre: String!
    existencia: Int!
    precio: Float!
  }

  input ClientesInput {
    nombre: String!
    apellido: String!
    empresa: String!
    email: String!
    telefono: String
  }

  input PedidoProductoInput {
    id: ID
    cantidad: Int
    nombre: String
    precio: Float
  }

  input PedidoInput {
    pedido: [PedidoProductoInput]
    total: Float
    cliente: ID
    estado: EstadoPedido
  }

  enum EstadoPedido {
    PENDIENTE
    COMPLETADO
    CANCELADO
  }

  #Querys
  type Query {
    #Usuarios
    #obtenerUsuario(token: String!): Usuario
    obtenerUsuario: Usuario

    #Productos
    obtenerProductos: [Producto]
    obtenerProducto(id: ID!): Producto

    #Clientes
    obtenerClientes: [Cliente]
    obtenerClientesVendedor: [Cliente]
    obtenerCliente(id: ID!): Cliente

    #Pedidos
    obtenerPedidos: [Pedido]
    obtenerPedidosVendedor: [Pedido]
    obtenerPedido(id: ID!): Pedido
    obtenerPedidoEstado(estado: String!): [Pedido]

    #Busquedas avanzadas
    mejoresClientes: [TopCLiente]
    mejoresVendedores: [TopVendedor]
    buscarProducto(texto: String): [Producto]
  }

  #Muattations
  type Mutation {
    #Usuario
    nuevoUsuario(input: UsuarioInput): Usuario
    autenticarUsuario(input: AutenticarInput): Token

    #Producto
    nuevoProducto(input: ProductoInput): Producto
    actualizarProducto(id: ID!, input: ProductoInput): Producto
    eliminarProducto(id: ID!): String

    #Clientes
    nuevoCliente(input: ClientesInput): Cliente
    actualizarCliente(id: ID!, input: ClientesInput): Cliente
    eliminarCliente(id: ID!): String

    #Pedidos
    nuevoPedido(input: PedidoInput): Pedido
    actualizarPedido(id: ID!, input: PedidoInput): Pedido
    eliminarPedido(id: ID!): String
  }
`;

module.exports = typeDefs;

//   el signo de exclamacion indica que es obligatorio
//query solo es para recibir datos *selects
//para todo lo demmas mutation
