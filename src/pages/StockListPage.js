import React from "react";
import StockList from "../components/StockList";
import TextTmplate from "../components/Text";
import Box from '@material-ui/core/Box';

const StockLists = () => {
  return (
    <React.Fragment>
      <Box m={1}>
        <TextTmplate title="MAJOR STOCK LIST" />
      </Box>
      <StockList />
    </React.Fragment>
  );
};

export default StockLists;
