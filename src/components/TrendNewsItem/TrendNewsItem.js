import React from "react";
import { Paper, Grid, Button, Box, Typography } from "@material-ui/core";
import { formatDate } from "../../apis/rapidApi";
import styles from "./TrendNewsItem.module.scss";

const TrendNewsItem = ({ title, date, link, sourceTitle }) => {
  return (
    <Grid className={styles.root} item xs={12}>
      <Paper className={styles.paper}>
        <Box className={styles.wrapper} p={2}>
          <Box mb={1} className={styles.title}>
            <Typography variant="subtitle1">{title}</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="flex-end"
            justifyContent="space-between"
            className={styles.sub}
          >
            <Box display="flex" alignItems="flex-end">
              <Typography variant="body2">{formatDate(date)}</Typography>
              <Box ml={1} />
              <Typography variant="body2">-{sourceTitle}</Typography>
            </Box>
            <Button variant="contained" className={styles.btn}>
              <a className={styles.link} href={link}>
                MORE
              </a>
            </Button>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TrendNewsItem;
