import React from "react";

export default function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        marginRight: 30,
      }}
      onClick={onClick}
    />
  );
}
