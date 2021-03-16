import React, { useContext, useEffect, useState } from "react";
import styles from "./StockGrid.module.scss";
import { Box } from "@material-ui/core";
import StockGridItem from "../../components/StockGridItem/StockGridItem";
import { Store } from "../../Store/Store";
import { fetchPrice, adjPrice } from "../../apis/marketStack";

const StockGrid = () => {
  const [stock, setStock] = useState([]);
  const { setGlobalState } = useContext(Store);

  useEffect(() => {
    const getPrice = async () => {
      const res = await fetchPrice();
      setStock(res);
    };
    getPrice();
  }, []);

  return (
    <div className={styles.root}>
      <Box mt={1}>
        <Box>
          {stock.map((st) => {
            return (
              <StockGridItem
                key={st.symbol}
                symbol={st.symbol}
                close={adjPrice(st.close)}
                open={adjPrice(st.open)}
                high={adjPrice(st.high)}
                low={adjPrice(st.low)}
                action={() => {
                  setGlobalState({
                    type: "SET_SYMBOL",
                    payload: { symbol: st.symbol },
                  });
                }}
              />
            );
          })}
        </Box>
      </Box>
    </div>
  );
};

export default StockGrid;
