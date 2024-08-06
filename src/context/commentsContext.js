
import React, { useReducer, createContext } from "react";
import axios from "axios";

export const CommentContext = React.createContext(); 



const COMMENTS_API = "http://localhost:8000/apicomments";
const INIT_STATE = {
  comments: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_COMMENTS":
      return { ...state, comments: action.payload.data };
    default:
      return state;
  }
};

const CommentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const createComment = async (newComment, tankId, createdAtMs) => {
    await axios.post(COMMENTS_API, { newComment, tankId, createdAtMs });
    getComments(tankId);
  };

  const getComments = async (tankId) => {
    const result = await axios.get(`${COMMENTS_API}/?tankId=${tankId}`);
    dispatch({
      type: "GET_COMMENTS",
      payload: result,
    });
  };

  const deleteComment = async (id, tankId) => {
    await axios.delete(`${COMMENTS_API}/${id}`);
    getComments(tankId);
  };

  return (
    <CommentContext.Provider
      value={{
        comments: state.comments,
        getComments,
        deleteComment,
        createComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContextProvider; // Экспорт по умолчанию

