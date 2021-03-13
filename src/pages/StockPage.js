import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
import StockChart from "../components/StockChart/StockChart";
// import StockGrid from "../components/StockGrid/StockGrid";
// import StockList from "../containers/StockList/StockList";
// import StockChart from "../components/StockChart/StockChart"

const StockPage = () => {
  // const [toggle, setToggle] = useState(true);
  return (
    <Box>
      <StockChart symbol="AAPL" />
      {/* <Box mt={1} textAlign="center">
        <Button
          onClick={() => setToggle(!toggle)}
          variant="outlined"
          color="primary"
        >
          {toggle ? "StockList" : "StockChart"}
        </Button>
      </Box>

      {toggle && <StockGrid />}
      {!toggle && <StockList />} */}
    </Box>
  );
};

export default StockPage;
