
import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Add from "./components/Add/Add";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Favourites from "./components/Favourites/Favourites";
import Home from "./components/Home/Home";
import TanksList from "./components/TanksList/TanksList";
import Invoic from "./components/Invoic/Invoic";
import Forgot from "./components/Auth/Forgot";
import LogoutButton from "./components/Auth/LogoutButton";

const Routing = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  let routes = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/tanks",
      element: <TanksList />,
      id: 2,
    },
    {
      link: "/edit/:id",
      element: <Edit />,
      id: 3,
    },
    {
      link: "/details/:id",
      element: <Details />,
      id: 4,
    },
    {
      link: "/auth",
      element: <Login />,
      id: 5,
    },
    {
      link: "/register",
      element: <Register />,
      id: 6,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 7,
    },
    {
      link: "/favourites",
      element: <Favourites />,
      id: 8,
    },
    {
      link: "/invoic",
      element: <Invoic />,
      id: 9,
    },
    {
      link: "/forgot",
      element: <Forgot />,
      id: 10,
    },
    {
      link: "/logout",
      element: <LogoutButton />,
      id: 11,
    },
  ];

  let adminRoutes = [
    {
      link: "/add",
      element: <Add />,
    },
  ];

  return (
    <Routes>
      {routes.map((item) => (
        <Route key={item.id} path={item.link} element={item.element} />
      ))}
      {user && adminRoutes.map((item) => (
        <Route
          key={item.link}
          path={item.link}
          element={user.email === "ajdarbekovkudajberdi@gmail.com" ? item.element : <Navigate replace to="*" />}
        />
      ))}
      {user && <Route path="/profile" element={<LogoutButton />} />}
    </Routes>
  );
};

export default Routing;

