import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import musicRoutes from './routes/musicRoutes.js';
import connectDB from './config/db.js';
import connection from './config/mysql.js';
import profileRoutes from './routes/profileRoutes.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
connectDB();

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/music', musicRoutes);
app.use('/api/profile', profileRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});