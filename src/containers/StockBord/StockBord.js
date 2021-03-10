import React, { useState, useEffect } from "react";
import styles from "./StockBord.module.css";
import StockBordItem from "../../components/stock/StockBordItem";
import axios from "axios";
import { FMP_CLOUD_ENDPOINT } from "../../apis/fmpcloud";
import { STOCKBORD_SYMBOL_LIST } from "../../components/stock/symbolList";

const changesPercentage = (price, previousClosePrice) => {
  const differencePrice = price - previousClosePrice;
  const priceAction = differencePrice / price;
  const adjustPrice = priceAction * 100;
  return Math.round(adjustPrice * 100) / 100;
};

const StockBord = () => {
  const [stocks, setStocks] = useState([]);
  const fetchStocks = async () => {
    try {
      const response = await axios.get(
        FMP_CLOUD_ENDPOINT(STOCKBORD_SYMBOL_LIST)
      );
      setStocks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);
  return (
    <div className={styles.wrap}>
      <ul className={styles.slideshow}>
        {stocks.map((stock, index) => (
          <StockBordItem
            key={index}
            symbol={stock.symbol}
            price={stock.price}
            vsy={changesPercentage(stock.price, stock.previousClose)}
          />
        ))}
      </ul>
      <ul className={styles.slideshow}>
        {stocks.map((stock, index) => (
          <StockBordItem
            key={index}
            symbol={stock.symbol}
            price={stock.price}
            vsy={changesPercentage(stock.price, stock.previousClose)}
          />
        ))}
      </ul>
    </div>
  );
};

export default StockBord;
