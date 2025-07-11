import { Router } from "express";
import {
  getAllProducts,
  getProductById,
} from "../Controller/ProductController.js";
const productRouter = Router();
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
export default productRouter;
