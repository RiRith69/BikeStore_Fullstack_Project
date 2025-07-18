import { Router } from "express";
import {
  createBrand,
  deleteBrand,
  getAllBrands,
  getBrandByName,
  updateBrand,
} from "../Controller/BrandController.js";
// import { getBrandById } from "../Controller/BrandController.js";
const brandRouter = Router();
brandRouter.get("/allbrands", getAllBrands);
brandRouter.get("/name/:name", getBrandByName);
// brandRouter.get("/:id", getBrandById);
brandRouter.post("/", createBrand);
brandRouter.put("/:id", updateBrand);
brandRouter.delete("/:id", deleteBrand);
export default brandRouter;
