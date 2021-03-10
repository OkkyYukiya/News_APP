import React, { useState, useEffect } from "react";
import styles from "../../components/stock/StockListLayout.module.css";
import StockListLayout from "../../components/stock/StockListLayout";
import PropagateLoader from "react-spinners/PropagateLoader";
import { Box } from "@material-ui/core";
import { symbols } from "../../components/stock/symbolList";
import { FMP_CLOUD_ENDPOINT } from "../../apis/fmpcloud";

const StockLists = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const getStockData = async () => {
    const response = await fetch(FMP_CLOUD_ENDPOINT(symbols));
    const body = await response.json();
    setStocks(body);
  };
  useEffect(() => {
    setLoading(true);
    getStockData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.list_title}>
        <div className={styles.symbol_list}>Symbol</div>
        <div className={styles.name_list}>Company</div>
        <div className={styles.ather_list}>Price($)</div>
        <div className={styles.dayHigh}>High/Day</div>
        <div className={styles.dayLow}>Low/Day</div>
        <div className={styles.ather_list}>Change(%)</div>
      </div>
      {loading ? (
        <Box className={styles.loading}>
          <PropagateLoader
            className={styles.loading}
            color={"#497C81"}
            loading={loading}
            size={20}
          />
        </Box>
      ) : (
        stocks.map((stock) => (
          <StockListLayout
            key={stock.symbol.toString()}
            symbol={stock.symbol}
            name={stock.name}
            price={stock.price}
            changesPercentage={stock.changesPercentage}
            high={stock.dayHigh}
            low={stock.dayLow}
          />
        ))
      )}
    </div>
  );
};

export default StockLists;
