import { MARKETSTACK_API_KEY } from "./apiKeys";

const BASEURL = "https://api.marketstack.com/v1";
const params = {
  eod: "/eod/latest",
  access_key: `?access_key=${MARKETSTACK_API_KEY}`,
  symbols: "&symbols=DJI.INDX,NDX.INDX,AAPL,TSLA,GOOGL",
};

const url = `${BASEURL}${params.eod}${params.access_key}${params.symbols}`;

//for containers/StockGrid
export const fetchPrice = async () => {
  const response = await fetch(url);
  const body = await response.json();
  return body.data;
};

export const adjPrice = (price) => {
  return Math.round(price * 100) / 100;
};
