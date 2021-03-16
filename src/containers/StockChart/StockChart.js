import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  chartendpoint,
  options,
  adjPrice,
  PRICE_URL,
  NAME_URL,
} from "../../apis/stockchart";
import { Box, Paper, Typography } from "@material-ui/core";
import styles from "./StockChart.module.scss";
import { Store } from "../../Store/Store";

const StockChart = () => {
  const [stockData, setStockData] = useState({});
  const [stockName, setStockName] = useState({});
  const [stockPrice, setStockPrice] = useState({});

  const { globalState } = useContext(Store);

  useEffect(() => {
    const getStockPriceAndName = async (symbol) => {
      const fetchStockName = async (symbol) => {
        const response = await fetch(NAME_URL(symbol));
        const body = await response.json();
        if (body) {
          setStockName(body);
        }
      };
      const fetchPrice = async () => {
        const response2 = await fetch(PRICE_URL(symbol));
        const body2 = await response2.json();
        if (body2) {
          setStockPrice(body2);
        }
      };
      await Promise.all([fetchStockName(symbol), fetchPrice(symbol)]);
    };

    const getStockData = async (symbol) => {
      let data = [];
      let labels = [];
      await axios.get(chartendpoint(symbol)).then((response) => {
        for (let stock of response.data.data) {
          data.push(stock.close);
          labels.push(stock.date);
        }
      });
      setStockData({
        labels: labels,
        datasets: [
          {
            borderColor: "rgba(35,200,153,1)",
            data: data,
            lineTension: 0,
            backgroundColor: "rgba(35,200,153,0.3)",
          },
        ],
      });
    };
    getStockData(globalState.symbol);
    getStockPriceAndName(globalState.symbol);
    // eslint-disable-next-line
  }, [globalState.symbol]);
  return (
    <Box mt={1} className={styles.root}>
      <Paper elevation={3} className={styles.wrapper}>
        <Box mb={2} className={styles.text_header}>
          <Box pl={1} display="flex" alignItems="flex-end">
            <Typography variant="h6">{adjPrice(stockPrice.close)}$</Typography>
            <Box ml={2} display="flex" alignItems="flex-end">
              <Typography variant="h6">{stockName.symbol}/ </Typography>
              <p className={styles.name}>{stockName.name}</p>
            </Box>
          </Box>
          <Box pl={1} display="flex" alignItems="flex-end"></Box>
        </Box>
        <Line data={stockData} options={options} className={styles.chart} />
      </Paper>
    </Box>
  );
};

export default StockChart;
