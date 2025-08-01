import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import '../styles/Auth.css';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <span className="icon"><FaUserAlt /></span>
            <input type="text" placeholder="Username" autoComplete="username" />
          </div>
          <div className="input-group">
            <span className="icon"><FaLock /></span>
            <input type="password" placeholder="Password" autoComplete="current-password" />
          </div>
          <button type="submit" className="auth-btn">Login</button>
        </form>
        <p className="switch-link">
          Not a user? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
