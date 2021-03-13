import React from "react";
// import StockPrice from "../components/StockChart/StockPrice/StockPrice";
// import { Box, Button } from "@material-ui/core";
// import StockChart from "../components/StockChart/StockChart";
// import StockList from "../containers/StockList/StockList";
// import SymbolMenu from "../components/StockChart/SymbolMenu/SymbolMenu";

const StockLists = () => {
  // const [toggle, setToggle] = useState(true);
  // const [symbol, setSymbol] = useState("AAPL");
  return (
    <StockPrice />
    // <Box>
    // {/* <Box textAlign="center" mt={1} display="flex" justifyContent="center">
    //   <Button onClick={() => setToggle(!toggle)} style={{ border: "none" }}>
    //     {!toggle ? "View Stock Symbols" : "StockChart"}
    //   </Button>
    //   {!toggle && (
    //     <SymbolMenu
    //       Dow={() => setSymbol("DJI.INDX")}
    //       Nsdq={() => setSymbol("NDX.INDX")}
    //       AAPL={() => setSymbol("AAPL")}
    //       TSLA={() => setSymbol("TSLA")}
    //       NIKKE={() => setSymbol("N225.INDX")}
    //       SPX={() => setSymbol("SPX.INDX")}
    //     />
    //   )}
    // </Box>
    // {toggle && <StockList />} */}
    // {/* <StockChart symbol={symbol} /> */}
    // {/* </Box> */}
  );
};

export default StockLists;
