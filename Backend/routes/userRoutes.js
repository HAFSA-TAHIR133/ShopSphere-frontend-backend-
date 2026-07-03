import express from 'express';
import UserController from '../controllers/userControllers.js';
import {authMiddleware} from '../middleware/authMiddleware.js';
import upload from '../middleware/multer.js'; 

const router = express.Router();

router.put('/user/profile', authMiddleware, upload.single('profileImage'), UserController.updateProfile);

export default router;
