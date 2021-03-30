import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import styles from "./NewsItemLayout.module.scss";
import { Box } from "@material-ui/core";
import no_image from "../../assets/no-image.png";
import { Link } from "react-router-dom";
import { formatDate } from "../../apis/rapidApi";
import { Store } from "../../context/Store";

const NewsItemLayout = ({
  url,
  description,
  name,
  image,
  providerImage,
  providerName,
  datePublished,
  category,
}) => {
  const { globalState } = useContext(Store);

  return (
    <Box className={styles.root} mt={0.5} pr={0.5} pl={0.5}>
      <Link
        className={styles.link}
        to={{
          pathname: "watch",
          state: {
            name: name,
            url: url,
            description: description,
            image: image,
            providerImage: providerImage,
            providerName: providerName,
            datePublished: datePublished,
            category: category,
          },
        }}
      >
        <Paper className={styles.wrapper} elevation={2}>
          <Box className={styles.container} p={1}>
            {/* title&desc&image, */}
            <Box pt={0.5} pb={0.5} className={styles.title_desc_image_area}>
              {/* title & desc */}
              <Box className={styles.title_desc_area}>
                <Box className={styles.title_name}>
                  <h2
                    className={
                      globalState.language === "us" ? styles.us : styles.ja
                    }
                  >
                    {name}
                  </h2>
                </Box>
                <Box mt={0.5} className={styles.description_box}>
                  <p
                    className={
                      globalState.language === "us"
                        ? styles.d__us
                        : styles.d__ja
                    }
                  >
                    {description}
                  </p>
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
                  src={providerImage}
                  alt=""
                />
                <span className={styles.provider_name}>{providerName}</span>
              </span>
              <span className={styles.date}>{formatDate(datePublished)}</span>
              <span className={styles.category}>{category}</span>
            </Box>
          </Box>
        </Paper>
      </Link>
    </Box>
  );
};

export default NewsItemLayout;
