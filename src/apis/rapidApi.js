import { RAPID_API_KEY } from "./apiKeys";

const baseurl = "https://bing-news-search1.p.rapidapi.com/news";

const headers = (language) => {
  return {
    method: "GET",
    headers: {
      "accept-language": language,
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": RAPID_API_KEY,
      "x-bingapis-sdk": "true",
    },
  };
};

//language from globalState
export const getNewsData = async (category, language) => {
  const response = await fetch(
    `${baseurl}?cc=${language}&safeSearch=Off&category=${category}&textFormat=Raw`,
    headers(language)
  );
  const body = await response.json();
  return body.value;
};

//get news from search free word
export const getSearchNewsData = async (query, language) => {
  query = encodeURIComponent(query);
  const response = await fetch(
    `${baseurl}/search?freshness=Day&textFormat=Raw&cc=us&count=20&safeSearch=Strict&q=${query}`,
    headers(language)
  );
  const body = await response.json();
  return body.value;
};

//get news from google trend/world

export const getTrendNews = async () => {
  const response = await fetch(
    "https://google-news1.p.rapidapi.com/topic-headlines?topic=technology&country=US&lang=en",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": RAPID_API_KEY,
        "x-rapidapi-host": "google-news1.p.rapidapi.com",
      },
    }
  );
  const body = await response.json();
  return body.articles;
};

export const formatDate = (s) =>
  new Date(s).toLocaleDateString(undefined, { dateStyle: "long" });
