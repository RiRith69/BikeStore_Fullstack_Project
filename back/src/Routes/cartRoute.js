// import express from 'express';
// import * as CartController from "../Controller/cartController.js";

// const router = express.Router();
// router.get('/', CartController.getCart);
// router.put('/', CartController.addToCart)
// router.put('/:id', CartController.updateCartItem);
// router.delete('/:id', CartController.deleteCartItem);

// export default router;

import express from 'express';
import * as CartController from "../Controller/cartController.js";

const router = express.Router();

// 🛡️ Protected routes
router.get('/', authenticateToken, CartController.getCart);
router.put('/', authenticateToken, CartController.addToCart);
router.put('/:id', authenticateToken, CartController.updateCartItem);
router.delete('/:id', authenticateToken, CartController.deleteCartItem);

export default router;
