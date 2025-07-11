import { Router } from "express";
import { getAllBrands } from "../Controller/BikeBrandController.js";
const brandRouter = Router();
brandRouter.get("/", getAllBrands);
export default brandRouter;
