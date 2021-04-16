import React from "react";
import styles from "./StockSheetItem.module.scss";
import { Box } from "@material-ui/core";

const StockSheetItem = (props) => {
  return (
    <Box
      my={1}
      display="flex"
      justifyContent="space-between"
      className={styles.root}
    >
      <Box>{props.symbol}</Box>
      <Box display="flex">
        <Box className={styles.price} mr={2}>
          {props.price}
        </Box>
        <Box
          mb={1}
          textAlign="center"
          className={
            props.percent > 0 ? styles.plus_percent : styles.minus_percent
          }
        >
          {props.percent}
        </Box>
      </Box>
    </Box>
  );
};

export default StockSheetItem;
