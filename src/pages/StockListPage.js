import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
import StockList from "../containers/StockList/StockList";
import StockChart from "../components/StockChart/StockChart";
import SymbolMenu from "../components/StockChart/SymbolMenu/SymbolMenu";

const StockLists = () => {
  const [toggle, setToggle] = useState(true);
  const [symbol, setSymbol] = useState("AAPL");
  return (
    <Box>
      <Box textAlign="center" mt={1} display="flex" justifyContent="center">
        <Button onClick={() => setToggle(!toggle)} style={{ border: "none" }}>
          {!toggle ? "View Stock Symbols" : "StockChart"}
        </Button>
        {!toggle && (
          <SymbolMenu
            Dow={() => setSymbol("DJI.INDX")}
            Nsdq={() => setSymbol("NDX.INDX")}
            AAPL={() => setSymbol("AAPL")}
            TSLA={() => setSymbol("TSLA")}
            NIKKE={() => setSymbol("N225.INDX")}
            SPX={() => setSymbol("SPX.INDX")}
          />
        )}
      </Box>
      {toggle && <StockList />}
      {!toggle && <StockChart symbol={symbol} />}
    </Box>
  );
};

export default StockLists;
