// import React, { useReducer } from "react";
// import axios from "axios";

// export const commentContext = React.createContext();
// const COMMENTS_API = "http://localhost:8000/apicomments"
// const INIT_STATE = {
//   comments: [],
// };

// const reducer = (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case "GET_COMMENTS":
//       return { ...state, comments: action.payload.data };
//     default:
//       return state;
//   }
// };

// const CommentContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, INIT_STATE);

//   async function createComment(newComment, tanksId, createdAtMs) {
//     await axios.post(COMMENTS_API, {newComment, tankId: tanksId, createdAtMs});
//     getComments(tanksId);
//   }
//   async function getComments(tanksId) {
//     let result = await axios.get(COMMENTS_API + `/?tankId=${tanksId}`);
//     dispatch({
//       type: "GET_COMMENTS",
//       payload: result,
//     });
//   }

//   async function deleteComment(id, tanksId) {
//     await axios.delete(`${COMMENTS_API}/${id}`);
//     getComments(tanksId);
//   }


//   return (
//     <commentContext.Provider
//       value={{
//         comments: state.comments,
//         getComments,
//         deleteComment,
//         createComment,
//       }}
//     >
//       {children}
//     </commentContext.Provider>
//   );
// };
// export default CommentContextProvider;
// src/context/commentsContext.js
// src/context/commentsContext.js
import React, { useReducer, createContext } from "react";
import axios from "axios";

export const CommentContext = React.createContext(); // Имя контекста
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

