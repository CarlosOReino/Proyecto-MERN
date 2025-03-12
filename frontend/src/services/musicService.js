// Obtener todas las canciones
export const fetchSongs = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/music/', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch songs');
      }
  
      const data = await response.json();
      // console.log('Songs:', data);
      return data;
    } catch (error) {
      console.error('Failed to fetch songs:', error);
      throw error;
    }
  };
  
  // Crear una nueva canción
  export const createSong = async (songData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/music/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(songData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create song');
      }
  
      const data = await response.json();
      console.log('Song created:', data);
      return data;
    } catch (error) {
      console.error('Failed to create song:', error);
      throw error;
    }
  };