import express from 'express';
import * as CartController from "../Controller/cartController.js";

const router = express.Router();
router.get('/cart', CartController.getCart);
router.put('/cart', CartController.addToCart)
router.post('/cart/:id', CartController.updateCartItem);
router.delete('/cart/:id', CartController.deleteCartItem);

export default router;