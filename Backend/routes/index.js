// routes/index.js
import express from 'express';
import authRoutes from './authRoutes.js';
import productRoutes from './productRoutes.js';

const router = express.Router();

router.use('/', authRoutes);
router.use('/', productRoutes);

export default router;