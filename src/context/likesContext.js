
import axios from "axios";
import React, { useReducer, useEffect } from "react";

const APIlikes = "http://localhost:8000/apilikes";
export const likesContext = React.createContext();

const INIT_STATE = {
  likes: JSON.parse(localStorage.getItem("likes")) || [], 
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

  const addLike = async (owner, productId, rate) => {
    try {
      let like = { owner, productId, rate };
      await axios.post(APIlikes, like);
      getLikes(productId);
    } catch (e) {
      console.log(e);
    }
  };


  const saveEditedLikes = async (editedLike) => {
    try {
      await axios.patch(`${APIlikes}/${editedLike.id}`, editedLike);
      getLikes(editedLike.productId);
    } catch (e) {
      console.log(e);
    }
  };

  const getLikes = async (productId) => {
    try {
      const response = await axios(`${APIlikes}?productId=${productId}`);
      dispatch({ type: "GET_LIKES", payload: response.data });
      localStorage.setItem("likes", JSON.stringify(response.data)); 
    } catch (e) {
      console.log(e);
    }
  };

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
