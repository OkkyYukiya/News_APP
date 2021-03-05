import React, { createContext, useReducer } from "react";

const initialState = {
  user: {},
  articles: [],
  language: "ja",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload.user };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload.language };
    case "SET_ARTICLES":
      return { ...state, articles: action.payload.articles };
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
