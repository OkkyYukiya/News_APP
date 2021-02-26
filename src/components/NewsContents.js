import React from "react";
import "./News.css";
import { Paper, Grid } from "@material-ui/core";
import no_image from "../assets/no-image.png";


//news Contents
// NewsItemとかの方が一つの要素な感じがする
const NewsContents = (props) => {
  const classes = useStyles();

  const formatDate = (s) =>
    new Date(s).toLocaleDateString(undefined, { dateStyle: "long" });

  return (
    <Grid item xs={12} sm={12}>
      <Paper className={classes.paper}>
        <div className={classes.image_container}>
          <img
            className={classes.image}
            src={props.image ? props.image : no_image}
            alt=""
          />
        </div>
        <div className={classes.newsInfo}>
          <p style={{ color: "black" }} className="headline">
            {props.headline}
          </p>
          <p style={{ fontSize: 12, color: "#3d3d3d" }} className="description">
            {props.description}
          </p>
          <div className={classes.newsInfoUnder}>
            <a className={classes.url} href={props.url}>
              MORE
            </a>
            <span className={classes.provider}>{props.provider}</span>
            <span className={classes.datePublished}>
              {formatDate(props.datePublished)}
            </span>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default NewsContents;