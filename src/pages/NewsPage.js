import React from "react";
import News from "../../components/News";
import ButtonTab from "../../components/ButtonTab";

const NewsPage = ({ category }) => {
  return (
    <React.Fragment>
      <ButtonTab />
      <News category={category} />
    </React.Fragment>
  );
};

export default NewsPage;
