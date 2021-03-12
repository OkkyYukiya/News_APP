import React from "react";
import News from "../containers/News/News";
import { OandaAd } from "../apis/Adsense/adsense";

const NewsPage = ({ category }) => {
  return (
    <React.Fragment>
      <News category={category} />
    </React.Fragment>
  );
};

export default NewsPage;
