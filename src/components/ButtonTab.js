import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import "./ButtonTab.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    maxWidth: 700,
    margin: "0 auto",
    "& > *": {
      marginTop: theme.spacing(0.2),
      marginBottom: theme.spacing(0.3),
    },
  },
}));

const ButtonTab = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        size="medium"
        color="default"
        fullWidth={true}
        // aria-label="outlined primary button group"
      >
        <Button onClick={props.clickBusiness}>business</Button>
        <Button onClick={props.clickTechnology}>tech</Button>
        <Button onClick={props.clickScience}>science</Button>
        <Button onClick={props.clickGeneral}>general</Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonTab;
