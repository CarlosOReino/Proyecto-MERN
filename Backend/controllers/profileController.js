import User from '../models/mysql/User.js';

// Obtener la información del perfil
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId); // Usar req.userId
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      name: user.username,
      email: user.email,
      profileImage: user.profileImage || 'https://i.imgur.com/mrCm0bi.jpeg', // Imagen por defecto
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Actualizar la información del perfil
export const updateProfile = async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await User.findById(req.userId); // Usar req.userId
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Actualizar los campos
    user.username = name;
    user.email = email;

    await user.save();
    res.json({ message: 'Profile updated successfully', user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};