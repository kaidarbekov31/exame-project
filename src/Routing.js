import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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

const Routing = () => {
  const [user, setUser] = useState(null); // Assume user is an object or null
  const isAdmin = user?.email === "ajdarbekovkudajberdi@gmail.com"; // Check if the user is an admin

  const routes = [
    { path: "/", element: <Home />, id: 1 },
    { path: "/tanks", element: <TanksList />, id: 2 },
    { path: "/edit/:id", element: <Edit />, id: 3 },
    { path: "/details/:id", element: <Details />, id: 4 },
    { path: "/auth", element: <Login />, id: 5 },
    { path: "/register", element: <Register />, id: 6 },
    { path: "/cart", element: <Cart />, id: 7 },
    { path: "/favourites", element: <Favourites />, id: 8 },
    { path: "/invoic", element: <Invoic />, id: 9 },
    { path: "/forgot", element: <Forgot />, id: 10 },
  ];

  const adminRoutes = [
    { path: "/add", element: <Add /> },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
      {user &&
        adminRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={isAdmin ? route.element : <Navigate replace to="/" />}
          />
        ))}
    </Routes>
  );
};

export default Routing;
