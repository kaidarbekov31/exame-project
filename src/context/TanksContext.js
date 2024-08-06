import axios from "axios";
import React, { useReducer } from "react";


export const TanksContext = React.createContext();

const API = "http://localhost:8000/apitanks";

const INIT_STATE = {
  tanks: [],
  edit: null,
  more: null,
  total: 0
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TANKS":
      return {
        ...state,
        tanks: action.payload.data,
        total: action.payload.headers["x-total-count"],
      };
    case "GET_EDIT":
      return {
        ...state,
        edit: action.payload.data,
      };
    case "GET_MORE":
      return {
        ...state,
        more: action.payload.data,
      };
    default:
      return state;
  }
};

const TanksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

 
  const createTank = async (newTank) => {
    try {
      await axios.post(API, newTank);
      getTanks(); 
    } catch (error) {
      console.error("Error creating tank:", error);
    }
  };

  
  const getTanks = async () => {
    try {
      const res = await axios.get(`${API}${window.location.search}`);
      dispatch({
        type: "GET_TANKS",
        payload: res,
      });
    } catch (error) {
      console.error("Error fetching tanks:", error);
    }
  };


  const getMore = async (id) => {
    try {
      const res = await axios.get(`${API}/${id}?_embed=comments`);
      dispatch({
        type: "GET_MORE",
        payload: res,
      });
    } catch (error) {
      console.error("Error fetching more details:", error);
    }
  };

  
  const getTanksForEdit = async (id) => {
    try {
      const res = await axios.get(`${API}/${id}`);
      dispatch({
        type: "GET_EDIT",
        payload: res,
      });
    } catch (error) {
      console.error("Error fetching tank for edit:", error);
    }
  };

  const editTanks = async (id, editedTanks) => {
    try {
      await axios.patch(`${API}/${id}`, editedTanks);
      getTanks(); 
    } catch (error) {
      console.error("Error editing tank:", error);
    }
  };


  const deleteTanks = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getTanks(); 
    } catch (error) {
      console.error("Error deleting tank:", error);
    }
  };

  return (
    <TanksContext.Provider
      value={{
        tanks: state.tanks,
        edit: state.edit,
        more: state.more,
        total: state.total,
        getTanks,
        createTank,
        deleteTanks,
        editTanks,
        getTanksForEdit,
        getMore,
      }}
    >
      {children}
    </TanksContext.Provider>
  );
};

export default TanksContextProvider;
