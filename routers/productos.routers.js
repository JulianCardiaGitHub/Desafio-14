import controlador from "../controllers/productos.controller.js";

import express from "express";
const productosRouter = express.Router();

productosRouter.get("/", controlador.getAll);

productosRouter.get("/:id", controlador.getOne);

productosRouter.post("/", controlador.createProducto);

productosRouter.put("/:id", controlador.updateProducto);

productosRouter.delete("/:id", controlador.deleteProducto);

export default productosRouter;
