import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Menu from "../HeaderMenu/HeaderMenu";
import logo from "../../assets/logo-news.png";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.root}>
      <AppBar color="inherit" position="static">
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6" className={styles.title}>
            <Link to="/">
              <img src={logo} alt="" style={{ height: 30, paddingTop: 10 }} />
            </Link>
          </Typography>
          <div className={styles.search}>
            <Link to="/search">
              <SearchIcon className={styles.icon} />
            </Link>
          </div>
          <Menu />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
