// components/Auth/Login.jsx
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContent";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <section className="login">
      <form className="login-container" onSubmit={handleSubmit}>
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
            Sign in
          </button>
          <Link to="/forgot">
            <p className="forgot">Забыли пароль?</p>
          </Link>
          <p className="auth-text">
            Don't have an account?
            <Link to="/register">
              <span className="auth-span">Sign up</span>
            </Link>
          </p>
        </div>
        <button
          style={{
            borderRadius: "10px",
            backgroundColor: "#4a4a4a",
            color: "white",
            border: "none",
          }}
        >
          <img
            width="30px"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            alt="google-logo"
          />
          Войти с помощью google аккаунта
        </button>
      </form>
    </section>
  );
};

export default Login;
