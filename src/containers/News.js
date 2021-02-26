import React, { useState, useEffect } from "react";
import "./News.css";
import { makeStyles } from "@material-ui/core/styles";
import { BING_KEY } from "../keys/keys";
import NewsLayout from "../components/NewsLayout";
import PropagateLoader from "react-spinners/PropagateLoader";
import NewsContents from "../components/NewsContents";

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
          // コンポーネントをラップするときは、コンポーネントにマージンを付けたり、ボーダーを引くとき
          <NewsLayout key={index}>
            <NewsContents
              headline={news.name}
              url={news.url}
              image={news.image?.thumbnail?.contentUrl}
              description={news.description}
              provider={news.provider[0]?.name}
              datePublished={news.datePublished}
            />
          </NewsLayout>
        ))
      )}
    </div>
  );
};

export default News;
