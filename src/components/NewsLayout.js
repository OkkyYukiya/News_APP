import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "0px 4px",
  },
}));

// Gridが良いかも、Layoutは全体をラップするものがイメージされる
const NewsLayout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} direction="column" alignItems="center">
        {props.children}
      </Grid>
    </div>
  );
};

export default NewsLayout;
