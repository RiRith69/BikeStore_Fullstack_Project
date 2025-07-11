import express from 'express';
import {
    getCart,
    addToCart,
    updateCartItem,
    deleteCartItem,
} from '../Controller/cartController.js';

const router = express.Router();
router.get('/', getCart);
router.post('/:id', updateCartItem);
router.delete('/:id', deleteCartItem);

export default router;