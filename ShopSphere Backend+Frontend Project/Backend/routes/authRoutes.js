import AuthController from '../controllers/authControllers.js';
import express from 'express';
const router=express.Router();

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);

export default router;