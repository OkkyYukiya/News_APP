import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Menu from "./Menu";
import logo from "../assets/logo-news.png";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={logo} alt="" style={{ height: 30, paddingTop: 10 }} />
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <SearchIcon />
            <label style={{ fontSize: 8 }}>SEARCH</label>
          </div>
          <Menu />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
