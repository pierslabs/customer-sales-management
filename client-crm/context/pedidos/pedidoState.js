import React, { useReducer } from "react";
import PedidoContext from "./pedidoContext";
import PedidoReducer from "./pedidoReducer";

import {
  SELECCIONAR_CLIENTE,
  SELECCIONAR_PRODUCTO,
  CANTIDAD_PRODUCTO,
  ACTUALIZAR_TOTAL,
} from "../../types";

const PedidoState = ({ children }) => {
  // state pedido
  const initialState = {
    cliente: {},
    productos: [],
    total: 0,
  };

  const [state, dispatch] = useReducer(PedidoReducer, initialState);

  //  MODIFICA LOS CLIENTES

  const agregarCliente = (cliente) => {
    dispatch({
      type: SELECCIONAR_CLIENTE,
      payload: cliente,
    });
  };

  // MODIFICA LOS PRODUCTOS

  const agregarProductos = (productosSeleccionados) => {
    // hay que hacer una copia de los productos antes de que react-select al añadir un nuevo producto
    // borre el campo de cantidad de los anteriores
    // solucion al añadir producto y que reescriba la cantidad del anterior producto añadido

    let nuevoState;

    if (state.productos.length > 0) {
      // coger del segundo array una copia  para asignarla al primero
      nuevoState = productosSeleccionados.map((producto) => {
        const nuevoObjeto = state.productos.find(
          (productoState) => productoState.id === producto.id
        );

        return { ...producto, ...nuevoObjeto };
      });
    } else {
      nuevoState = productosSeleccionados;
    }
    dispatch({
      type: SELECCIONAR_PRODUCTO,
      payload: nuevoState,
    });
  };

  // MODIFICA CANTIDADES PRODUCTO
  const cantidadProductos = (nuevoProducto) => {
    dispatch({
      type: CANTIDAD_PRODUCTO,
      payload: nuevoProducto,
    });
  };

  // TOTAL
  const actualizarTotal = () => {
    dispatch({
      type: ACTUALIZAR_TOTAL,
    });
  };

  return (
    <PedidoContext.Provider
      value={{
        cliente: state.cliente,
        productos: state.productos,
        total: state.total,
        agregarCliente,
        agregarProductos,
        cantidadProductos,
        actualizarTotal,
      }}
    >
      {children}
    </PedidoContext.Provider>
  );
};

export default PedidoState;
