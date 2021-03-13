import React from "react";
import NewsDetail from "../components/NewsDetail/NewsDetail";
import TrendNews from "../containers/TrendNews/TrendNews";
import { Box } from "@material-ui/core";

const WatchPage = () => {
  return (
    <Box>
      <NewsDetail />
      <TrendNews />
    </Box>
  );
};

export default WatchPage;
