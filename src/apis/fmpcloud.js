import { FMP_CLOUD_API_KEY } from './apiKeys'

const baseurl = 'https://fmpcloud.io/api/v3/'

export const FMP_CLOUD_ENDPOINT = (symbol) => {
  const endpoint = `${baseurl}/quote/${symbol}?apikey=${FMP_CLOUD_API_KEY}`
  return endpoint
}

export const forexUrl = `https://fmpcloud.io/api/v3/quote/^DJI,^XNDX,^N225,^VIX?apikey=${FMP_CLOUD_API_KEY}`

export const HomeChartURL = () => {
  const symbols = 'AAPL,TSLA,GOOGL,AMZN,MSFT'
  const date = new Date()
  const getDate = date.toLocaleDateString()
  const toArrayDate = getDate.split('/')

  const url = `https://fmpcloud.io/api/v3/historical-price-full/${symbols}?from=${
    toArrayDate[2]
  }-04-15&to=${toArrayDate[2]}-${toArrayDate[0]}-${
    toArrayDate[1] - 1
  }&apikey=${FMP_CLOUD_API_KEY}`

  return url
}

export const CHARTURL = (symbol) => {
  return `https://fmpcloud.io/api/v3/historical-price-full/${symbol}?from=2021-04-02&to=2021-06-2&apikey=${FMP_CLOUD_API_KEY}`
}
