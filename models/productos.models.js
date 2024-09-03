import { productos } from "../src/constants/productos.js";

let idProducto = productos.length;

const leerProductos = () => {
  return productos;
};

const leerProducto = (id) => {
  const producto = productos.find((producto) => producto.id == id) || {};
  return producto;
};

const crearProducto = (producto) => {
  producto.id = ++idProducto;
  productos.push(producto);
  return producto;
};

const actualizarProducto = (id, productoEditado) => {
  productoEditado.id = id;
  let index = productos.findIndex((prod) => prod.id == id);
  productos.splice(index, 1, productoEditado);
  return productoEditado;
};

const eliminarProducto = (id) => {
  let index = productos.findIndex((prod) => prod.id == id);

  let array = productos.splice(index, 1);
  let productoEliminado = array[0];

  return productoEliminado;
};

export default {
  leerProductos,
  leerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};
