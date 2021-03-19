import React from "react";
import { AppBar, Box, Toolbar } from "@material-ui/core";
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
          <Box pt={0.3} className={styles.title}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </Box>
          <Box className={styles.search}>
            <Link to="/search">
              <SearchIcon className={styles.icon} />
            </Link>
          </Box>
          <Menu />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
