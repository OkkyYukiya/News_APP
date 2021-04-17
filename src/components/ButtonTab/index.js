import React, { useContext } from "react";
import { ButtonGroup, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { Store } from "../../context/Store";
import styles from "./ButtonTab.module.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",

    padding: "0px 3px",
    maxWidth: 700,

    "& > *": {
      marginTop: theme.spacing(1),
    },
  },

  link: {
    textDecoration: "none",
    color: "#002531",
    fontWeight: 600,
  },
}));

const ButtonTab = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonGroup
        className={styles.buttons}
        fullWidth
        color="default"
        variant="text"
        size="large"
      >
        <Button
          onClick={() =>
            setGlobalState({
              type: "SET_CATEGORY",
              payload: { category: "business" },
            })
          }
        >
          BIZ
        </Button>
        <Button
          onClick={() =>
            setGlobalState({
              type: "SET_CATEGORY",
              payload: { category: "technology" },
            })
          }
        >
          TECH
        </Button>
        <Button
          onClick={() =>
            setGlobalState({
              type: "SET_CATEGORY",
              payload: { category: "politics" },
            })
          }
        >
          POLIT
        </Button>
        <Button
          onClick={() =>
            setGlobalState({
              type: "SET_CATEGORY",
              payload: { category: "world" },
            })
          }
        >
          WORLD
        </Button>
        {globalState.language === "us" && (
          <Button
            onClick={() =>
              setGlobalState({
                type: "SET_CATEGORY",
                payload: { category: "products" },
              })
            }
          >
            PROD
          </Button>
        )}

        <Button
          onClick={() =>
            setGlobalState({
              type: "SET_CATEGORY",
              payload: { category: "sports" },
            })
          }
        >
          Sports
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonTab;
