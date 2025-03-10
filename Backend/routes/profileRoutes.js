import express from 'express';
import { getProfile, updateProfile } from '../controllers/profileController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Proteger las rutas con el middleware de autenticación
router.get('/', authMiddleware, getProfile);
router.put('/', authMiddleware, updateProfile);

export default router;