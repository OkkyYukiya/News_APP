import React from "react";
import styles from "./index.module.scss";
import { Box, Typography } from "@material-ui/core";
import { adjPrice, changeSymbol } from "../../utility/adjPrice";

const ForexItem = ({ price, symbol, percent }) => {
  return (
    <Box display="flex" className={styles.root}>
      <Typography className={styles.symbol}>{changeSymbol(symbol)}</Typography>
      <Typography className={styles.price}>{price}</Typography>
      <Typography
        className={percent > 0 ? styles.plus_percent : styles.minus_percent}
      >
        {percent > 0 ? "▲" : "▼"}
        {adjPrice(percent)}%
      </Typography>
    </Box>
  );
};

export default ForexItem;
