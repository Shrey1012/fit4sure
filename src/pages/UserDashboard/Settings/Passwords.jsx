import React, { useState } from 'react';
import axios from 'axios';
import './Passwords.css';

const Passwords = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const API = axios.create({ baseURL: "http://localhost:3001" });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }

    return req;
  });

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (!oldPassword || !newPassword || !confirmNewPassword) {
      setErrorMessage('All fields are required');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setErrorMessage("New password and confirm password don't match");
      return;
    }

    try {
      await API.put('/app/user/change-password', {
        oldPassword,
        newPassword,
        confirmNewPassword,
      });

      setErrorMessage('');
      setSuccessMessage('Password changed successfully');
      setOldPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } catch (error) {
      console.error(error);
      setErrorMessage('Something went wrong');
    }
  };

  return (
    <div className="passwords-container">
    <h2 className="passwords-heading">Change Password</h2>
    {errorMessage && <p className="error-message">{errorMessage}</p>}
    {successMessage && <p className="success-message">{successMessage}</p>}
    <form className="passwords-form" onSubmit={handleChangePassword}>
      <div className="passwords-form-group">
        <label className="passwords-form-label">
          Old Password:
          <input
            className="passwords-form-input"
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </label>
      </div>
      <div className="passwords-form-group">
        <label className="passwords-form-label">
          New Password:
          <input
            className="passwords-form-input"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
      </div>
      <div className="passwords-form-group">
        <label className="passwords-form-label">
          Confirm New Password:
          <input
            className="passwords-form-input"
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </label>
      </div>
      <button className="passwords-form-button" type="submit">Change Password</button>
    </form>
  </div>
  );
};

export default Passwords;