import express from 'express';
import * as CartController from "../Controller/cartController.js";

const router = express.Router();
router.get('/', CartController.getCart);
router.put('/', CartController.addToCart)
router.put('/status/', CartController.updateOrderStatus);
router.put('/:id', CartController.updateCartItem);
router.delete('/:id', CartController.deleteCartItem);

export default router;