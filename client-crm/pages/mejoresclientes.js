import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { gql, useQuery } from "@apollo/client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MEJORES_CLIENTES = gql`
  query mejoresClientes {
    mejoresClientes {
      total
      cliente {
        nombre
        apellido
        email
        empresa
        telefono
        vendedor
      }
    }
  }
`;

const MejoresClientes = () => {
  const { data, loading, error, startPolling, stopPolling } =
    useQuery(MEJORES_CLIENTES);

  useEffect(() => {
    startPolling(1000);
    return () => {
      stopPolling();
    };
  }, [startPolling, stopPolling]);

  if (loading) return null;

  const { mejoresClientes } = data;

  const clienteGrafica = [];

  mejoresClientes.map((cliente, index) => {
    clienteGrafica[index] = {
      ...cliente.cliente[0],
      total: cliente.total,
    };
  });

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Mejores Vendedores</h1>
      <ResponsiveContainer width={"99%"} height={550}>
        <BarChart
          width={500}
          height={300}
          data={clienteGrafica}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nombre" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#3182CE" />
        </BarChart>
      </ResponsiveContainer>
    </Layout>
  );
};

export default MejoresClientes;