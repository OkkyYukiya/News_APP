import React, { useEffect, useState } from "react";
import NewsItemLayout from "../../components/News/NewsItemLayout";
import { Typography, Box } from "@material-ui/core";
import { fetchCovid } from "../../apis/covid";
import noimage from "../../assets/no-image.png";

const CovidNews = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      const res = await fetchCovid();
      setArticles(res);
      console.log(res);
    };
    getNews();
  }, []);
  return (
    <React.Fragment>
      <Box style={{ margin: "0 auto" }}>
        <Box textAlign="center">
          <Typography variant="h3">Covid News</Typography>
        </Box>
        {articles.map((news) => {
          console.log(news);
          return (
            <NewsItemLayout
              key={news.title}
              description={news.excerpt}
              name={news.title}
              url={news.originalUrl}
              provider_image={news.provider.images}
              provider_name={news.provider.name}
              datePublished={news.publishedDateTime}
              category={news.categories[0]}
              image={news.images ? news.images[0].url : noimage}
            />
          );
        })}
      </Box>
    </React.Fragment>
  );
};

export default CovidNews;
