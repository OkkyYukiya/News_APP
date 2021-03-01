import React from "react";

const List = (props) => {
  return (
    <li className={styles.content}>
      {props.symbol} {props.price} <br />
      <span className={props.vsy < 0 ? styles.red : styles.green}>
        {props.vsy > 0 ? "+" : ""}
        {props.vsy}%
      </span>
    </li>
  );
};

export default List;
