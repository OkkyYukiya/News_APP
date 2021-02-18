import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
    textAlign: "center",
    margin: "7px auto -6px auto",
    borderRadius: 21,
  },
});

const TextTmplate = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography style={{ padding: "2px 6px" }} variant="h4" gutterBottom>
        {props.title}
      </Typography>
    </div>
  );
};

export default TextTmplate;
