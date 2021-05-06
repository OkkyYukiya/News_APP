import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { FMP_CLOUD_API_KEY } from "../../apis/apiKeys";
import NewsGridItem from "../../components/NewsGridItem";
import LoadingCircle from "../../components/CircularProgress";
import { Box } from "@material-ui/core";

const StockNews = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState(null);
  const url = `https://fmpcloud.io/api/v3/stock_news?tickers=AAPL,FB,GOOG,AMZN,MSFT,TSLA&limit=30&apikey=${FMP_CLOUD_API_KEY}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const body = await response.json();
        setData(body);
      } catch {
        setErrMessage("No result, please Re loading");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <Box display="flex" justifyContent="center">
      {loading ? (
        <Box display="flex" justifyContent="center" mt={7}>
          <LoadingCircle size={50} color="#5a7881" />
        </Box>
      ) : (
        <div className={styles.root}>
          {data.map((d) => (
            <NewsGridItem
              key={d.url}
              description={d.text}
              name={d.title}
              url={d.url}
              image={d.image}
              providerName={d.site}
              datePublished={d.publishedDate}
              category={d.symbol}
            />
          ))}
        </div>
      )}
      {errMessage && <h2>{errMessage}</h2>}
    </Box>
  );
};

export default StockNews;
