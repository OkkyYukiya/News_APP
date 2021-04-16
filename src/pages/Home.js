import React from "react";
import styles from "./Home.module.scss";
import News from "../containers/News";
import { Box } from "@material-ui/core";
import SlideNews from "../containers/SlideNews";
import HomeChart from "../containers/HomeChart";

const NewsPage = () => {
  return (
    <Box
      className={styles.root}
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
    >
      <HomeChart />
      <Box
        className={styles.right_content}
        display="flex"
        flexDirection="column"
      >
        <SlideNews />
        <News />
      </Box>
    </Box>
  );
};

export default NewsPage;
