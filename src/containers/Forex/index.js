import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Box } from "@material-ui/core";
import ForexItem from "../../components/ForexItem";
import { forexUrl } from "../../apis/fmpcloud";

const Forex = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchPrice = async () => {
      const response = await fetch(forexUrl);
      const body = await response.json();
      setData(body);
    };
    fetchPrice();
  }, []);
  return (
    <Box className={styles.root} display="flex" justifyContent="center">
      <Box display="flex" alignItems="center">
        {data.map((d) => (
          <ForexItem
            key={d.symbol}
            price={d.price}
            symbol={d.symbol}
            percent={d.changesPercentage}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Forex;
