import React from "react";
import Layout from "../components/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { gql, useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const NUEVO_PRODUCTO = gql`
  mutation nuevoProducto($input: ProductoInput) {
    nuevoProducto(input: $input) {
      nombre
      existencia
      creado
      precio
      id
    }
  }
`;

const OBTENER_PRODUCTOS = gql`
  query ObtenerProductos {
    obtenerProductos {
      nombre
      creado
      existencia
      precio
      id
    }
  }
`;

const NuevoProducto = () => {
  const router = useRouter();

  const [nuevoProducto] = useMutation(NUEVO_PRODUCTO, {
    update(cache, { data: { nuevoProducto } }) {
      // obtener objeto cache
      const { obtenerProductos } = cache.readQuery({
        query: OBTENER_PRODUCTOS,
      });

      // rescribir
      cache.writeQuery({
        query: OBTENER_PRODUCTOS,
        data: {
          obtenerProductos: [...obtenerProductos, nuevoProducto],
        },
      });
    },
  });

  const formik = useFormik({
    initialValues: {
      nombre: "",
      existencia: "",
      precio: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre del producto es obligatorio"),
      existencia: Yup.number()
        .required("La cantidad del producto es obligatoria")
        .positive("No se aceptan numeros negativos")
        .integer("La cantidad tiene que ser un numero entero"),
      precio: Yup.number()
        .required("El precio del producto es obligatorio")
        .positive("El precio no puede ser un numero negativo"),
    }),
    onSubmit: async (valores) => {
      const { nombre, existencia, precio } = valores;

      try {
        const { data } = await nuevoProducto({
          variables: {
            input: {
              nombre,
              existencia,
              precio,
            },
          },
        });

        Swal.fire(
          "Creado",
          "El producto se ha registrado correctamente",
          "success"
        );
        router.push("productos");
      } catch (error) {
        Swal.fire(
          "Algo ha ido mal",
          "El producto no se ha registrado correctamente",
          "error"
        );
        console.log(error);
      }
    },
  });

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">
        Crear Nuevo Producto
      </h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <form
            onSubmit={formik.handleSubmit}
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nombre}
              />
            </div>
            {formik.touched.nombre && formik.errors.nombre ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.nombre}</p>
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.existencia}
              />
            </div>
            {formik.touched.existencia && formik.errors.existencia ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.existencia}</p>
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.precio}
              />
            </div>
            {formik.touched.precio && formik.errors.precio ? (
              <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Error</p>
                <p>{formik.errors.precio}</p>
              </div>
            ) : null}

            <input
              type="submit"
              className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
              value="Agregar Nuevo  Producto"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default NuevoProducto;
