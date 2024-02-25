import React, { useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';
const RegisterPage = () => {
    const [formData,setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  
    const [errors, setErrors] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    
      // Validation
      let error = '';
      switch (name) {
        case 'firstName':
          error = value.length <5 ? 'First name is required' : '';
          break;
        case 'lastName':
          error = value.length <5  ? 'Last name is required' : '';
          break;
        case 'email':
          error = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address';
          break;
        case 'password':
          error = value.length < 6 ? 'Password must be at least 6 characters long' : '';
          break;
        case 'confirmPassword':
          error = value !== formData.password ? 'Passwords do not match' : '';
          break;
        default:
          break;
      }
    
      setErrors({ ...errors, [name]: error });
    };
    
  
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData({ ...formData, [name]: value });
    // };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you can add validation logic and submit the form data
      console.log(formData);
    };
  
    return (
      <div className="register-container"> 
        <h2 className='register-text'>Register your account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder='Enter your first name..'
              value={formData.firstName}
              onChange={handleChange}
              className="input-field" /* Apply a class for white text fields */
            />
            {errors.firstName && <span className="error-text">{errors.firstName}</span>}
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder='Enter your last name..'
              value={formData.lastName}
              onChange={handleChange}
              className="input-field" /* Apply a class for white text fields */
            />
             {errors.lastName && <span className="error-text">{errors.lastName}</span>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter your email adress..'
              value={formData.email}
              onChange={handleChange}
              className="input-field" /* Apply a class for white text fields */
            />
             {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Enter your password..'
              value={formData.password}
              onChange={handleChange}
              className="input-field" /* Apply a class for white text fields */
            />
             {errors.password && <span className="error-text">{errors.password}</span>}
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder='Enter your password again..'
              value={formData.confirmPassword}
              onChange={handleChange}
              className="input-field" /* Apply a class for white text fields */
            />
            {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
  
          </div>
          <Link to="/login"> 
          <button type="submit" className="signup-button">Sign Up</button> 
          </Link>
        </form>
        <p className="signin-link">Already have an account? <a href="/signin">Sign In</a></p>
      </div>
    );
  };
  
  export default RegisterPage;
  