import React from "react";
import News from "../containers/News/News";

const NewsPage = ({ category }) => {
  return (
    <React.Fragment>
      <News category={category} />
    </React.Fragment>
  );
};

export default NewsPage;
