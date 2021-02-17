import React from "react";
import "./CardMediaLayout.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import noImage from "../assets/no-image.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 340,
    marginBottom: 3,
    margin: "0 auto",
  },
  media: {
    height: 160,
    width: 250,
    margin: "8px auto 0px auto",
    borderRadius: 16,
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MediaCard;
