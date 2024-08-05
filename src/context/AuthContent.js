// // context/AuthContent.js
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     // Проверяем localStorage при инициализации
//     const storedUser = localStorage.getItem('user');
//     return storedUser ? JSON.parse(storedUser) : null;
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Сохраняем пользователя в localStorage при изменении состояния
//     localStorage.setItem('user', JSON.stringify(user));
//   }, [user]);

//   const login = (email, password) => {
//     // Пример логики аутентификации
//     if (email === "user@example.com" && password === "password") {
//       const newUser = { email };
//       setUser(newUser);
//       toast.success("Вы успешно вошли в систему!");
//       navigate('/');
//     } else {
//       toast.error("Неверный email или пароль!");
//     }
//   };

//   const register = (email, password) => {
//     // Пример логики регистрации
//     const newUser = { email };
//     setUser(newUser);
//     toast.success("Вы успешно зарегистрированы!");
//     navigate('/');
//   };

//   const resetPassword = (email) => {
//     // Пример логики восстановления пароля
//     console.log(`Восстановление пароля для ${email}`);
//     toast.info(`Инструкция по восстановлению пароля отправлена на ${email}`);
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//     toast.info("Вы вышли из системы");
//     navigate('/auth');
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, register, resetPassword, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (email, password) => {
    if (email === "user@example.com" && password === "password") {
      setUser({ email });
      toast.success("Вы успешно вошли в систему!");
      navigate('/');
    } else {
      toast.error("Неверный email или пароль!");
    }
  };

  const register = (email, password) => {
    setUser({ email });
    toast.success("Вы успешно зарегистрированы!");
    navigate('/');
  };

  const resetPassword = (email) => {
    console.log(`Восстановление пароля для ${email}`);
    toast.info(`Инструкция по восстановлению пароля отправлена на ${email}`);
  };

  const logout = () => {
    setUser(null);
    toast.info("Вы вышли из системы");
    navigate('/auth');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, resetPassword, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

