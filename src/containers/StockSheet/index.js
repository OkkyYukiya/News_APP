import React, { useEffect, useState } from "react";
import { FMP_CLOUD_ENDPOINT } from "../../apis/fmpcloud";
import { Box, Grid, Typography } from "@material-ui/core";
import StockSheetItem from "../../components/StockSheetItem";
import { symbols } from "../../components/stock/symbolList";
import ShowChartIcon from "@material-ui/icons/ShowChart";

const SearchNewsPage = () => {
  const [stock, setStock] = useState([]);
  useEffect(() => {
    const fetchStock = async () => {
      const response = await fetch(FMP_CLOUD_ENDPOINT(symbols));
      const body = await response.json();
      setStock(body);
      console.log(body);
    };
    fetchStock();
  }, []);
  return (
    <React.Fragment>
      <Box
        style={{
          width: 200,
          color: "black",
          padding: 12,
          borderRadius: 8,
          backgroundColor: "white",
        }}
        mr={3}
      >
        <Box display="flex" style={{ borderBottom: "1px solid grey" }}>
          <Typography>STOCKS</Typography>
          <ShowChartIcon />
        </Box>
        <Grid container justify="space-between" direction="column">
          {stock.map((st) => (
            <StockSheetItem
              key={st.symbol}
              symbol={st.symbol}
              price={st.price}
              percent={st.changesPercentage}
            />
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default SearchNewsPage;
