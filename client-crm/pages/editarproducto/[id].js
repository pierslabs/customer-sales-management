import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const OBTENER_PRODUCTO = gql`
  query ObtenerProducto($id: ID!) {
    obtenerProducto(id: $id) {
      id
      nombre
      existencia
      precio
      creado
    }
  }
`;

const ACTUALIZAR_PRODUCTO = gql`
  mutation actualizarProducto($id: ID!, $input: ProductoInput) {
    actualizarProducto(id: $id, input: $input) {
      id
      nombre
      existencia
      precio
    }
  }
`;

const EditarProducto = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, data, error } = useQuery(OBTENER_PRODUCTO, {
    variables: {
      id: id,
    },
  });

  const [actualizarProducto] = useMutation(ACTUALIZAR_PRODUCTO);

  if (loading) {
    return "Cargando ...";
  }

  if (!data) {
    return "Accion no permitida";
  }
  // schema validacion
  const validationSchema = Yup.object({
    nombre: Yup.string().required("El nombre del producto es obligatorio"),
    existencia: Yup.number()
      .required("La cantidad del producto es obligatoria")
      .positive("No se aceptan numeros negativos")
      .integer("La cantidad tiene que ser un numero entero"),
    precio: Yup.number()
      .required("El precio del producto es obligatorio")
      .positive("El precio no puede ser un numero negativo"),
  });

  const actualizarInfoProducto = async (valores) => {
    const { nombre, precio, existencia } = valores;
    try {
      const { data } = await actualizarProducto({
        variables: {
          id,
          input: {
            nombre,
            precio,
            existencia,
          },
        },
      });
      Swal.fire(
        "Actualizado!",
        "Producto actualizado correcatmente",
        "success"
      );
      router.push("/productos");
    } catch (error) {
      Swal.fire(
        "Hemos tenido un problema",
        "El producto no se ha actualizado",
        "error"
      );
    }
  };

  const { obtenerProducto } = data;

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Editar Producto</h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <Formik
            enableReinitialize
            validationSchema={validationSchema}
            initialValues={obtenerProducto}
            onSubmit={(valores) => {
              actualizarInfoProducto(valores);
            }}
          >
            {(props) => {
              return (
                <form
                  onSubmit={props.handleSubmit}
                  className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
                >
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="nombre"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                focus:outline-none focus:shadow-outline"
                      id="nombre"
                      placeholder="Nombre Producto"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.nombre}
                    />
                  </div>
                  {props.touched.nombre && props.errors.nombre ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{props.errors.nombre}</p>
                    </div>
                  ) : null}

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="existencia"
                    >
                      Cantidad disponible
                    </label>
                    <input
                      type="number"
                      className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                        focus:outline-none focus:shadow-outline"
                      id="existencia"
                      placeholder="Cantidad disponible"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.existencia}
                    />
                  </div>
                  {props.touched.existencia && props.errors.existencia ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{props.errors.existencia}</p>
                    </div>
                  ) : null}

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="precio"
                    >
                      Precio
                    </label>
                    <input
                      type="number"
                      className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                focus:outline-none focus:shadow-outline"
                      id="precio"
                      placeholder="Precio"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.precio}
                    />
                  </div>
                  {props.touched.precio && props.errors.precio ? (
                    <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{props.errors.precio}</p>
                    </div>
                  ) : null}

                  <input
                    type="submit"
                    className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
                    value="Editar Producto"
                  />
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </Layout>
  );
};

export default EditarProducto;
