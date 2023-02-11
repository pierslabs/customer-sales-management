import React, { useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import Swal from "sweetalert2";

const ACTUALIZAR_PEDIDO = gql`
  mutation actualizarPedido($id: ID!, $input: PedidoInput) {
    actualizarPedido(id: $id, input: $input) {
      estado
    }
  }
`;

const ELIMINAR_PEDIDO = gql`
  mutation eliminarPedido($id: ID!) {
    eliminarPedido(id: $id)
  }
`;

const OBTENER_PEDIDOS = gql`
  query obtenerPedidosVendedor {
    obtenerPedidosVendedor {
      id
    }
  }
`;

const Pedido = ({ pedido }) => {
  const { id, total, cliente, estado } = pedido;

  // MUTATION
  const [actualizarPedido] = useMutation(ACTUALIZAR_PEDIDO);

  const [eliminarPedido] = useMutation(ELIMINAR_PEDIDO, {
    update(cache) {
      const { obtenerPedidosVendedor } = cache.readQuery({
        query: OBTENER_PEDIDOS,
      });

      cache.writeQuery({
        query: OBTENER_PEDIDOS,
        data: {
          obtenerPedidosVendedor: obtenerPedidosVendedor.filter(
            (pedido) => pedido.id !== id
          ),
        },
      });
    },
  });

  const [estadoPedido, setEstadoPedido] = useState(estado);
  const [clase, setClase] = useState("");

  useEffect(() => {
    if (estadoPedido) {
      setEstadoPedido(estadoPedido);
    }
    clasePedido();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [estadoPedido]);

  // MODIFICA COLOR SEGUN ESTADO

  const clasePedido = () => {
    if (estadoPedido === "PENDIENTE") {
      setClase("border-yellow-500");
    } else if (estadoPedido === "COMPLETADO") {
      setClase("border-green-600");
    } else {
      setClase("border-red-500");
    }
  };

  const cambiarEstadoPedido = async (nuevoEstado) => {
    try {
      const { data } = await actualizarPedido({
        variables: {
          id,
          input: {
            estado: nuevoEstado,
            cliente: cliente.id,
          },
        },
      });

      setEstadoPedido(data.actualizarPedido.estado);
    } catch (error) {
      console.log(error);
    }
  };

  const confirmarEliminarPedido = () => {
    Swal.fire({
      title: "Quieres eliminar este pedido?",
      text: "Esta acción no se puede deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminalo!",
      cancelButtonText: "No, cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await eliminarPedido({
            variables: {
              id,
            },
          });
          Swal.fire("Eliminado!", data.eliminarPedido, "success");
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div
      className={`${clase} border-t-4 mt-4 bg-white rounded p-6 md:grid md:grid-cols-2 md:gap-4 shadow-lg`}
    >
      <div>
        <div className="font-bold text-gray">Cliente: {cliente.nombre}</div>
        {cliente.email && (
          <p className="flex items-center my-2">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            {cliente.email}
          </p>
        )}

        {cliente.telefono && (
          <p className="flex items-center my-2">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            {cliente.telefono}
          </p>
        )}
        <h2 className="text-gray-800 font-bold">Estado Pedido:</h2>
        <select
          value={estadoPedido}
          className="mt-2 apperance-none bg-blue-600 border border-blue-600 text-white p-2 
          text-center rounded leadinh-tight focus:outline-none focus:bg-blue-600 focus:border-blue-500 uppercase text-xs font-bold"
          onChange={(e) => cambiarEstadoPedido(e.target.value)}
        >
          <option value="COMPLETADO">COMPLETADO</option>
          <option value="PENDIENTE">PENDIENTE</option>
          <option value="CANCELADO">CANCELADO</option>
        </select>
      </div>
      <div>
        <h2 className="text-gray-800 font-bold mt-2">Resumen del Pedido</h2>
        {pedido.pedido.map((articulo) => (
          <div key={articulo.id} className="mt-4 ">
            <p className="text-sm text-gray-600">Producto: {articulo.nombre}</p>
            <p className="text-sm text-gray-600">
              Cantidad: {articulo.cantidad}
            </p>
          </div>
        ))}
        <p className="text-gray-800 mt-3 font-bold">
          Total a pagar:
          <span className="font-light"> {total}€</span>
        </p>
        <button
          className="flex items-center mt-4 bg-red-800 px-5 py-2 
          inline-block text-white rounded leading-tight uppercase text-xs"
          onClick={() => confirmarEliminarPedido()}
        >
          Eliminar pedido
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pedido;
