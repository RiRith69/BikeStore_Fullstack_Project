import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../Controller/ProductController.js";
import { verifyToken } from "../Middleware/verifyToken.js";
import { authorizeRoles } from "../Middleware/authorizeRole.js";
const productRouter = Router();
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/", createProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);
export default productRouter;
