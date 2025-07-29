import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import '../styles/Auth.css';

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <div className="input-group">
          <FaUserAlt className="icon" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-group">
          <FaLock className="icon" />
          <input type="password" placeholder="Password" />
        </div>
        <button className="auth-btn">Register</button>
        <p className="switch-link">Already a user? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
