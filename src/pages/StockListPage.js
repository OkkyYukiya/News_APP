import React from "react";
import StockList from "../containers/StockList/StockList";
import { Box } from "@material-ui/core";

const StockLists = () => {
  return (
    <React.Fragment>
      <Box m={1}>
        <StockList />
      </Box>
    </React.Fragment>
  );
};

export default StockLists;
