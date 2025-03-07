import Song from '../models/song.js';

// Obtener todas las canciones
const getSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear una nueva canción
const createSong = async (req, res) => {
  const { title, artist, coverUrl, duration } = req.body;

  try {
    const song = new Song({ title, artist, coverUrl, duration });
    await song.save();
    res.status(201).json(song);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export { getSongs, createSong };