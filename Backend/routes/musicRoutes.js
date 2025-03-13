import express from 'express';
import { createSong, getSongs } from '../controllers/musicController.js';

const router = express.Router();

/**
 * @swagger
 * /api/music:
 *   get:
 *     summary: Obtener todas las canciones
 *     tags: [Music]
 *     responses:
 *       200:
 *         description: Lista de canciones
 *       500:
 *         description: Error del servidor
 */
router.get('/', getSongs);


/**
 * @swagger
 * /api/music:
 *   post:
 *     summary: Crear una nueva canción
 *     tags: [Music]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               artist:
 *                 type: string
 *               coverUrl:
 *                 type: string
 *               duration:
 *                 type: number
 *     responses:
 *       201:
 *         description: Canción creada exitosamente
 *       400:
 *         description: Error en la creación de la canción
 */
router.post('/', createSong);

export default router;