import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { Button } from "react-bootstrap";
import "./Invoic.css";
import Logo from "../image/logo-3.png";

const Invoic = () => {
  const [user, setUser] = useState(null);
  const { cart } = useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  function getCart() {
    let cartData = JSON.parse(localStorage.getItem("Cartinfo"));
    setUser(cartData);
  }

  function deleteFromCart() {
    localStorage.removeItem("Cartinfo");
    setUser(null); 
  }

  return (
    <div
      style={{
        paddingTop: "150px",
        paddingBottom: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundImage:
          "url(https://media.wotblitz.com/media/filer_public/26/4f/264fafcf-d60b-4e20-b831-dd382a698697/gold-preview.jpg)",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="check">
        <div className="check_inner">
          <img width="100px" src={Logo} alt="logo" />
          <div>
            <span className="check-words">User's email: </span>
            <span style={{ color: "black" }}>{user?.email || 'N/A'}</span>
          </div>
          <div>
            <span className="check-words">Username: </span>
            <span style={{ color: "black" }}>{user?.username || 'N/A'}</span>
          </div>
          <div>
            <span className="check-words">City: </span>
            <span style={{ color: "black" }}>{user?.city || 'N/A'}</span>
          </div>
          <div>
            <span className="check-words">Street: </span>
            <span style={{ color: "black" }}>{user?.street || 'N/A'}</span>
          </div>
          <div className="ch">
            <div>
              <span className="check-words">Name of product</span>
              <ul>
                {cart?.products?.map((product, index) => (
                  <li key={index}>{product.item.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="check-words">Price</span>
              <ul>
                {cart?.products?.map((product, index) => (
                  <li key={index}>{product.item.price} $</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="check-words">Count</span>
              <ul>
                {cart?.products?.map((product, index) => (
                  <li key={index}>{product.count}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="check-words">Sum</span>
              <ul>
                {cart?.products?.map((product, index) => (
                  <li key={index}>{product.subPrice} $</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="total">
            <h3 className="check-words">TOTAL:</h3>
            <strong>{cart?.totalPrice} $</strong>
          </div>
          <h1 className="thanks" style={{ color: "red" }}>
            <i>Thanks for shopping!</i>
          </h1>
        </div>
      </div>
      <Link to="/">
        <Button
          variant="warning"
          style={{
            marginTop: "100px",
            color: 'white',
          }}
          onClick={() => deleteFromCart()}
        >
          GO HOME
        </Button>
      </Link>
    </div>
  );
};

export default Invoic;

