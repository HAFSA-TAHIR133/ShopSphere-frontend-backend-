import AuthController from '../controllers/authControllers.js';
import express from 'express';
const router=express.Router();

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);
router.post("/verify-email",AuthController.verifyEmail);
router.patch("/forget-password",AuthController.resetPassword);
router.post('/auth/refresh-token', AuthController.refreshToken);
router.post("/logout", AuthController.logout);

export default router;