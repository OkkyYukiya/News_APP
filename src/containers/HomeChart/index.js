import React from "react";
import styles from "./index.module.scss";
import Chart from "./Chart";
import { FMP_CLOUD_API_KEY } from "../../apis/apiKeys";
import { Box } from "@material-ui/core";

const HomeChart = () => {
  const symbols = ["AAPL", "FB", "MSFT", "AMZN", "GOOG", "NFLX", "SBUX"];
  const date = new Date();
  const getDate = date.toLocaleDateString();
  const toArrayDate = getDate.split("/");
  const endpoint = (symbol) => {
    return `https://fmpcloud.io/api/v3/historical-price-full/${symbol}?from=2021-03-14&to=${
      toArrayDate[2]
    }-${toArrayDate[0]}-${toArrayDate[1] - 1}&apikey=${FMP_CLOUD_API_KEY}`;
  };
  return (
    <Box my={1} textAlign="center" px={2} className={styles.root}>
      {symbols.map((symbol) => (
        <Chart key={symbol} endpoint={endpoint(symbol)} />
      ))}
    </Box>
  );
};

export default HomeChart;
