import React, { useState, useEffect } from "react";
import NewsLayout from "./NewsLayout";
import axios from "axios";
import API_KEY from "../keys";

const News = (props) => {
  const url = `http://newsapi.org/v2/top-headlines?country=jp&category=${props.category}&apiKey=${API_KEY}`;
  const [articles, setArtilces] = useState([]);
  const fetchArticles = async () => {
    try {
      const response = await axios.get(url);
      setArtilces(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <div>
      {articles.map((news, index) => (
        <NewsLayout
          key={index.toString()}
          title={news.title}
          image={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};

export default News;
