import React from "react";
import News from "../../components/News";
import ButtonTab from "../../components/ButtonTab";

const NewsWorld = () => {
  return (
    <React.Fragment>
      <ButtonTab />
      <News category="World" />
    </React.Fragment>
  );
};

export default NewsWorld;
