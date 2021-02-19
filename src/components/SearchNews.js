import React, { useState } from "react";
import { BING_KEY } from "../keys/keys";
import Text from "./Text";
import "./SearchNews.css";

const url =
  "https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&cc=us&count=20&safeSearch=Strict&q=";

async function searchNews(q) {
  q = encodeURIComponent(q);
  const response = await fetch(`${url}${q}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": BING_KEY,
      "x-bingapis-sdk": "true",
    },
  });
  const body = await response.json();
  return body.value;
}

const SearchNews = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState(null);

  const search = (e) => {
    e.preventDefault();
    searchNews(query).then(setList);
  };

  return (
    <div className="app">
      <Text title="Search Free Word" />
      <form onSubmit={search}>
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Input word"
        />
        <button>Search</button>
      </form>

      {!list ? null : list.length === 0 ? (
        <p>
          <i>No results</i>
        </p>
      ) : (
        <ul>
          {list.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

const Item = ({ item }) => {
  const separateWords = (s) => s.replace(/[A-Z][a-z]+/g, "$& ").trim();
  const formatDate = (s) =>
    new Date(s).toLocaleDateString(undefined, { dateStyle: "long" });

  return (
    <li className="item">
      {item.image && (
        <img
          className="thumbnail"
          alt=""
          src={item.image?.thumbnail?.contentUrl}
        />
      )}

      <h2 className="title">
        <a href={item.url}>{item.name}</a>
      </h2>

      <p className="description">{item.description}</p>

      <div className="meta">
        <span>{formatDate(item.datePublished)}</span>

        <span className="provider">
          {item.provider[0].image?.thumbnail && (
            <img
              className="provider-thumbnail"
              alt=""
              src={item.provider[0].image.thumbnail.contentUrl + "&w=16&h=16"}
            />
          )}
          {item.provider[0].name}
        </span>

        {item.category && <span>{separateWords(item.category)}</span>}
      </div>
    </li>
  );
};

export default SearchNews;
