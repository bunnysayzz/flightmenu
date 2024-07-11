import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [activeTab, setActiveTab] = useState('signup');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="tab-buttons">
          <button
            onClick={() => handleTabClick('signup')}
            className={`tab-button ${activeTab === 'signup' ? 'active' : ''}`}
          >
            Sign Up
          </button>
          <button
            onClick={() => handleTabClick('login')}
            className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
          >
            Log In
          </button>
        </div>
        <div className="form-container">
          <div id="signup" className={`form-content ${activeTab === 'signup' ? 'active' : ''}`}>
            <h1 className="form-title">Sign Up for Free</h1>
            <form action="/" method="post">
              <div className="form-group">
                <label htmlFor="firstName">First Name<span className="required">*</span></label>
                <input id="firstName" name="firstName" type="text" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name<span className="required">*</span></label>
                <input id="lastName" name="lastName" type="text" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address<span className="required">*</span></label>
                <input id="email" name="email" type="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Set A Password<span className="required">*</span></label>
                <input id="password" name="password" type="password" required />
              </div>
              <button type="submit" className="submit-button">Get Started</button>
            </form>
          </div>
          <div id="login" className={`form-content ${activeTab === 'login' ? 'active' : ''}`}>
            <h1 className="form-title">Welcome Back!</h1>
            <form action="/" method="post">
              <div className="form-group">
                <label htmlFor="loginEmail">Email Address<span className="required">*</span></label>
                <input id="loginEmail" name="loginEmail" type="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">Password<span className="required">*</span></label>
                <input id="loginPassword" name="loginPassword" type="password" required />
              </div>
              <p className="forgot-password">
                <a href="#">Forgot Password?</a>
              </p>
              <button type="submit" className="submit-button">Log In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;