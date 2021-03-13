import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import StockGridItem from "../StockGridItem/StockGridItem";
import { MARKETSTACK_API_KEY } from "../../apis/apiKeys";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 700,
    margin: "0 auto",
  },
}));

const BASEURL = "https://api.marketstack.com/v1";
const params = {
  eod: "/eod/latest",
  access_key: `?access_key=${MARKETSTACK_API_KEY}`,
  symbols: "&symbols=DJI.INDX,NDX.INDX,AAPL,TSLA,GOOGL",
};

const url = `${BASEURL}${params.eod}${params.access_key}${params.symbols}`;

const StockItem = () => {
  const classes = useStyles();
  const [stock, setStock] = useState([]);
  const fetchPrice = async () => {
    const response = await fetch(url);
    const body = await response.json();
    console.log(body.data);
    setStock(body.data);
  };
  useEffect(() => {
    fetchPrice();
  }, []);

  return (
    <div className={classes.root}>
      <Box mt={1}>
        <Box>
          {stock.map((st) => (
            <StockGridItem
              symbol={st.symbol}
              close={st.close}
              key={st.symbol}
              open={st.open}
              high={st.high}
              low={st.low}
            />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default StockItem;
