import React, { useState, useEffect } from "react";
import "./News.css";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import { BING_KEY } from "../keys/keys";
import NewsLayout from "./NewsLayout";
import PropagateLoader from "react-spinners/PropagateLoader";
import no_image from "../assets/no-image.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: "center",
    maxWidth: 500,
    height: 90,
  },
  image_container: {
    height: 90,
    width: 110,
    marginRight: 12,
  },
  image: {
    display: "block",
    height: 90,
    width: 110,
    borderRadius: 9,
  },
  newsInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  newsInfoUnder: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    width: "100%",
    marginTop: 10,
  },
  button: {
    border: "1px solid grey",
    backgroundColor: "white",
    height: 24,
    width: 40,
    marginTop: 20,
    fontSize: 11,
  },
  url: {
    textDecoration: "none",
    color: "#555555	",
    fontSize: 10,
    marginLeft: 10,
  },
  loaderContainer: {
    width: "100%",
    textAlign: "center",
    marginTop: 100,
  },
  provider: {
    fontSize: 10,
    marginLeft: 10,
  },
  datePublished: {
    fontSize: 10,
  },
}));

//news Contents
const NewsContents = (props) => {
  const classes = useStyles();

  const formatDate = (s) =>
    new Date(s).toLocaleDateString(undefined, { dateStyle: "long" });

  return (
    <Grid item xs={12} sm={12}>
      <Paper className={classes.paper}>
        <div className={classes.image_container}>
          <img
            className={classes.image}
            src={props.image ? props.image : no_image}
            alt=""
          />
        </div>
        <div className={classes.newsInfo}>
          <p style={{ color: "black" }} className="headline">
            {props.headline}
          </p>
          <p style={{ fontSize: 12, color: "#3d3d3d" }} className="description">
            {props.description}
          </p>
          <div className={classes.newsInfoUnder}>
            <a className={classes.url} href={props.url}>
              MORE
            </a>
            <span className={classes.provider}>{props.provider}</span>
            <span className={classes.datePublished}>
              {formatDate(props.datePublished)}
            </span>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

//main news component
const News = ({ category }) => {
  const classes = useStyles();
  const [articles, setArticles] = useState([]);
  const [loading, setLoding] = useState(false);
  const getNewsData = async () => {
    const response = await fetch(
      `https://bing-news-search1.p.rapidapi.com/news?count=20&safeSearch=Off&category=${category}&textFormat=Raw`,
      {
        method: "GET",
        headers: {
          "x-bingapis-sdk": "true",
          "x-rapidapi-key": BING_KEY,
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        },
      }
    );
    const body = await response.json();
    setArticles(body.value);
  };

  useEffect(() => {
    setLoding(true);
    getNewsData();
    setTimeout(() => {
      setLoding(false);
    }, 1000);
  }, []);

  return (
    <div
      style={{
        marginTop: 6,
      }}
    >
      {loading ? (
        <div className={classes.loaderContainer}>
          <PropagateLoader color={"#497C81"} loading={loading} size={20} />
        </div>
      ) : (
        articles.map((news, index) => (
          <NewsLayout
            key={index}
            NewsContents={
              <NewsContents
                headline={news.name}
                url={news.url}
                image={news.image?.thumbnail?.contentUrl}
                description={news.description}
                provider={news.provider[0]?.name}
                datePublished={news.datePublished}
              />
            }
          />
        ))
      )}
    </div>
  );
};

export default News;
