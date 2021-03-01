import React from "react";
import styles from "./StockList.module.css";

const roundNum = (price) => {
  return Math.round(price * 100) / 100;
};

const StockListLayout = ({
  symbol,
  name,
  price,
  changesPercentage,
  high,
  low,
}) => {
  return (
    <div className={styles.list_box}>
      <div className={styles.symbol_list}>{symbol}</div>
      <div className={styles.name_list}>
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.ather_list}>{price}</div>
      <div className={styles.dayHigh}>{roundNum(high)}</div>
      <div className={styles.dayLow}>{roundNum(low)}</div>
      <div className={styles.ather_list}>
        <span
          className={
            changesPercentage > 0 ? styles.price_up : styles.price_down
          }
        >
          {changesPercentage}
        </span>
      </div>
    </div>
  );
};

export default StockListLayout;
