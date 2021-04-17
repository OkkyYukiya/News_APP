import React from "react";
import styles from "./SlideNewsItem.module.scss";
import { formatDate } from "../../apis/rapidApi";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, CardActionArea, Typography } from "@material-ui/core";

const CardItem = ({
  title,
  image,
  abstract,
  date,
  thumbnailStandard,
  url,
  category,
}) => {
  const useStyles = makeStyles({
    media: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)),url(${image})`,
      height: 300,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      maxWidth: 700,
    },
  });

  const classes = useStyles();
  return (
    <Paper className={styles.root}>
      <Link
        className={styles.link}
        to={{
          pathname: "watch",
          state: {
            name: title,
            image: thumbnailStandard,
            description: abstract,
            url: url,
            category: category,
            datePublished: date,
          },
        }}
      >
        <CardActionArea className={classes.media}>
          <Typography
            className={styles.title}
            gutterBottom
            variant="h4"
            component="h2"
          >
            {title}
          </Typography>
          <Typography className={styles.date} variant="h6">
            {formatDate(date)}
          </Typography>
        </CardActionArea>
      </Link>
    </Paper>
  );
};

export default CardItem;
