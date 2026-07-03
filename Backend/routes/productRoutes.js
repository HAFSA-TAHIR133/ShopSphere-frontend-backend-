import express from 'express';
import ProductController from '../controllers/productControllers.js';
import {authMiddleware} from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/products',ProductController.getProducts);
router.get('/products/:id',authMiddleware, ProductController.getProductById);
export default router;