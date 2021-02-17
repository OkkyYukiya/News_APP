import React, { useState, useEffect } from "react";
import { symbols } from "../components/symbolList";
import API_KEY from "../fmpkey";

import axios from "axios";

const url = `https://fmpcloud.io/api/v3/quote/${symbols},?apikey=${API_KEY}`;

const Layout = ({ symbol, name, price, changePercentage }) => {
  return (
    <div
      style={{
        display: "flex",
        borderBottom: "1px solid black",
        maxWidth: 1000,
        justifyContent: "space-around",
        textAlign: "left",
      }}
    >
      <div>{symbol}</div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{changePercentage}</div>
    </div>
  );
};

const StockLists = () => {
  const [stocks, setStocks] = useState([]);
  const fetchStocks = async () => {
    try {
      const response = await axios.get(url);
      setStocks(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchStocks();
  }, []);

  return (
    <div>
      <Layout
        name="Company"
        symbol="Symbol"
        price="Price($)"
        changePercentage={"Chage(%)"}
      />
      {stocks.map((stock, index) => (
        <Layout
          key={index.toString()}
          name={stock.name}
          symbol={stock.symbol}
          price={stock.price}
          changePercentage={stock.changePercentage}
        />
      ))}
    </div>
  );
};

export default StockLists;
