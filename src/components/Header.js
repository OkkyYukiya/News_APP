import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Menu from "./Menu";
import logo from "../assets/logo-news.png";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

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
  toolbar: {},
  icon: {
    textDecoration: "none",
    color: "black",
    paddingTop: 9,
  },
  search: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">
              <img src={logo} alt="" style={{ height: 30, paddingTop: 10 }} />
            </Link>
          </Typography>
          <div className={classes.search}>
            <Link to="/search">
              <SearchIcon fontSize="large" className={classes.icon} />
            </Link>
          </div>
          <Menu />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
