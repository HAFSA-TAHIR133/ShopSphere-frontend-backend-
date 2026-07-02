import express from 'express';
import ProductController from '../controllers/productControllers.js';

const router = express.Router();

router.get('/products', ProductController.getProducts);
router.get('/products/:id', ProductController.getProductById);
export default router;