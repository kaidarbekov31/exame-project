
import {
  DeleteOutlined,
  EditOutlined,
  StarOutlined,
  MoreOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons/lib/icons";
import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TanksContext } from "../../context/TanksContext";
import { cartContext } from "../../context/cartContext";
import { FavouriteContext } from "../../context/favouritesContext"; 
import "./Tanks.css";

const Tanks = ({ item }) => {
  const { deleteTanks } = useContext(TanksContext);
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const { addProductToFavourite, checkItemInFavourite } = useContext(FavouriteContext); 

  const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));
  const [checkInFavourite, setCheckInFavourite] = useState(checkItemInFavourite(item.id)); 

  useEffect(() => {
    setCheckInCart(checkItemInCart(item.id));
    setCheckInFavourite(checkItemInFavourite(item.id));
  }, [item.id, checkItemInCart, checkItemInFavourite]);

  const [email] = useState("ajdarbekovkudajberdi@gmail.com");

  return (
    <div className="m-4 card">
      <Card className="card-inner">
        <Card.Img variant="top" src={item.image} className="c" />
        <Card.Body className="card-body">
          <Card.Title className="card-title">{item.name}</Card.Title>
          <div className="card-info">
            <span>Тип: </span>
            <span className="card-text"> Тип: {item.type}</span>
            <br />
            <span>Нация: </span>
            <span className="card-text"> Страна: {item.country}</span>
            <br />
            <span>Цена: </span>
            <span className="card-price">{item.price} токенов</span>
       
          </div>
          <div className="card-actions">
            <Link to={`/details/${item.id}`}>
              <MoreOutlined />
            </Link>
            {email === "ajdarbekovkudajberdi@gmail.com" && (
              <>
                <DeleteOutlined
                  style={{ color: "orangered" }}
                  onClick={() => deleteTanks(item.id)}
                />
                <Link to={`/edit/${item.id}`}>
                  <EditOutlined style={{ color: "orangered" }} />
                </Link>
              </>
            )}
            {email && (
              <>
                <ShoppingCartOutlined
                  style={{
                    color: checkInCart ? "red" : "black",
                  }}
                  onClick={() => {
                    addProductToCart(item);
                    setCheckInCart(!checkInCart);
                  }}
                />
                <StarOutlined
                  style={{
                    color: checkInFavourite ? "red" : "black",
                  }}
                  onClick={() => {
                    addProductToFavourite(item);
                    setCheckInFavourite(!checkInFavourite);
                  }}
                />
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Tanks;
