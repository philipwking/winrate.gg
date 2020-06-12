import React, { createContext, useReducer, useContext } from "react";
import {
  SET_USERNAME,
  SET_GAMES_LIST,
  SET_GAME_DETAILS,
  SET_ACCOUNT_ID
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.post
      };
    case SET_ACCOUNT_ID:
      return{
        ...state,
        accountId: action.post
      }
    case SET_GAMES_LIST:
      return {
        ...state,
        gamesList: action.post
      }
    case SET_GAME_DETAILS:
      return {
        ...state,
        gameDetails: action.post
      }
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    username: "",
    accountId: "",
    gamesList: {},
    gameDetails: {}
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
