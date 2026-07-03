import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../context/authContext.jsx';
import axios from 'axios';
import '../css/profile.css';

const Profile = () => {
  const { user, API_URL, logout } = useAuthContext();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
  });

  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        phone: user.phone || '',
      });
      setPreviewImage(user.profileImage || '');
    }
  }, [user]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('phone', formData.phone);

      if (profileImage) {
        formDataToSend.append('profileImage', profileImage);
      }
      console.log(localStorage.getItem("accessToken"));
      const res = await axios.put(`${API_URL}/user/profile`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      setSuccess('Profile updated successfully!');
      console.log("Updated user:", res.data.user);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="profile-container">
    <h1 className="profile-title">My Profile</h1>

    {success && <p className="success-message">{success}</p>}
    {error && <p className="error-message">{error}</p>}

    <div className="profile-image-section">
      <div className="profile-image-wrapper">
        <img
          src={previewImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFr704RIRXpd3YP59Yu5fzlLNh2U9yD6c9_gY_3k8_5g&s=10"}
          alt="Profile"
          className="profile-image"
        />

        <label className="profile-image-upload">📷
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="profile-image-input hidden"
          />
        </label>
      </div>
    </div>

    <form onSubmit={handleSubmit} className="profile-form">
      <div className="profile-name-group">
        <div className="profile-input-group">
          <label className="profile-label">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="profile-input"
            required
          />
        </div>

        <div className="profile-input-group">
          <label className="profile-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="profile-input"
            required
          />
        </div>
      </div>

      <div className="profile-input-group">
        <label className="profile-label">Email</label>
        <input
          type="email"
          value={user?.email || ""}
          className="profile-input profile-input-disabled"
          disabled
        />
      </div>

      <div className="profile-input-group">
        <label className="profile-label">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="profile-input"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="profile-save-button"
      >
        {loading ? "Updating Profile..." : "Save Changes"}
      </button>
    </form>

    <button
      onClick={logout}
      className="profile-logout-button"
    >
      Logout
    </button>
  </div>
  );
};

export default Profile;