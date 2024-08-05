import { HeartFilled } from "@ant-design/icons/lib/icons";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { likesContext } from "../../context/likesContext";

const Likes = () => {
  const { getLikes, likes, addLike, saveEditedLikes } = useContext(likesContext);
  const { id } = useParams();
  const [email, setEmail] = useState(""); // Установите начальное состояние email

  useEffect(() => {
    getLikes(id);
    // Замените этот вызов на получение email откуда-то
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setEmail(storedUser.email); // Обновите это в зависимости от структуры данных
    }
  }, [id]);

  let idFeedTemp;
  let checkFeed = false;
  let myRate = 0;
  let count = 0;
  let avgRate = 0;

  if (likes) {
    likes.forEach((item) => {
      if (item.productId === id && item.owner === email) {
        idFeedTemp = item.id;
        checkFeed = true;
        myRate = item.rate;
      }
      if (item.productId === id) {
        count++;
        avgRate += item.rate;
      }
    });
  }

  const handleRating = () => {
    if (checkFeed) {
      let editRate = {
        owner: email,
        productId: id,
        rate: myRate === 1 ? 0 : 1,
        id: idFeedTemp,
      };
      saveEditedLikes(editRate);
    } else {
      addLike(email, id, 1);
    }
  };

  return (
    <>
      {likes ? (
        <div>
          <HeartFilled
            style={{
              color: myRate === 1 ? "red" : "pink",
              fontSize: "30px",
              marginLeft: "10px",
              cursor: "pointer",
            }}
            onClick={handleRating}
          />
          <span style={{ marginLeft: "5px", fontSize: "25px", color: "black" }}>
            {likes.filter((item) => item.productId === id && item.rate === 1).length}
          </span>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default Likes;
