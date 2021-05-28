import React from "react";
import styles from "./Home.module.scss";
import News from "../containers/News";
import SlideNews from "../containers/SlideNews";
import HomeChart from "../containers/HomeChart";
import Forex from "../containers/Forex";
import { Box } from "@material-ui/core";

const NewsPage = () => {
  return (
    <React.Fragment>
      <Forex />
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
    </React.Fragment>
  );
};

export default NewsPage;
