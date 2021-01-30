import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1.5),
    maxWidth: 600,
    margin: "0 auto",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  image: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    textAlign: "center",
  },
  img: {
    borderRadius: 6,
    width: 90,
    height: 80,
  },
  newsContainer: {
    paddingLeft: 12,
  },
  newsInfo: {
    maxLength: 100,
    wordWrap: "break-word",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
}));

const NewsLayout = (props) => {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={5} className={classes.paper}>
        <Grid
          className={classes.container}
          container
          justify="flex-start"
          alignItems="center"
          spacing={2}
        >
          {/* first container */}
          <Paper className={classes.image}>
            <img src={props.image} alt="" className={classes.img} />
          </Paper>
          {/* second container */}
          <Grid className={classes.newsContainer}>
            <a className={classes.link} href={props.url}>
              <Typography variant="subtitle1"></Typography>
              <Typography variant="body2" className={classes.newsInfo}>
                {props.title}
              </Typography>
            </a>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default NewsLayout;
