import React, { useState } from "react";
import StockNews from "../containers/StockNews";
import { ButtonGroup, Button, Box } from "@material-ui/core";
import SearchStockNews from "../containers/StockNews/SearchStockNews";

const StockNewsPage = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <Box mt={0.8} textAlign="center">
        <ButtonGroup
          style={{ backgroundColor: "white" }}
          size="large"
          aria-label="large outlined primary button group"
        >
          <Button onClick={() => setValue(0)}>STOCK NEWS</Button>
          <Button onClick={() => setValue(1)}>INPUT SYMBOL</Button>
        </ButtonGroup>
      </Box>
      {value === 0 && <StockNews />}
      {value === 1 && <SearchStockNews />}
    </div>
  );
};

export default StockNewsPage;
