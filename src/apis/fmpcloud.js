import { FMP_CLOUD_API_KEY } from "./apiKeys";

const baseurl = "https://fmpcloud.io/api/v3/";

export const FMP_CLOUD_ENDPOINT = (symbol) => {
  const endpoint = `${baseurl}/quote/${symbol}?apikey=${FMP_CLOUD_API_KEY}`;
  return endpoint;
};

export const forexUrl = `https://fmpcloud.io/api/v3/quote/^DJI,^XNDX,^N225,^VIX?apikey=${FMP_CLOUD_API_KEY}`;
