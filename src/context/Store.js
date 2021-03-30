import React, { createContext, useReducer } from "react";

const initialState = {
  symbol: "DJI.INDX",
  user: {
    photoURL: "",
  },
  language: "us",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SYMBOL":
      return { ...state, symbol: action.payload.symbol };
    case "SET_USER":
      return { ...state, user: action.payload.user };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload.language };
    default:
      return state;
  }
};

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null,
});

export const StoreProvider = ({ children }) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ globalState, setGlobalState }}>
      {children}
    </Store.Provider>
  );
};
