import React, { useState } from "react";
import styles from "./NewsDetail.module.scss";
import { useAuth } from "../../Store/AuthProvider";
import { useLocation, useHistory } from "react-router-dom";
import firebase from "firebase/app";
import { db } from "../../firebase";
import { Card, Button, Box, Avatar, Typography } from "@material-ui/core";
import { formatDate } from "../../apis/rapidApi";
import { OandaAd } from "../../apis/Adsense/adsense";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import sm_no_logo from "../../assets/smollno-image.png";

const Watch = () => {
  const { currentUser } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const details = location.state;
  const back = () => {
    history.goBack();
  };
  const [toggle, setToggle] = useState(false);

  const addNewsData = async () => {
    setToggle(!toggle);
    await db
      .collection("users")
      .doc(currentUser.uid)
      .collection("clips")
      .add({
        name: details.name,
        url: details.url,
        description: details.description,
        image: details.image ? details.image : null,
        providerImage: details.providerImage ? details.providerImage : null,
        providerName: details.providerName,
        datePublished: details.datePublished,
        category: details.category,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
  };

  return (
    <React.Fragment>
      <Card className={styles.root}>
        <Box className={styles.wrapper} p={1}>
          <Box
            className={styles.header}
            display="flex"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Box className={styles.provider} display="flex" alignItems="center">
              <Avatar className={styles.avatar}>
                <img
                  src={
                    details.providerImage ? details.providerImage : sm_no_logo
                  }
                  alt=""
                />
              </Avatar>
              <p>-{details.providerName}</p>
            </Box>
            <Box className={styles.date_and_category}>
              <i>{details.category}</i>
              <i>{formatDate(details.datePublished)}</i>
              {currentUser && (
                <BookmarkIcon
                  className={!toggle ? styles.bmicon : styles.active_bmicon}
                  fontSize="large"
                  onClick={addNewsData}
                />
              )}
            </Box>
          </Box>
          <Box className={styles.title} my={1} py={0.8}>
            <h2>{details.name}</h2>
          </Box>
          <Box
            my={2}
            className={styles.desc_and_img}
            display="flex"
            alignItems="flex-start"
          >
            <img
              style={{ height: 100, width: 120 }}
              src={details.image}
              alt=""
            />
            <Box ml={1}>
              <Typography variant="h6">{details.description}...</Typography>
            </Box>
          </Box>
          <Box
            className={styles.more_button_box}
            display="flex"
            justifyContent="center"
          >
            <Button className={styles.more_button} fullWidth>
              <a href={details.url}>Get More Information</a>
            </Button>
          </Box>
          <Box mt={1} display="flex" justifyContent="lefr">
            <Button
              className={styles.back_button}
              onClick={back}
              variant="outlined"
            >
              back
            </Button>
          </Box>
        </Box>
        <Box
          className={styles.addBox}
          mb={1}
          display="flex"
          flexDirection="column"
        >
          <OandaAd />
        </Box>
      </Card>
    </React.Fragment>
  );
};

export default Watch;
