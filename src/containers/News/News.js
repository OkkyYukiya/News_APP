import React, { useState, useEffect } from "react";
import styles from "./News.module.css";
import ButtonTab from "../../components/News/ButtonTab";
import NewsItemLayout from "../../components/News/NewsItemLayout";
import { Box } from "@material-ui/core";
import { getNewsData } from "../../apis/rapidApi";
import PropagateLoader from "react-spinners/PropagateLoader";

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const res = await getNewsData(category);
      setArticles(res);
      setLoading(false);
    };
    getNews();

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
              providerImage={news.provider[0].image?.thumbnail?.contentUrl}
              providerName={news.provider[0].name}
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
