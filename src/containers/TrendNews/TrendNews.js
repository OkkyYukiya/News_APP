import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import TrendNewsItem from "../../components/TrendNewsItem/TrendNewsItem";
import { getTrendNews } from "../../apis/rapidApi";
import BounceLoader from "react-spinners/BounceLoader";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    margin: "0 auto",
  },
}));

const TrendNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const fetchTrend = async () => {
      setLoading(true);
      const res = await getTrendNews();
      setArticles(res);
      setLoading(false);
    };
    fetchTrend();
    // eslint-disable-next-line
  }, []);
  return (
    <div className={classes.root}>
      <Box mt={1}>
        <Grid container spacing={1}>
          {loading ? (
            <Box
              style={{ margin: "30px auto" }}
              display="flex"
              justifyContent="center"
              mt={8}
            >
              <BounceLoader color={"#497C81"} loading={loading} size={80} />
            </Box>
          ) : (
            articles.map((news) => (
              <TrendNewsItem
                key={news.title}
                title={news.title}
                date={news.published_date}
                link={news.link}
                sourceTitle={news.source.title}
              />
            ))
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default TrendNews;
