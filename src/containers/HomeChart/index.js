import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Chart from "./Chart";
import { Box } from "@material-ui/core";
import { arrayReverse } from "../../utils/arrayReverse";
import { HomeChartURL } from "../../apis/fmpcloud";
import SideAd from "../../apis/Adsense/SideAd";
import SideTopAd from "../../apis/Adsense/SideTopAd";

const HomeChart = () => {
  const [histrical, setHistorical] = useState([]);
  const dummyData = [100, 110, 120, 200, 300];
  useEffect(() => {
    const fetchData = async () => {
      const url = HomeChartURL();
      const response = await fetch(url);
      const body = await response.json();

      setHistorical(body.historicalStockList);
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <Box my={0.3} textAlign="center" px={2} className={styles.root}>
        <SideTopAd />
        {histrical
          ? histrical.map((d) => {
              const arrays = arrayReverse(d.historical);
              const num = d.historical.length;

              return (
                <Chart
                  symbol={d.symbol}
                  key={d.symbol}
                  historical={arrays}
                  currentPrice={d.historical[num - 1].close}
                  percent={d.historical[num - 1].changePercent}
                />
              );
            })
          : dummyData.map((d, i) => <Chart key={i.toString()} percent={d} />)}
        {histrical && <SideAd />}
      </Box>
    </React.Fragment>
  );
};

export default HomeChart;
