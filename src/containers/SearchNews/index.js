import React, { useState } from "react";
import styles from "./SearchNews.module.scss";
import NewsGridItem from "../../components/NewsGridItem";
import { Box } from "@material-ui/core";
import { getSearchNewsData } from "../../apis/rapidApi";

const SearchNews = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState(null);

  const search = async (e) => {
    e.preventDefault();
    const response = await getSearchNewsData(query);
    setArticles(response);
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
            <NewsGridItem
              key={news.url}
              description={news.description}
              name={news.name}
              url={news.url}
              image={news.image?.thumbnail?.contentUrl}
              providerImage={news.provider[0].image?.thumbnail?.contentUrl}
              providerName={news.provider[0].name}
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
