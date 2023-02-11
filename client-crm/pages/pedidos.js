import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import Pedido from "../components/Pedido";
import { gql, useQuery } from "@apollo/client";

const OBTENER_PEDIDOS = gql`
  query ObtenerPedidosVendedor {
    obtenerPedidosVendedor {
      pedido {
        id
        cantidad
        nombre
        precio
      }
      total
      vendedor
      fecha
      estado
      id
      cliente {
        nombre
        apellido
        id
        email
        telefono
      }
    }
  }
`;

const Pedidos = () => {
  const { data, loading, error } = useQuery(OBTENER_PEDIDOS);

  if (loading) return null;
  const { obtenerPedidosVendedor } = data;

  return (
    <div>
      <Layout>
        <h1 className="text-2xl text-gray-800 font-light">Pedidos</h1>
        <Link href="/nuevopedido">
          <a className=" bg-blue-800 py-2 px-5 mt-5 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 font-bold">
            Nuevo Pedido
          </a>
        </Link>
        {obtenerPedidosVendedor.length === 0 ? (
          <p className="mt-5 text-center text-2xl"> No hay pedidos</p>
        ) : (
          obtenerPedidosVendedor.map((pedido) => (
            <Pedido key={pedido.id} pedido={pedido} />
          ))
        )}
      </Layout>
    </div>
  );
};

export default Pedidos;
