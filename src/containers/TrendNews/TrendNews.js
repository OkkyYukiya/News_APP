import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import TrendNewsItem from "../../components/TrendNewsItem/TrendNewsItem";
import { getTrendNews } from "../../apis/rapidApi";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    margin: "0 auto",
  },
}));

const TrendNews = () => {
  const [articles, setArticles] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchTrend = async () => {
      const res = await getTrendNews();
      setArticles(res);
    };
    fetchTrend();
    // eslint-disable-next-line
  }, []);
  return (
    <div className={classes.root}>
      <Box mt={1}>
        <Grid container spacing={1}>
          {articles.map((news) => (
            <TrendNewsItem
              key={news.title}
              title={news.title}
              date={news.published_date}
              link={news.link}
              sourceTitle={news.source.title}
            />
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default TrendNews;
