import { Router } from "express";
import {
  createBrand,
  deleteBrand,
  getAllBrands,
  updateBrand,
} from "../Controller/BrandController.js";
import { getBrandById } from "../Controller/BrandController.js";
const brandRouter = Router();
brandRouter.get("/", getAllBrands);
brandRouter.get("/:id", getBrandById);
brandRouter.post("/", createBrand);
brandRouter.put("/:id", updateBrand);
brandRouter.delete("/:id", deleteBrand);
export default brandRouter;
