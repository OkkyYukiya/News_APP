import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
import StockGrid from "../components/StockGrid/StockGrid";
import StockList from "../containers/StockList/StockList";

const StockPage = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <Box>
      <Box mt={1} textAlign="center">
        <Button
          onClick={() => setToggle(!toggle)}
          variant="outlined"
          color="primary"
        >
          {toggle ? "StockList" : "StockChart"}
        </Button>
      </Box>

      {toggle && <StockGrid />}
      {!toggle && <StockList />}
    </Box>
  );
};

export default StockPage;
