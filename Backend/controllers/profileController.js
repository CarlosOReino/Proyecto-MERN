import User from '../models/user.js';
import connection from '../config/mysql.js';

// Obtener la información del perfil
export const getProfile = (req, res) => {
  User.findById(req.userId, (err, results) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = results[0];

    res.json({
      name: user.username,
      email: user.email,
      profileImage: user.profileImage || 'https://i.imgur.com/mrCm0bi.jpeg',
    });
  });
};

// Actualizar la información del perfil
export const updateProfile = async (req, res) => {
  const { name, email } = req.body;

  try {
    User.findById(req.userId, (err, results) => {
      if (err || !results) {
        return res.status(404).json({ message: 'User not found' });
      }

      const user = results[0];
      user.username = name;
      user.email = email;

      const updateQuery = 'UPDATE users SET username = ?, email = ? WHERE id = ?';
      connection.query(updateQuery, [name, email, req.userId], (err, results) => {
        if (err) {
          return res.status(400).json({ message: err.message });
        }

        res.json({ message: 'Profile updated successfully', user });
      });
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};