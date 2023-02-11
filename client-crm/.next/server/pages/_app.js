/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/apollo.js":
/*!**************************!*\
  !*** ./config/apollo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-context */ \"apollo-link-context\");\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst httpLink = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.createHttpLink)({\n    uri: 'http://localhost:4005/',\n    fetch\n});\nconst authLink = (0,apollo_link_context__WEBPACK_IMPORTED_MODULE_1__.setContext)((_, { headers  })=>{\n    // leer storage\n    const token = localStorage.getItem('token');\n    return {\n        headers: {\n            ...headers,\n            authorization: token ? `Bearer ${token}` : ''\n        }\n    };\n});\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    connectToDevTools: true,\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache(),\n    link: authLink.concat(httpLink)\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvYXBvbGxvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRFO0FBQzVCO0FBRWhELEtBQUssQ0FBQ0ksUUFBUSxHQUFHRiw4REFBYyxDQUFDLENBQUM7SUFDL0JHLEdBQUcsRUFBRSxDQUF3QjtJQUM3QkMsS0FBSztBQUNQLENBQUM7QUFFRCxLQUFLLENBQUNDLFFBQVEsR0FBR0osK0RBQVUsRUFBRUssQ0FBQyxFQUFFLENBQUMsQ0FBQ0MsT0FBTyxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQy9DLEVBQWU7SUFDZixLQUFLLENBQUNDLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTztJQUMxQyxNQUFNLENBQUMsQ0FBQztRQUNOSCxPQUFPLEVBQUUsQ0FBQztlQUNMQSxPQUFPO1lBQ1ZJLGFBQWEsRUFBRUgsS0FBSyxJQUFJLE9BQU8sRUFBRUEsS0FBSyxLQUFLLENBQUU7UUFDL0MsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsS0FBSyxDQUFDSSxNQUFNLEdBQUcsR0FBRyxDQUFDZCx3REFBWSxDQUFDLENBQUM7SUFDL0JlLGlCQUFpQixFQUFFLElBQUk7SUFDdkJDLEtBQUssRUFBRSxHQUFHLENBQUNmLHlEQUFhO0lBQ3hCZ0IsSUFBSSxFQUFFVixRQUFRLENBQUNXLE1BQU0sQ0FBQ2QsUUFBUTtBQUNoQyxDQUFDO0FBRUQsaUVBQWVVLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NybWNsaWVudGVzLy4vY29uZmlnL2Fwb2xsby5qcz82N2M4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSwgY3JlYXRlSHR0cExpbmsgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnYXBvbGxvLWxpbmstY29udGV4dCc7XG5cbmNvbnN0IGh0dHBMaW5rID0gY3JlYXRlSHR0cExpbmsoe1xuICB1cmk6ICdodHRwOi8vbG9jYWxob3N0OjQwMDUvJyxcbiAgZmV0Y2gsXG59KTtcblxuY29uc3QgYXV0aExpbmsgPSBzZXRDb250ZXh0KChfLCB7IGhlYWRlcnMgfSkgPT4ge1xuICAvLyBsZWVyIHN0b3JhZ2VcbiAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgcmV0dXJuIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAuLi5oZWFkZXJzLFxuICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6ICcnLFxuICAgIH0sXG4gIH07XG59KTtcblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIGNvbm5lY3RUb0RldlRvb2xzOiB0cnVlLFxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgbGluazogYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7XG4iXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsImNyZWF0ZUh0dHBMaW5rIiwic2V0Q29udGV4dCIsImh0dHBMaW5rIiwidXJpIiwiZmV0Y2giLCJhdXRoTGluayIsIl8iLCJoZWFkZXJzIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXV0aG9yaXphdGlvbiIsImNsaWVudCIsImNvbm5lY3RUb0RldlRvb2xzIiwiY2FjaGUiLCJsaW5rIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/apollo.js\n");

/***/ }),

/***/ "./context/pedidos/pedidoContext.js":
/*!******************************************!*\
  !*** ./context/pedidos/pedidoContext.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PedidoContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PedidoContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3BlZGlkb3MvcGVkaWRvQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsS0FBSyxDQUFDQyxhQUFhLGlCQUFHRCxvREFBYTtBQUVuQyxpRUFBZUMsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JtY2xpZW50ZXMvLi9jb250ZXh0L3BlZGlkb3MvcGVkaWRvQ29udGV4dC5qcz8wY2IwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUGVkaWRvQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgUGVkaWRvQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwiUGVkaWRvQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/pedidos/pedidoContext.js\n");

/***/ }),

/***/ "./context/pedidos/pedidoReducer.js":
/*!******************************************!*\
  !*** ./context/pedidos/pedidoReducer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ \"./types/index.js\");\n\n// eslint-disable-next-line import/no-anonymous-default-export\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state, action)=>{\n    switch(action.type){\n        case _types__WEBPACK_IMPORTED_MODULE_0__.SELECCIONAR_CLIENTE:\n            return {\n                ...state,\n                cliente: action.payload\n            };\n        case _types__WEBPACK_IMPORTED_MODULE_0__.SELECCIONAR_PRODUCTO:\n            return {\n                ...state,\n                productos: action.payload\n            };\n        case _types__WEBPACK_IMPORTED_MODULE_0__.CANTIDAD_PRODUCTO:\n            return {\n                ...state,\n                productos: state.productos.map((producto)=>producto.id === action.payload.id ? producto = action.payload : producto\n                )\n            };\n        case _types__WEBPACK_IMPORTED_MODULE_0__.ACTUALIZAR_TOTAL:\n            return {\n                ...state,\n                total: state.productos.reduce((nuevoTotal, articulo)=>nuevoTotal += articulo.precio * articulo.cantidad\n                , 0)\n            };\n        default:\n            return state;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3BlZGlkb3MvcGVkaWRvUmVkdWNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUtvQjtBQUVwQixFQUE4RDtBQUM5RCxpRUFBZ0IsQ0FBQUksS0FBSyxFQUFFQyxNQUFNLEdBQUssQ0FBQztJQUNqQyxNQUFNLENBQUVBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNqQixJQUFJLENBQUNOLHVEQUFtQjtZQUN0QixNQUFNLENBQUMsQ0FBQzttQkFDSEksS0FBSztnQkFDUkcsT0FBTyxFQUFFRixNQUFNLENBQUNHLE9BQU87WUFDekIsQ0FBQztRQUVILElBQUksQ0FBQ1Asd0RBQW9CO1lBQ3ZCLE1BQU0sQ0FBQyxDQUFDO21CQUNIRyxLQUFLO2dCQUNSSyxTQUFTLEVBQUVKLE1BQU0sQ0FBQ0csT0FBTztZQUMzQixDQUFDO1FBRUgsSUFBSSxDQUFDTixxREFBaUI7WUFDcEIsTUFBTSxDQUFDLENBQUM7bUJBQ0hFLEtBQUs7Z0JBQ1JLLFNBQVMsRUFBRUwsS0FBSyxDQUFDSyxTQUFTLENBQUNDLEdBQUcsRUFBRUMsUUFBUSxHQUN0Q0EsUUFBUSxDQUFDQyxFQUFFLEtBQUtQLE1BQU0sQ0FBQ0csT0FBTyxDQUFDSSxFQUFFLEdBQzVCRCxRQUFRLEdBQUdOLE1BQU0sQ0FBQ0csT0FBTyxHQUMxQkcsUUFBUTs7WUFFaEIsQ0FBQztRQUVILElBQUksQ0FBQ1Isb0RBQWdCO1lBQ25CLE1BQU0sQ0FBQyxDQUFDO21CQUNIQyxLQUFLO2dCQUNSUyxLQUFLLEVBQUVULEtBQUssQ0FBQ0ssU0FBUyxDQUFDSyxNQUFNLEVBQzFCQyxVQUFVLEVBQUVDLFFBQVEsR0FDbEJELFVBQVUsSUFBSUMsUUFBUSxDQUFDQyxNQUFNLEdBQUdELFFBQVEsQ0FBQ0UsUUFBUTtrQkFDcEQsQ0FBQztZQUVMLENBQUM7O1lBRUQsTUFBTSxDQUFDZCxLQUFLOztBQUVsQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JtY2xpZW50ZXMvLi9jb250ZXh0L3BlZGlkb3MvcGVkaWRvUmVkdWNlci5qcz9lNWE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFNFTEVDQ0lPTkFSX0NMSUVOVEUsXG4gIFNFTEVDQ0lPTkFSX1BST0RVQ1RPLFxuICBDQU5USURBRF9QUk9EVUNUTyxcbiAgQUNUVUFMSVpBUl9UT1RBTCxcbn0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgZGVmYXVsdCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRUxFQ0NJT05BUl9DTElFTlRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNsaWVudGU6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcblxuICAgIGNhc2UgU0VMRUNDSU9OQVJfUFJPRFVDVE86XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdG9zOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH07XG5cbiAgICBjYXNlIENBTlRJREFEX1BST0RVQ1RPOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3Rvczogc3RhdGUucHJvZHVjdG9zLm1hcCgocHJvZHVjdG8pID0+XG4gICAgICAgICAgcHJvZHVjdG8uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXG4gICAgICAgICAgICA/IChwcm9kdWN0byA9IGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAgICAgOiBwcm9kdWN0b1xuICAgICAgICApLFxuICAgICAgfTtcblxuICAgIGNhc2UgQUNUVUFMSVpBUl9UT1RBTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0b3RhbDogc3RhdGUucHJvZHVjdG9zLnJlZHVjZShcbiAgICAgICAgICAobnVldm9Ub3RhbCwgYXJ0aWN1bG8pID0+XG4gICAgICAgICAgICAobnVldm9Ub3RhbCArPSBhcnRpY3Vsby5wcmVjaW8gKiBhcnRpY3Vsby5jYW50aWRhZCksXG4gICAgICAgICAgMFxuICAgICAgICApLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIlNFTEVDQ0lPTkFSX0NMSUVOVEUiLCJTRUxFQ0NJT05BUl9QUk9EVUNUTyIsIkNBTlRJREFEX1BST0RVQ1RPIiwiQUNUVUFMSVpBUl9UT1RBTCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImNsaWVudGUiLCJwYXlsb2FkIiwicHJvZHVjdG9zIiwibWFwIiwicHJvZHVjdG8iLCJpZCIsInRvdGFsIiwicmVkdWNlIiwibnVldm9Ub3RhbCIsImFydGljdWxvIiwicHJlY2lvIiwiY2FudGlkYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/pedidos/pedidoReducer.js\n");

/***/ }),

/***/ "./context/pedidos/pedidoState.js":
/*!****************************************!*\
  !*** ./context/pedidos/pedidoState.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pedidoContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pedidoContext */ \"./context/pedidos/pedidoContext.js\");\n/* harmony import */ var _pedidoReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pedidoReducer */ \"./context/pedidos/pedidoReducer.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../types */ \"./types/index.js\");\n\n\n\n\n\nconst PedidoState = ({ children  })=>{\n    // state pedido\n    const initialState = {\n        cliente: {\n        },\n        productos: [],\n        total: 0\n    };\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_pedidoReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], initialState);\n    //  MODIFICA LOS CLIENTES\n    const agregarCliente = (cliente)=>{\n        dispatch({\n            type: _types__WEBPACK_IMPORTED_MODULE_4__.SELECCIONAR_CLIENTE,\n            payload: cliente\n        });\n    };\n    // MODIFICA LOS PRODUCTOS\n    const agregarProductos = (productosSeleccionados)=>{\n        // hay que hacer una copia de los productos antes de que react-select al añadir un nuevo producto\n        // borre el campo de cantidad de los anteriores\n        // solucion al añadir producto y que reescriba la cantidad del anterior producto añadido\n        let nuevoState;\n        if (state.productos.length > 0) {\n            // coger del segundo array una copia  para asignarla al primero\n            nuevoState = productosSeleccionados.map((producto)=>{\n                const nuevoObjeto = state.productos.find((productoState)=>productoState.id === producto.id\n                );\n                return {\n                    ...producto,\n                    ...nuevoObjeto\n                };\n            });\n        } else {\n            nuevoState = productosSeleccionados;\n        }\n        dispatch({\n            type: _types__WEBPACK_IMPORTED_MODULE_4__.SELECCIONAR_PRODUCTO,\n            payload: nuevoState\n        });\n    };\n    // MODIFICA CANTIDADES PRODUCTO\n    const cantidadProductos = (nuevoProducto)=>{\n        dispatch({\n            type: _types__WEBPACK_IMPORTED_MODULE_4__.CANTIDAD_PRODUCTO,\n            payload: nuevoProducto\n        });\n    };\n    // TOTAL\n    const actualizarTotal = ()=>{\n        dispatch({\n            type: _types__WEBPACK_IMPORTED_MODULE_4__.ACTUALIZAR_TOTAL\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pedidoContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            cliente: state.cliente,\n            productos: state.productos,\n            total: state.total,\n            agregarCliente,\n            agregarProductos,\n            cantidadProductos,\n            actualizarTotal\n        },\n        __source: {\n            fileName: \"/app/context/pedidos/pedidoState.js\",\n            lineNumber: 74,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: children\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PedidoState);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3BlZGlkb3MvcGVkaWRvU3RhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0U7QUFDQTtBQU92QjtBQUVwQixLQUFLLENBQUNRLFdBQVcsSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUNyQyxFQUFlO0lBQ2YsS0FBSyxDQUFDQyxZQUFZLEdBQUcsQ0FBQztRQUNwQkMsT0FBTyxFQUFFLENBQUM7UUFBQSxDQUFDO1FBQ1hDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDYkMsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRUQsS0FBSyxNQUFFQyxLQUFLLE1BQUVDLFFBQVEsTUFBSWQsaURBQVUsQ0FBQ0Usc0RBQWEsRUFBRU8sWUFBWTtJQUVoRSxFQUF5QjtJQUV6QixLQUFLLENBQUNNLGNBQWMsSUFBSUwsT0FBTyxHQUFLLENBQUM7UUFDbkNJLFFBQVEsQ0FBQyxDQUFDO1lBQ1JFLElBQUksRUFBRWIsdURBQW1CO1lBQ3pCYyxPQUFPLEVBQUVQLE9BQU87UUFDbEIsQ0FBQztJQUNILENBQUM7SUFFRCxFQUF5QjtJQUV6QixLQUFLLENBQUNRLGdCQUFnQixJQUFJQyxzQkFBc0IsR0FBSyxDQUFDO1FBQ3BELEVBQWlHO1FBQ2hHLEVBQThDO1FBQy9DLEVBQXdGO1FBRXhGLEdBQUcsQ0FBQ0MsVUFBVTtRQUVkLEVBQUUsRUFBRVAsS0FBSyxDQUFDRixTQUFTLENBQUNVLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUMvQixFQUErRDtZQUMvREQsVUFBVSxHQUFHRCxzQkFBc0IsQ0FBQ0csR0FBRyxFQUFFQyxRQUFRLEdBQUssQ0FBQztnQkFDckQsS0FBSyxDQUFDQyxXQUFXLEdBQUdYLEtBQUssQ0FBQ0YsU0FBUyxDQUFDYyxJQUFJLEVBQ3JDQyxhQUFhLEdBQUtBLGFBQWEsQ0FBQ0MsRUFBRSxLQUFLSixRQUFRLENBQUNJLEVBQUU7O2dCQUdyRCxNQUFNLENBQUMsQ0FBQzt1QkFBSUosUUFBUTt1QkFBS0MsV0FBVztnQkFBQyxDQUFDO1lBQ3hDLENBQUM7UUFDSCxDQUFDLE1BQU0sQ0FBQztZQUNOSixVQUFVLEdBQUdELHNCQUFzQjtRQUNyQyxDQUFDO1FBQ0RMLFFBQVEsQ0FBQyxDQUFDO1lBQ1JFLElBQUksRUFBRVosd0RBQW9CO1lBQzFCYSxPQUFPLEVBQUVHLFVBQVU7UUFDckIsQ0FBQztJQUNILENBQUM7SUFFRCxFQUErQjtJQUMvQixLQUFLLENBQUNRLGlCQUFpQixJQUFJQyxhQUFhLEdBQUssQ0FBQztRQUM1Q2YsUUFBUSxDQUFDLENBQUM7WUFDUkUsSUFBSSxFQUFFWCxxREFBaUI7WUFDdkJZLE9BQU8sRUFBRVksYUFBYTtRQUN4QixDQUFDO0lBQ0gsQ0FBQztJQUVELEVBQVE7SUFDUixLQUFLLENBQUNDLGVBQWUsT0FBUyxDQUFDO1FBQzdCaEIsUUFBUSxDQUFDLENBQUM7WUFDUkUsSUFBSSxFQUFFVixvREFBZ0I7UUFDeEIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLHNFQUNITCwrREFBc0I7UUFDckIrQixLQUFLLEVBQUUsQ0FBQztZQUNOdEIsT0FBTyxFQUFFRyxLQUFLLENBQUNILE9BQU87WUFDdEJDLFNBQVMsRUFBRUUsS0FBSyxDQUFDRixTQUFTO1lBQzFCQyxLQUFLLEVBQUVDLEtBQUssQ0FBQ0QsS0FBSztZQUNsQkcsY0FBYztZQUNkRyxnQkFBZ0I7WUFDaEJVLGlCQUFpQjtZQUNqQkUsZUFBZTtRQUNqQixDQUFDOzs7Ozs7O2tCQUVBdEIsUUFBUTs7QUFHZixDQUFDO0FBRUQsaUVBQWVELFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NybWNsaWVudGVzLy4vY29udGV4dC9wZWRpZG9zL3BlZGlkb1N0YXRlLmpzPzY1NDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQZWRpZG9Db250ZXh0IGZyb20gXCIuL3BlZGlkb0NvbnRleHRcIjtcbmltcG9ydCBQZWRpZG9SZWR1Y2VyIGZyb20gXCIuL3BlZGlkb1JlZHVjZXJcIjtcblxuaW1wb3J0IHtcbiAgU0VMRUNDSU9OQVJfQ0xJRU5URSxcbiAgU0VMRUNDSU9OQVJfUFJPRFVDVE8sXG4gIENBTlRJREFEX1BST0RVQ1RPLFxuICBBQ1RVQUxJWkFSX1RPVEFMLFxufSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuY29uc3QgUGVkaWRvU3RhdGUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIC8vIHN0YXRlIHBlZGlkb1xuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgY2xpZW50ZToge30sXG4gICAgcHJvZHVjdG9zOiBbXSxcbiAgICB0b3RhbDogMCxcbiAgfTtcblxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoUGVkaWRvUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcblxuICAvLyAgTU9ESUZJQ0EgTE9TIENMSUVOVEVTXG5cbiAgY29uc3QgYWdyZWdhckNsaWVudGUgPSAoY2xpZW50ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNFTEVDQ0lPTkFSX0NMSUVOVEUsXG4gICAgICBwYXlsb2FkOiBjbGllbnRlLFxuICAgIH0pO1xuICB9O1xuXG4gIC8vIE1PRElGSUNBIExPUyBQUk9EVUNUT1NcblxuICBjb25zdCBhZ3JlZ2FyUHJvZHVjdG9zID0gKHByb2R1Y3Rvc1NlbGVjY2lvbmFkb3MpID0+IHtcbiAgICAvLyBoYXkgcXVlIGhhY2VyIHVuYSBjb3BpYSBkZSBsb3MgcHJvZHVjdG9zIGFudGVzIGRlIHF1ZSByZWFjdC1zZWxlY3QgYWwgYcOxYWRpciB1biBudWV2byBwcm9kdWN0b1xuICAgIC8vIGJvcnJlIGVsIGNhbXBvIGRlIGNhbnRpZGFkIGRlIGxvcyBhbnRlcmlvcmVzXG4gICAgLy8gc29sdWNpb24gYWwgYcOxYWRpciBwcm9kdWN0byB5IHF1ZSByZWVzY3JpYmEgbGEgY2FudGlkYWQgZGVsIGFudGVyaW9yIHByb2R1Y3RvIGHDsWFkaWRvXG5cbiAgICBsZXQgbnVldm9TdGF0ZTtcblxuICAgIGlmIChzdGF0ZS5wcm9kdWN0b3MubGVuZ3RoID4gMCkge1xuICAgICAgLy8gY29nZXIgZGVsIHNlZ3VuZG8gYXJyYXkgdW5hIGNvcGlhICBwYXJhIGFzaWduYXJsYSBhbCBwcmltZXJvXG4gICAgICBudWV2b1N0YXRlID0gcHJvZHVjdG9zU2VsZWNjaW9uYWRvcy5tYXAoKHByb2R1Y3RvKSA9PiB7XG4gICAgICAgIGNvbnN0IG51ZXZvT2JqZXRvID0gc3RhdGUucHJvZHVjdG9zLmZpbmQoXG4gICAgICAgICAgKHByb2R1Y3RvU3RhdGUpID0+IHByb2R1Y3RvU3RhdGUuaWQgPT09IHByb2R1Y3RvLmlkXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHsgLi4ucHJvZHVjdG8sIC4uLm51ZXZvT2JqZXRvIH07XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbnVldm9TdGF0ZSA9IHByb2R1Y3Rvc1NlbGVjY2lvbmFkb3M7XG4gICAgfVxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNFTEVDQ0lPTkFSX1BST0RVQ1RPLFxuICAgICAgcGF5bG9hZDogbnVldm9TdGF0ZSxcbiAgICB9KTtcbiAgfTtcblxuICAvLyBNT0RJRklDQSBDQU5USURBREVTIFBST0RVQ1RPXG4gIGNvbnN0IGNhbnRpZGFkUHJvZHVjdG9zID0gKG51ZXZvUHJvZHVjdG8pID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBDQU5USURBRF9QUk9EVUNUTyxcbiAgICAgIHBheWxvYWQ6IG51ZXZvUHJvZHVjdG8sXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gVE9UQUxcbiAgY29uc3QgYWN0dWFsaXphclRvdGFsID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFDVFVBTElaQVJfVE9UQUwsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UGVkaWRvQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgY2xpZW50ZTogc3RhdGUuY2xpZW50ZSxcbiAgICAgICAgcHJvZHVjdG9zOiBzdGF0ZS5wcm9kdWN0b3MsXG4gICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCxcbiAgICAgICAgYWdyZWdhckNsaWVudGUsXG4gICAgICAgIGFncmVnYXJQcm9kdWN0b3MsXG4gICAgICAgIGNhbnRpZGFkUHJvZHVjdG9zLFxuICAgICAgICBhY3R1YWxpemFyVG90YWwsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1BlZGlkb0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQZWRpZG9TdGF0ZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZHVjZXIiLCJQZWRpZG9Db250ZXh0IiwiUGVkaWRvUmVkdWNlciIsIlNFTEVDQ0lPTkFSX0NMSUVOVEUiLCJTRUxFQ0NJT05BUl9QUk9EVUNUTyIsIkNBTlRJREFEX1BST0RVQ1RPIiwiQUNUVUFMSVpBUl9UT1RBTCIsIlBlZGlkb1N0YXRlIiwiY2hpbGRyZW4iLCJpbml0aWFsU3RhdGUiLCJjbGllbnRlIiwicHJvZHVjdG9zIiwidG90YWwiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYWdyZWdhckNsaWVudGUiLCJ0eXBlIiwicGF5bG9hZCIsImFncmVnYXJQcm9kdWN0b3MiLCJwcm9kdWN0b3NTZWxlY2Npb25hZG9zIiwibnVldm9TdGF0ZSIsImxlbmd0aCIsIm1hcCIsInByb2R1Y3RvIiwibnVldm9PYmpldG8iLCJmaW5kIiwicHJvZHVjdG9TdGF0ZSIsImlkIiwiY2FudGlkYWRQcm9kdWN0b3MiLCJudWV2b1Byb2R1Y3RvIiwiYWN0dWFsaXphclRvdGFsIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/pedidos/pedidoState.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/apollo */ \"./config/apollo.js\");\n/* harmony import */ var _context_pedidos_pedidoState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/pedidos/pedidoState */ \"./context/pedidos/pedidoState.js\");\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n        client: _config_apollo__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        __source: {\n            fileName: \"/app/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_context_pedidos_pedidoState__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            __source: {\n                fileName: \"/app/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/app/pages/_app.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                },\n                __self: this\n            })\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDaUI7QUFDVjtBQUNtQjtTQUUvQ0csS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsTUFBTSxzRUFDSEwsMERBQWM7UUFBQ0MsTUFBTSxFQUFFQSxzREFBTTs7Ozs7Ozt1RkFDM0JDLG9FQUFXOzs7Ozs7OzJGQUNURSxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7O0FBSWhDLENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JtY2xpZW50ZXMvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vY29uZmlnL2Fwb2xsb1wiO1xuaW1wb3J0IFBlZGlkb1N0YXRlIGZyb20gXCIuLi9jb250ZXh0L3BlZGlkb3MvcGVkaWRvU3RhdGVcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIDxQZWRpZG9TdGF0ZT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9QZWRpZG9TdGF0ZT5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJBcG9sbG9Qcm92aWRlciIsImNsaWVudCIsIlBlZGlkb1N0YXRlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./types/index.js":
/*!************************!*\
  !*** ./types/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SELECCIONAR_CLIENTE\": () => (/* binding */ SELECCIONAR_CLIENTE),\n/* harmony export */   \"SELECCIONAR_PRODUCTO\": () => (/* binding */ SELECCIONAR_PRODUCTO),\n/* harmony export */   \"CANTIDAD_PRODUCTO\": () => (/* binding */ CANTIDAD_PRODUCTO),\n/* harmony export */   \"ACTUALIZAR_TOTAL\": () => (/* binding */ ACTUALIZAR_TOTAL)\n/* harmony export */ });\nconst SELECCIONAR_CLIENTE = \"SELECCIONAR_CLIENTE\";\nconst SELECCIONAR_PRODUCTO = \"SELECCIONAR_PRODUCTO\";\nconst CANTIDAD_PRODUCTO = \"CANTIDAD_PRODUCTO\";\nconst ACTUALIZAR_TOTAL = \"ACTUALIZAR_TOTAL\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90eXBlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sS0FBSyxDQUFDQSxtQkFBbUIsR0FBRyxDQUFxQjtBQUNqRCxLQUFLLENBQUNDLG9CQUFvQixHQUFHLENBQXNCO0FBQ25ELEtBQUssQ0FBQ0MsaUJBQWlCLEdBQUcsQ0FBbUI7QUFDN0MsS0FBSyxDQUFDQyxnQkFBZ0IsR0FBRyxDQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NybWNsaWVudGVzLy4vdHlwZXMvaW5kZXguanM/MmRlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU0VMRUNDSU9OQVJfQ0xJRU5URSA9IFwiU0VMRUNDSU9OQVJfQ0xJRU5URVwiO1xuZXhwb3J0IGNvbnN0IFNFTEVDQ0lPTkFSX1BST0RVQ1RPID0gXCJTRUxFQ0NJT05BUl9QUk9EVUNUT1wiO1xuZXhwb3J0IGNvbnN0IENBTlRJREFEX1BST0RVQ1RPID0gXCJDQU5USURBRF9QUk9EVUNUT1wiO1xuZXhwb3J0IGNvbnN0IEFDVFVBTElaQVJfVE9UQUwgPSBcIkFDVFVBTElaQVJfVE9UQUxcIjtcbiJdLCJuYW1lcyI6WyJTRUxFQ0NJT05BUl9DTElFTlRFIiwiU0VMRUNDSU9OQVJfUFJPRFVDVE8iLCJDQU5USURBRF9QUk9EVUNUTyIsIkFDVFVBTElaQVJfVE9UQUwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./types/index.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "apollo-link-context":
/*!**************************************!*\
  !*** external "apollo-link-context" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-link-context");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();