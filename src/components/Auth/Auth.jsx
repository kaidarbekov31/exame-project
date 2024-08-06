import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext"; 
import Home from "../Home/Home";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const { user } = useAuth();
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleRegister = () => {
    setIsRegistering((prevState) => !prevState);
  };

  return (
    <div>
      {user ? (
        <Home />
      ) : isRegistering ? (
        <Register toggleRegister={toggleRegister} />
      ) : (
        <Login toggleRegister={toggleRegister} />
      )}
    </div>
  );
};

export default Auth;
