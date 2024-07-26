import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [hasAccount] = useState();

  return (
    <section className="login">
      <div className="login-container">
        <label className="auth-label">Email</label>
        <input
          className="auth-input"
          type="text"
          autoFocus
          required
        />
        {/* <p className="error-msg">{emailError}</p> */}

        <label className="auth-label">Password</label>
        <input
          className="auth-input"
          type="password"
          autoFocus
          required
        />
        {/* <p className="error-msg">{passwordError}</p> */}

        <div className="btn-container">
          {hasAccount ? (
            <>
              {" "}
              <Link to="/">
                <button className="auth-btn" >
                  Sign in
                </button>
              </Link>
              <Link to="/forgot">
                <p className="forgot">Забыли пароль?</p>
              </Link>
              <p className="auth-text">
                Don't have an account?
                <span
                  className="auth-span"
                >
                  Sign up
                </span>
              </p>
            </>
          ) : (
            <>
              <Link to="/">
                <button className="auth-btn">
                  Sign up
                </button>
              </Link>

              <p className="auth-text">
                Have an account?
                <span
                  className="auth-span"
                >
                  Sign in
                </span>
              </p>
            </>
          )}
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
      </div>
    </section>
  );
};

export default Login;
