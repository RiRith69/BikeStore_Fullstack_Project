import express from 'express';
import getProductsByCategory from "../Controller/categoryController.js";

const router = express.Router();
router.get('/:category', getProductsByCategory);

export default router;