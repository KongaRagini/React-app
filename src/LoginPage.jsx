import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Login.css'; // Import CSS file for styling

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const errors = {};
    if (formData.username.trim() === '') {
      errors.username = 'Username is required';
    }
    if (formData.password.trim() === '') {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Proceed with form submission if no errors
    console.log('Form submitted');
  };

  return (
    <div className="login-container">
      <h2>Sign in to your account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username..."
            value={formData.username}
            onChange={handleChange}
            className={`input-field ${errors.username ? 'input-error' : ''}`}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password..."
            value={formData.password}
            onChange={handleChange}
            className={`input-field ${errors.password ? 'input-error' : ''}`}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div>
          <Link to='/Home'>
          <button type="submit" className="signin-button">Sign In</button>
          </Link>
        </div>
      </form>
      <div className="links-container">
        <a href="/forgot-password">Forgot Password?</a>
        <span> | </span>
        <a href="/register">New User? Create an Account</a>
      </div>
    </div>
  );
};

export default LoginPage;
