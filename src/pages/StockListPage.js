import React from "react";
import StockList from "../components/StockList";
import TextTmplate from "../components/Text";

const StockLists = () => {
  return (
    <React.Fragment>
      <TextTmplate title="MAJOR STOCK LIST" />
      <StockList />
    </React.Fragment>
  );
};

export default StockLists;
