// context/likesContext.js
import axios from "axios";
import React, { useReducer, useEffect } from "react";

const APIlikes = "http://localhost:8000/apilikes";
export const likesContext = React.createContext();

const INIT_STATE = {
  likes: JSON.parse(localStorage.getItem("likes")) || [], // Загрузка из localStorage
  likesToEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_LIKES":
      return { ...state, likes: action.payload };
    case "GET_LIKES_TO_EDIT":
      return { ...state, likesToEdit: action.payload };
    default:
      return state;
  }
};

const LikesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // Функция для добавления лайка
  const addLike = async (owner, productId, rate) => {
    try {
      let like = { owner, productId, rate };
      await axios.post(APIlikes, like);
      getLikes(productId); // Обновите список лайков после добавления
    } catch (e) {
      console.log(e);
    }
  };

  // Функция для редактирования лайка
  const saveEditedLikes = async (editedLike) => {
    try {
      await axios.patch(`${APIlikes}/${editedLike.id}`, editedLike);
      getLikes(editedLike.productId); // Обновите список лайков после редактирования
    } catch (e) {
      console.log(e);
    }
  };

  // Функция для получения лайков
  const getLikes = async (productId) => {
    try {
      const response = await axios(`${APIlikes}?productId=${productId}`);
      dispatch({ type: "GET_LIKES", payload: response.data });
      localStorage.setItem("likes", JSON.stringify(response.data)); // Сохранение в localStorage
    } catch (e) {
      console.log(e);
    }
  };

  // Функция для получения лайка для редактирования
  const getLikesToEdit = async (id) => {
    try {
      const response = await axios(`${APIlikes}/${id}`);
      dispatch({ type: "GET_LIKES_TO_EDIT", payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <likesContext.Provider
      value={{
        addLike,
        saveEditedLikes,
        getLikes,
        getLikesToEdit,
        likes: state.likes,
        likesToEdit: state.likesToEdit,
      }}
    >
      {props.children}
    </likesContext.Provider>
  );
};

export default LikesContextProvider;
