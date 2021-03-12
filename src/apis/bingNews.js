import { RAPID_BING_API_KEY } from "./apiKeys";

const baseurl = "https://bing-news-search1.p.rapidapi.com/news";

const headers = {
  method: "GET",
  headers: {
    "accept-language": "us",
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
    "x-rapidapi-key": RAPID_BING_API_KEY,
    "x-bingapis-sdk": "true",
  },
};

//get news from categorys
export const getNewsData = async (category) => {
  const response = await fetch(
    `${baseurl}?cc=us&safeSearch=Off&category=${category}&textFormat=Raw`,
    headers
  );
  const body = await response.json();
  return body.value;
};

//get news from search free word
export const getSearchNewsData = async (query) => {
  query = encodeURIComponent(query);
  const response = await fetch(
    `${baseurl}/search?freshness=Day&textFormat=Raw&cc=us&count=20&safeSearch=Strict&q=${query}`,
    headers
  );
  const body = await response.json();
  return body.value;
};

export const formatDate = (s) =>
  new Date(s).toLocaleDateString(undefined, { dateStyle: "long" });
