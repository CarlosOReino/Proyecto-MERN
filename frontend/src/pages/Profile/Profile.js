import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); 

  // Obtener la información del perfil al cargar la página
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setMessage('Token not found, please log in again');
          return;
        }
  
        const response = await fetch('http://localhost:5000/api/profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }
  
        const data = await response.json();
        setName(data.name);
        setEmail(data.email);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setMessage('Error fetching profile. Please try again.');
      }
    };
  
    fetchProfile();
  }, []);
  

  const handleSave = async (e) => {
    e.preventDefault();

    // Datos actualizados del perfil
    const updatedProfile = {
      name,
      email,
    };

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(updatedProfile),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const data = await response.json();
      console.log('Profile updated:', data);
      setMessage('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('Failed to update profile. Please try again.');
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h2>Profile</h2>
        {message && <div className="message">{message}</div>}
        <div className="profile-image-container">
          <img
            src="https://i.imgur.com/mrCm0bi.jpeg"
            alt="Profile"
            className="profile-image"
          />
        </div>
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-save">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;