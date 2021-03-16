import React from "react";
import { Box, Button, Grid, Paper } from "@material-ui/core";
import styles from "./StockGridItem.module.scss";

const StockGridItem = ({ symbol, close, open, high, low, action }) => {
  return (
    <Grid className={styles.root}>
      <Box className={styles.wrapper}>
        <Paper className={styles.paper} variant="outlined">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            textAlign="center"
            p={0.5}
            my={0.3}
          >
            <Box>
              <Button
                onClick={action}
                className={styles.button}
                variant="outlined"
              >
                {symbol}
              </Button>
            </Box>
            <Box display="flex" textAlign="right">
              <Box className={styles.open} mr={1}>
                {open}
                <span className={styles.type}>(O)</span>
              </Box>
              <Box className={styles.high} mr={0.2}>
                {high}
                <span className={styles.type}>(H)</span>
              </Box>
              <Box className={styles.low} mr={0.2}>
                {low}
                <span className={styles.type}>(L)</span>
              </Box>
              <Box className={styles.close} mr={0.2}>
                {close}
                <span className={styles.type}>(C)</span>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default StockGridItem;
