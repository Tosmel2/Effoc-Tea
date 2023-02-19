import React, { useState } from 'react';
import './style.css';

const SignInSignUpForm = () => {
  const [form, setForm] = useState('signin');

  const handleFormChange = (form) => {
    setForm(form);
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          {form === 'signin' ? (
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="/" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="/" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          ) : (
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
              <a href="/" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
      )}
    </div>
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h2>Welcome Back!</h2>
          <p>To keep connected with us please login with your personal info</p>
          <button className="ghost" id="signIn" onClick={() => handleFormChange('signin')}>
            Sign In
          </button>
        </div>
        <div className="overlay-panel overlay-right">
          <h2>Hello, Friend!</h2>
          <p>Enter your personal details and start journey with us</p>
          <button className="ghost" id="signUp" onClick={() => handleFormChange('signup')}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
);
};

export default SignInSignUpForm;