import React from "react";
import Header from "./components/Header";
import StockBord from "./components/StockBord";
import CardNews from "./components/CardNews";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <StockBord />
      <CardNews />
    </React.Fragment>
  );
};

export default App;
