
import express from 'express';
import * as CartController from "../Controller/cartController.js";
// import { authenticateToken } from "../Middleware/verifyToken.js";

const router = express.Router();


router.get('/:userId', /*authenticateToken,*/ CartController.getCart);
router.put('/', /*authenticateToken,*/ CartController.addToCart);
router.put('/:id', /*authenticateToken,*/ CartController.updateCartItem);
router.delete('/:id', /*authenticateToken,*/ CartController.deleteCartItem);
router.put('/userId/:userId', CartController.updateOrderStatus);

export default router;
