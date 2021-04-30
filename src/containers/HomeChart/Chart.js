import React, { useEffect, useState } from "react";
import styles from "./Chart.module.scss";
import { Box, Typography } from "@material-ui/core";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Chart = ({ endpoint }) => {
  const [historical, setHistorical] = useState([]);
  const [symbol, setSymbol] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [percent, setPercent] = useState(null);

  const adjPrice = (price) => {
    return Math.round(price * 100) / 100;
  };

  useEffect(() => {
    const fetchStock = async () => {
      const response = await fetch(endpoint);
      const body = await response.json();

      setCurrentPrice(body.historical[0].close);
      setPercent(adjPrice(body.historical[0].changePercent));
      const adjClosePrice = body.historical.map((p) => {
        const replaceStr = (s) => {
          const str = s;
          const adjStr = str.replace("2021-", "");
          return adjStr;
        };
        return {
          date: replaceStr(p.date),
          close: adjPrice(p.close),
          changePercent: adjPrice(p.changePercent),
        };
      });

      const reverseArray = adjClosePrice.reverse();
      setHistorical(reverseArray);
      setSymbol(body.symbol);
    };
    fetchStock();
    // eslint-disable-next-line
  }, []);
  return (
    <Box className={styles.root}>
      <Box
        ml={5}
        display="flex"
        justifyContent="space-between"
        className={styles.stock_info}
      >
        <Typography className={styles.symbol} variant="h6">
          {symbol}
        </Typography>
        <Box className={styles.stock_info_right} display="flex">
          <Typography className={styles.current_price} variant="h6">
            {adjPrice(currentPrice)}$
          </Typography>
          <Typography
            className={percent > 0 ? styles.plus_percent : styles.minus_percent}
            variant="h6"
          >
            {percent}%
          </Typography>
        </Box>
      </Box>

      <AreaChart
        width={300}
        height={150}
        data={historical}
        margin={{ top: 10, right: 30, left: -16, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={1} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />

        <Area
          type="natural"
          dataKey="close"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </Box>
  );
};

export default Chart;
