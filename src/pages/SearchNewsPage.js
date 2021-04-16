import React, { useEffect } from "react";
import SearchNews from "../containers/SearchNews";

const SearchNewsPage = () => {
  useEffect(() => {
    fetch(
      "https://fmpcloud.io/api/v3/stock_news?tickers=AAPL&limit=10&apikey=22997d4b1b4273bf9824723798fae7a0"
    )
      .then((res) => res.json())
      .then((result) => console.log(result));
  }, []);
  return (
    <React.Fragment>
      <SearchNews />
    </React.Fragment>
  );
};

export default SearchNewsPage;
