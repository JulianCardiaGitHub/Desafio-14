import { productos } from "../src/constants/productos.js";
import modelos from "../models/productos.models.js";

const getAll = (req, res) => {
  const productos = modelos.leerProductos();

  res.status(200).json(productos);
};

const getOne = (req, res) => {
  const id = req.params.id;

  const producto = modelos.leerProducto(id);

  res.status(200).json(producto);
};

const createProducto = (req, res) => {
  const producto = req.body;

  const productoCreado = modelos.crearProducto(producto);

  res.status(201).json(productos);
};

const updateProducto = (req, res) => {
  const id = req.params.id;
  const productoEditado = req.body;

  const procutoActulizado = modelos.actualizarProducto(id, productoEditado);

  res.status(200).json(procutoActulizado);
};

const deleteProducto = (req, res) => {
  const id = req.params.id;

  const productoEliminado = modelos.eliminarProducto(id);

  res.status(200).send(productoEliminado);
};

export default {
  getAll,
  getOne,
  createProducto,
  updateProducto,
  deleteProducto,
};
