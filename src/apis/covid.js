import { RAPID_API_KEY } from "../apis/apiKeys";

const baseUrl = "https://coronavirus-smartable.p.rapidapi.com/news/v1/US/";
const headers = {
  method: "GET",
  headers: {
    "x-rapidapi-key": RAPID_API_KEY,
    "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
  },
};

export const fetchCovid = async () => {
  const response = await fetch(baseUrl, headers);
  const body = await response.json();
  return body.news;
};
