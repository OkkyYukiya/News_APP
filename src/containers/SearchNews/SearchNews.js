import React, { useState } from "react";
import styles from "./SearchNews.module.scss";
import NewsItemLayout from "../../components/News/NewsItemLayout";
import { Box } from "@material-ui/core";
import { RAPID_BING_API_KEY } from "../apis/index";

const url =
  "https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&cc=us&count=20&safeSearch=Strict&q=";

const searchNews = async (query) => {
  query = encodeURIComponent(query);
  const response = await fetch(`${url}${query}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": RAPID_BING_API_KEY,
      "x-bingapis-sdk": "true",
    },
  });
  const body = await response.json();
  return body.value;
};

const SearchNews = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState(null);

  const search = (e) => {
    e.preventDefault();
    searchNews(query).then(setArticles);
  };

  return (
    <Box m={0.3}>
      <div className={styles.root}>
        <form onSubmit={search}>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="covid..."
          />
          <button>Search</button>
        </form>

        {!articles ? null : articles.length === 0 ? (
          <h2 className={styles.no_result}>No results</h2>
        ) : (
          articles.map((news) => (
            <NewsItemLayout
              key={news.url}
              description={news.description}
              name={news.name}
              url={news.url}
              image={news.image?.thumbnail?.contentUrl}
              provider_image={news.provider[0].image?.thumbnail?.contentUrl}
              provider_name={news.provider[0].name}
              datePublished={news.datePublished}
              category={news.category}
            />
          ))
        )}
      </div>
    </Box>
  );
};

export default SearchNews;
