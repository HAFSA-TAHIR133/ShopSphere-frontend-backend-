// routes/index.js
import express from 'express';
import authRoutes from './authRoutes.js';
import productRoutes from './productRoutes.js';
import userRoutes from './userRoutes.js';
const router = express.Router();

router.use('/', authRoutes);
router.use('/', productRoutes);
router.use('/',userRoutes);

export default router;