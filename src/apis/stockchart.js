import { MARKETSTACK_API_KEY } from "./apiKeys";
//endpoint
export const URL = "https://api.marketstack.com/v1/eod";
const URL_TICK = "https://api.marketstack.com/v1/tickers";

export const options = {
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
    yAxes: [{}],
  },
};
////////addjustment date
const date = new Date();
const year = date.getFullYear();
const getDay = date.getDate().toString();
const getMonth = date.getMonth() + 1;
const toStringMonth = getMonth.toString();
// const getLastMonth = date.getMonth() - 1;

const adjustmentDate = (d) => {
  if (d.length === 1) {
    let adjustment = "0" + d;
    return adjustment;
  } else {
    return d;
  }
};

const Month = `${year}-${adjustmentDate(toStringMonth)}-${adjustmentDate(
  getDay
)}`;
// const lastMonth = `${year}-${adjustmentDate(getLastMonth)}-${adjustmentDate(
//   lastManthDay
// )}`;

//addjustment price
export const adjPrice = (price) => {
  return Math.round(price * 100) / 100;
};

//get company naem
export const NAME_URL = (symbol) => {
  return `${URL_TICK}/${symbol}?access_key=${MARKETSTACK_API_KEY}`;
};
//get prices
export const PRICE_URL = (symbol) => {
  return `${URL_TICK}/${symbol}/eod/latest?access_key=${MARKETSTACK_API_KEY}`;
};

//chart
export const chartendpoint = (symbol) => {
  return `${URL}?access_key=${MARKETSTACK_API_KEY}&symbols=${symbol}&date_from=2021-03-01&date_to=${Month}&sort=ASC`;
};
