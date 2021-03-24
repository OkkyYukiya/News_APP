import React, { useEffect, useState } from "react";
import NewsItemLayout from "../../components/News/NewsItemLayout";
import { Typography, Box } from "@material-ui/core";
import { fetchCovid } from "../../apis/covid";
import noimage from "../../assets/no-image.png";
import styles from "./CovidNews.module.css";
import ClipLoader from "react-spinners/ClipLoader";

const CovidNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const res = await fetchCovid();
      setArticles(res);
      setLoading(false);
    };
    getNews();
  }, []);
  return (
    <React.Fragment>
      <Box style={{ margin: "0 auto" }}>
        <Box textAlign="center">
          <Typography variant="h3">Covid News</Typography>
        </Box>
        {loading ? (
          <Box className={styles.loading}>
            <ClipLoader
              className={styles.loading}
              color={"#497C81"}
              loading={loading}
              size={60}
            />
          </Box>
        ) : (
          articles.map((news) => {
            return (
              <NewsItemLayout
                key={news.title}
                description={news.excerpt}
                name={news.title}
                url={news.originalUrl}
                providerImage={news.provider.images}
                providerName={news.provider.name}
                datePublished={news.publishedDateTime}
                category={news.categories[0]}
                image={news.images ? news.images[0].url : noimage}
              />
            );
          })
        )}
      </Box>
    </React.Fragment>
  );
};

export default CovidNews;
