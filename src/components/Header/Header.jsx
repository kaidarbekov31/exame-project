import React, { useContext, useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Logo from "../image/logo-3.png";
import { StarOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { cartContext } from "../../context/cartContext";
import { FavouriteContext } from "../../context/favouritesContext";

const Header = () => {
  const location = useLocation();
  const [email, setEmail] = useState(null); // Инициализация состояния email как null

  const { getCart, cartLength } = useContext(cartContext);
  const { getFavourite, favourite, favouriteLength } = useContext(FavouriteContext);

  useEffect(() => {
    getCart();
    getFavourite();
  }, [getCart, getFavourite]);

  // Здесь должен быть код для получения email, если он хранится в контексте или локальном хранилище

  return (
    <Navbar className="navbar" variant="light">
      <Container>
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        <div className="route">
          {email === "tarieltairov1@gmail.com" && (
            <Link
              className={location.pathname === "/add" ? "navbar__item-active" : "navbar__item"}
              to="/add"
            >
              ADD
            </Link>
          )}
          <Link
            className={location.pathname === "/tanks" ? "navbar__item-active" : "navbar__item"}
            to="/tanks"
          >
            TANKS
          </Link>
        </div>
        <div className="icons">
          <Link to="/cart">
            <Badge className="shop-icon" count={cartLength}>
              <ShoppingCartOutlined className="shop-icon" />
            </Badge>
          </Link>
          <Link to="/favourites">
            <Badge className="shop-icon" count={favouriteLength}>
              <StarOutlined className="shop-icon" />
            </Badge>
          </Link>
          {email ? (
            <Link to="/auth" style={{ textDecoration: "none" }}>
              <div className="div-reg">
                <div className="reg">Выйти</div>
              </div>
            </Link>
          ) : (
            <Link to="/auth" style={{ textDecoration: "none" }}>
              <div className="div-reg">
                <div className="reg">Войти</div>
              </div>
            </Link>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
