import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { TanksContext } from "../../context/TanksContext";
import CommentList from "../Commentarii/CommentList";
import "./Details.css";

const Details = () => {
  const { getMore, more } = useContext(TanksContext);
  const { id } = useParams();
  const [tank, setTank] = useState(null); 

  useEffect(() => {
    // Функция для показа приветственного сообщения
    const sayHello = () => {
      alert("Доброго времени суток! Внизу вы можете оставить свой отзыв/комментарий, а также поставить лайк");
    };
    setTimeout(sayHello, 2000);
  }, []);

  useEffect(() => {
    // Получение данных о танке
    getMore(id);
  }, [id, getMore]);

  useEffect(() => {
    // Установка данных о танке
    if (more) {
      setTank(more);
    }
  }, [more]);

  if (!tank) {
    return <h1>loading...</h1>;
  }

  return (
    <>
      <div className="angar">
        <div
          className="tank-details"
          style={{
            backgroundImage: `url(${tank.image})`,
            backgroundSize: 'cover',
            width: "100%",
            paddingTop: '100px',
            display: 'flex',
            justifyContent: "space-between",
            alignItems: 'center'
          }}
        >
          <div className="solo" style={{ width: "30%" }}>
            <h1 style={{ color: "white" }}>{tank.name}</h1>
            <div style={{ marginTop: "100px" }}>
              <span style={{ color: "grey" }}>Тип: </span>
              <span>{tank.type}</span>
            </div>
            <div style={{ marginTop: "50px" }}>
              <span style={{ color: "grey" }}>Нация: </span>
              <span>{tank.country}</span>
            </div>
            <div style={{ marginTop: "50px" }}>
              <span style={{ color: "grey" }}>Цена: </span>
              <span>{tank.price}</span>
              <span style={{ color: "red" }}> токенов</span>
            </div>
          </div>
          <div className="desc" style={{ width: "40%" }}>
            <p style={{ fontSize: "22px", color: "white" }}>
              {tank.description}
            </p>
          </div>
        </div>
      </div>
      <CommentList id={tank.id} />
    </>
  );
};

export default Details;
