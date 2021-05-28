import React, { createContext, useReducer } from "react";

const initialState = {
  symbol: "DJI.INDX",
  category: "business",
  user: {
    photoURL: "",
  },
  language: "us",
  slideNews: [],
  homeChartData: [],
  newsdata: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SYMBOL":
      return { ...state, symbol: action.payload.symbol };
    case "SET_CATEGORY":
      return { ...state, category: action.payload.category };
    case "SET_USER":
      return { ...state, user: action.payload.user };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload.language };
    case "SET_SLIDENEWS":
      return { ...state, slideNews: action.payload.slideNews };
    case "SET_HOMECHARTDATA":
      return { ...state, homeChartData: action.payload.homeChartData };
    case "SET_NEWSDATA":
      return { ...state, newsdata: action.payload.newsdata };
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
