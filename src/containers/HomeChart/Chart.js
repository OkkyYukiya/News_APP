import React from "react";
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

import { adjPrice } from "../../utils/adjPrice";

const Chart = ({ currentPrice, historical, symbol, percent }) => {
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
            {adjPrice(percent)}%
          </Typography>
        </Box>
      </Box>

      <AreaChart
        width={280}
        height={150}
        data={historical}
        margin={{ top: 10, right: 30, left: -16, bottom: 0 }}
      >
        <Area
          type="natural"
          dataKey="close"
          // stroke={percent > 0 ? "rgb(0, 187, 0)" : "rgb(253, 7, 7)"}
          stroke=""
          fillOpacity={1}
          fill="url(#colorPv)"
        />
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#5ec4c1" stopOpacity={1} />
            <stop offset="95%" stopColor="#5ec4c1" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
      </AreaChart>
    </Box>
  );
};

export default Chart;
