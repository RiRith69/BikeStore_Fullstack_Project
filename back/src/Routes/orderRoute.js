import express from "express";
import * as orderController  from "../Controller/orderController.js";

const router = express.Router();

router.get("/:userId", orderController.getOrders);
router.post("/:userId", orderController.createOrder);

export default router;