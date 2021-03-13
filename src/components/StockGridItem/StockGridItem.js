import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Grid, Paper } from "@material-ui/core";
import { adjPrice } from "../../apis/stockchart";
import styles from "./StockGridItem.module.scss";

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: "center",
    color: "black",
    width: 670,
  },
}));
console.log(useStyles);

const StockGridItem = ({ symbol, close, open, high, low }) => {
  const classes = useStyles();
  return (
    <Grid className={styles.root}>
      <Box>
        <Paper className={classes.paper} variant="outlined">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            textAlign="center"
            p={1}
            my={0.3}
          >
            <Box>
              <Button className={styles.button} variant="outlined">
                {symbol}
              </Button>
            </Box>
            <Box display="flex">
              <p>{adjPrice(close)}</p>
              <p>{adjPrice(open)}</p>
              <p>{adjPrice(high)}</p>
              <p>{adjPrice(low)}</p>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default StockGridItem;
