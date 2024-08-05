// components/Auth/Register.jsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContent';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password);
  };

  return (
    <section className="register">
      <form className="register-container" onSubmit={handleSubmit}>
        <label className="auth-label">Email</label>
        <input
          className="auth-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          required
        />

        <label className="auth-label">Password</label>
        <input
          className="auth-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoFocus
          required
        />

        <div className="btn-container">
          <button className="auth-btn" type="submit">
            Sign up
          </button>
          <Link to="/auth">
            <p className="auth-text">
              Already have an account? <span className="auth-span">Sign in</span>
            </p>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Register;
