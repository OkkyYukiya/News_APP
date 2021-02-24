import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 530,
    padding: "0px 3px",
    margin: "0 auto",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  link: {
    textDecoration: "none",
    color: "#002531",
  },
}));

const ButtonTab = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonGroup
        style={{ backgroundColor: "white" }}
        color="inherit"
        fullWidth
      >
        <Button>
          <Link to="/" className={classes.link}>
            BUSINESS
          </Link>
        </Button>
        <Button>
          <Link to="/news-technology" className={classes.link}>
            TECH
          </Link>
        </Button>
        <Button>
          <Link to="/news-politics" className={classes.link}>
            POLIT
          </Link>
        </Button>
        <Button>
          <Link to="/news-world" className={classes.link}>
            WORLD
          </Link>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonTab;
