import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Resgistrar un nuevo usuario
export const register = (req, res) => {
  const { username, email, password } = req.body;

  // Encriptar la contraseña
  const hashedPassword = bcrypt.hashSync(password, 10);

  User.create(username, email, hashedPassword, (err, results) => {
    if (err) return res.status(400).json({ message: err.message });

    // Generar token JWT
    const token = jwt.sign({ id: results.insertId }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ token });
  });
};

// Iniciar sesión
export const login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (err, results) => {
    if (err || results.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }

    const user = results[0];
    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generar token JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token });
  });
};

export default { register, login };