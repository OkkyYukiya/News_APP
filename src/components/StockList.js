import React from "react";
import styles from "./StockList.module.css";
import dummuy from "../dummy.json";
// import { symbols } from "./symbolList";
// import API_KEY from "../fmpkey";
// import axios from "axios";

// const url = `https://fmpcloud.io/api/v3/quote/${symbols},?apikey=${API_KEY}`;

const data = dummuy;
// console.log(data);

const roundNum = (price) => {
  return Math.round(price * 100) / 100;
};

const Layout = ({ symbol, name, price, changesPercentage, high, low }) => {
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

const StockLists = () => {
  // const [stocks, setStocks] = useState([]);
  // const fetchStocks = async () => {
  //   try {
  //     const response = await axios.get(url);
  //     console.log(response.data);
  //     setStocks(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchStocks();
  // }, []);

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
      {data.map((stock, index) => (
        <Layout
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
