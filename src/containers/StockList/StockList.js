import React, { useState, useEffect } from "react";
import styles from "../../components/stock/StockList.module.css";
import { symbols } from "../../components/stock/symbolList";
import { FMP_KEY } from "../../keys/fmpkey";
import StockListLayout from "../../components/stock/StockListLayout";

const url = `https://fmpcloud.io/api/v3/quote/${symbols},?apikey=${FMP_KEY}`;

const StockLists = () => {
  const [stocks, setStocks] = useState([]);
  const getStockData = async () => {
    const response = await fetch(url);
    const body = await response.json();
    setStocks(body);
  };
  useEffect(() => {
    getStockData();
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
      {stocks.map((stock, index) => (
        <StockListLayout
          key={index.toString()}
          symbol={stock.symbol}
          name={stock.name}
          price={stock.price}
          changesPercentage={stock.changesPercentage}
          high={stock.dayHigh}
          low={stock.dayLow}
        />
      ))}
    </div>
  );
};

export default StockLists;
