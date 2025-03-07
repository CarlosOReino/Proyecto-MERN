import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [name, setName] = useState('Samuel Salter');
  const [email, setEmail] = useState('samuel@example.com');
  const [profileImage, setProfileImage] = useState('./images/grey-bg.webp');

  const handleSave = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar los cambios en el perfil
    console.log('Profile updated:', { name, email, profileImage });
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h2>Profile</h2>
        <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <button className="btn btn-change-image">Change Image</button>
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