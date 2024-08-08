import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem('user', JSON.stringify(user));
      console.log('Successfully logged in');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="login">
      <form className="login-container" onSubmit={handleLogin}>
        <h1>Login</h1>
        <label className="auth-label">Email</label>
        <input
          className="auth-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="auth-label">Password</label>
        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error-msg">{error}</p>}
        <div className="btn-container">
          <button className="auth-btn" type="submit">Login</button>
        </div>
        <Link to="/forgot">
          <p className="forgot">Forgot Password?</p>
        </Link>
        <p className="auth-text">
          Don't have an account? <Link to="/register"><span className="auth-span">Sign up</span></Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
