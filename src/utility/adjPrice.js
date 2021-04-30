export const adjPrice = (price) => {
  return Math.round(price * 100) / 100;
};

export const changeSymbol = (symbol) => {
  let str = symbol.split("");
  if (str[0] === "^") {
    str.shift();
    return str.join("");
  } else {
    return str.join("");
  }
};
