import React, { useState, useEffect } from "react";
import styles from "./News.module.css";
import ButtonTab from "../../components/News/ButtonTab";
import NewsItemLayout from "../../components/News/NewsItemLayout";
import { RAPID_BING_API_KEY } from "../apis/index";
import PropagateLoader from "react-spinners/PropagateLoader";
import { Box } from "@material-ui/core";

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const getNewsData = async () => {
    const response = await fetch(
      `https://bing-news-search1.p.rapidapi.com/news?cc=us&safeSearch=Off&category=${category}&textFormat=Raw`,
      {
        method: "GET",
        headers: {
          "accept-language": "us",
          "x-bingapis-sdk": "true",
          "x-rapidapi-key": RAPID_BING_API_KEY,
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        },
      }
    );
    const body = await response.json();
    setArticles(body.value);
  };

  useEffect(() => {
    setLoading(true);
    getNewsData();
    setTimeout(() => {
      setLoading(false);
    }, 1250);
    // eslint-disable-next-line
  }, [category]);

  return (
    <React.Fragment>
      <Box className={styles.box}>
        <ButtonTab />
      </Box>
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
        <div className={styles.root}>
          {articles.map((news) => (
            <NewsItemLayout
              key={news.url}
              description={news.description}
              name={news.name}
              url={news.url}
              image={news.image?.thumbnail?.contentUrl}
              provider_image={news.provider[0].image?.thumbnail?.contentUrl}
              provider_name={news.provider[0].name}
              datePublished={news.datePublished}
              category={category}
            />
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default News;
