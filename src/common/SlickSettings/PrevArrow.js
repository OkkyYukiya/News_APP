import React from "react";

export default function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        marginLeft: 30,
        zIndex: 100,
        color: "black",
      }}
      onClick={onClick}
    />
  );
}
