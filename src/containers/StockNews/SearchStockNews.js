import React, { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import { FMP_CLOUD_API_KEY } from "../../apis/apiKeys";
import NewsGridItem from "../../components/NewsGridItem";

const SearchStockNews = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const onSymbol = async (e) => {
    e.preventDefault();
    const url = `https://fmpcloud.io/api/v3/stock_news?tickers=${text}&limit=20&apikey=${FMP_CLOUD_API_KEY}`;
    try {
      const response = await fetch(url);
      const body = await response.json();
      setData(body);
    } catch {
      setErr("No result, check inputed symbol name!");
    }
  };
  return (
    <Box>
      <form
        onSubmit={onSymbol}
        autoComplete="off"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <TextField
          style={{ backgroundColor: "white" }}
          label="Symbol"
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          style={{ backgroundColor: "#5a7881", color: "white", height: 40 }}
          variant="contained"
          type="submit"
        >
          search
        </Button>
      </form>
      <Box display="flex" justifyContent="center">
        <Box display="flex" flexDirection="column">
          {data &&
            data.map((d) => (
              <NewsGridItem
                key={d.url}
                description={d.text}
                name={d.title}
                url={d.url}
                image={d.image}
                providerName={d.site}
                datePublished={d.publishedDate}
                category={d.symbol}
              />
            ))}
          {err && <h1>{err}</h1>}
        </Box>
      </Box>
    </Box>
  );
};

export default SearchStockNews;
