import React from "react";
import Paper from "@material-ui/core/Paper";
import styles from "./NewsItemLayout.module.scss";
import { Box } from "@material-ui/core";
import no_image from "../../assets/no-image.png";

const NewsItemLayout = ({
  url,
  description,
  name,
  image,
  provider_image,
  provider_name,
  datePublished,
  category,
}) => {
  const formatDate = (s) =>
    new Date(s).toLocaleDateString(undefined, { dateStyle: "long" });
  return (
    <Box className={styles.root} mt={0.5} pr={0.5} pl={0.5}>
      <Paper className={styles.wrapper} elevation={2}>
        <Box className={styles.container} p={1}>
          {/* title&desc&image, */}
          <Box pt={0.5} pb={0.5} className={styles.title_desc_image_area}>
            {/* title & desc */}
            <Box className={styles.title_desc_area}>
              <Box className={styles.title_name}>
                <h2>
                  <a href={url}>{name}</a>
                </h2>
              </Box>
              <Box mt={0.5} className={styles.description_box}>
                <p className={styles.description}>{description}</p>
              </Box>
            </Box>
            {/* title & desc */}

            <Box ml={0.7} className={styles.image_box}>
              <img src={image ? image : no_image} alt="" />
            </Box>
          </Box>
          {/* title&desc&image, */}
          <Box className={styles.provider}>
            <span className={styles.provider_name_and_image}>
              <img
                className={styles.provider_image}
                src={provider_image}
                alt=""
              />
              <span className={styles.provider_name}>{provider_name}</span>
            </span>
            <span className={styles.date}>{formatDate(datePublished)}</span>
            <span className={styles.category}>{category}</span>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default NewsItemLayout;
