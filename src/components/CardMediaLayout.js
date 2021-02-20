import React from "react";
import "./CardMediaLayout.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import noImage from "../assets/no-image.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 340,
    marginBottom: 3,
    margin: "0 auto",
    position: "relative",
  },
  media: {
    height: 160,
    width: 250,
    margin: "8px auto 0px auto",
    borderRadius: 16,
  },
  sources: {
    position: "absolute",
    bottom: 6,
    left: 15,
    fontSize: 13,
    color: "#666666",
  },
  sourceName: {
    paddingLeft: 13,
  },
});

const MediaCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href={props.url}>
        <CardMedia
          component="img"
          className={classes.media}
          image={props.image ? props.image : noImage}
          //CardNews compでurlToImageがnullでとき、noimageを返す
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h4">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
          <span className={classes.sources}>
            {props.category.toUpperCase()}
            <span className={classes.sourceName}>{props.source}</span>
          </span>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MediaCard;
