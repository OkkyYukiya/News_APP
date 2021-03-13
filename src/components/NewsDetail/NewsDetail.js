import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Card, Button, Box, Avatar, Typography } from "@material-ui/core";
import { formatDate } from "../../apis/rapidApi";
import styles from "./NewsDetail.module.scss";
import sm_no_logo from "../../assets/smollno-image.png";
import { OandaAd } from "../../apis/Adsense/adsense";

const Watch = () => {
  const location = useLocation();
  const history = useHistory();
  const details = location.state;
  const back = () => {
    history.goBack();
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
                    details.provider_image ? details.provider_image : sm_no_logo
                  }
                  alt=""
                />
              </Avatar>
              <p>-{details.provider_name}</p>
            </Box>
            <Box className={styles.date_and_category}>
              <i>{details.category}</i>
              <i>{formatDate(details.datePublished)}</i>
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
            <img src={details.image} alt="" />
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
