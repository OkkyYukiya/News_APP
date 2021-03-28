import React, { useContext } from "react";
import { ButtonGroup, Button, Box } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Store } from "../../context/Store";
import styles from "./ButtonTab.module.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 3px",
    maxWidth: "500px",

    "& > *": {
      marginTop: theme.spacing(1),
    },
  },
  wrapper: {},
  link: {
    textDecoration: "none",
    color: "#002531",
    fontWeight: 600,
  },
}));

const ButtonTab = () => {
  const { globalState } = useContext(Store);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.wrapper}>
        <ButtonGroup
          className={styles.buttons}
          fullWidth
          color="default"
          variant="text"
          size="large"
        >
          <Button>
            <Link to="/" className={classes.link}>
              BIZ
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
          {globalState.language === "us" && (
            <Button>
              <Link to="/news-product" className={classes.link}>
                PROD
              </Link>
            </Button>
          )}
          {globalState.language === "ja" && (
            <Button>
              <Link to="/lifeStyle" className={classes.link}>
                life
              </Link>
            </Button>
          )}
          <Button>
            <Link to="/news-sports" className={classes.link}>
              Sports
            </Link>
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default ButtonTab;
