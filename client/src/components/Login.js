import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://flightmenubackend.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const user = await response.json();
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleGuestLogin = () => {
    setEmail('azharsayzz@example.com');
    setPassword('azhar@99');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="form-title">Welcome Back!</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="loginEmail">Email Address<span className="required">*</span></label>
            <input
              id="loginEmail"
              name="loginEmail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="loginPassword">Password<span className="required">*</span></label>
            <input
              id="loginPassword"
              name="loginPassword"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p className="forgot-password">
            <button type="button" onClick={() => alert('Forgot Password functionality not implemented yet.')}>
              Forgot Password?
            </button>
          </p>
          <button type="submit" className="submit-button">Log In</button>
          <button type="button" className="guest-button" onClick={handleGuestLogin}>Guest Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;