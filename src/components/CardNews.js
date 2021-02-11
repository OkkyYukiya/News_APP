import React, { useState, useEffect } from "react";
import API_KEY from "../keys";
import CardMediaLayout from "./CardMediaLayout";
import axios from "axios";
import Buttons from "./Buttons";
import "./CardNews.css";

const CardNews = () => {
  const [category, setCategory] = useState("business");
  const [articles, setArticles] = useState([]);

  const url = `http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
  const fetchArticles = async () => {
    try {
      const response = await axios.get(url);
      setArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [category]);

  return (
    <div className="container">
      <Buttons
        business={() => setCategory("business")}
        technology={() => setCategory("technology")}
        science={() => setCategory("science")}
        general={() => setCategory("general")}
      />
      {/* <h2>SELECTING:{category.toUpperCase()}</h2> */}
      <div className="news-container">
        {articles.map((news, index) => (
          <CardMediaLayout
            key={index.toString()}
            image={news.urlToImage}
            description={news.description}
            title={news.title}
          />
        ))}
      </div>
    </div>
  );
};

export default CardNews;
