import React from "react";
import styles from "./HeaderMenu.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import LocalHospitalOutlinedIcon from "@material-ui/icons/LocalHospitalOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Box } from "@material-ui/core";
import AcitveAvatar from "../Versatility/ActiveAvatar";
import SettingsIcon from "@material-ui/icons/Settings";
import { useAuth } from "../../context/AuthProvider";

const useStyles = makeStyles({
  fullList: {
    width: "auto",
  },
  title: {
    color: "#7c7c7c",
    borderBottom: "2px solid #7c7c7c",
    width: 110,
    margin: "17px auto",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  icon: {
    color: "#144b5e",
  },
});

const DrawerMenu = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const MenuListItems = ({ symbol, title, subtitle }) => {
    return (
      <Box mt={0.5}>
        <List>
          <ListItem button>
            <ListItemIcon className={classes.ListItemIcon}>
              {symbol}
            </ListItemIcon>
            <ListItemText primary={title} secondary={subtitle} />
          </ListItem>
        </List>
      </Box>
    );
  };

  const OpenListItem = ({ anchor }) => {
    const { currentUser } = useAuth();
    return (
      <div
        className={clsx(styles.list, {
          [classes.fullList]: anchor === "top" || anchor === "bottom",
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <h3 className={classes.title}>MENU LIST</h3>
        <Link to="/" className={classes.link}>
          <MenuListItems symbol={<AssignmentIcon />} title="News Top" />
        </Link>
        <Link to="/stock" className={classes.link}>
          <MenuListItems symbol={<ShowChartIcon />} title="Stocks" />
        </Link>
        <Link to="/search" className={classes.link}>
          <MenuListItems symbol={<SearchIcon />} title="Search" />
        </Link>
        <Link to="/covid" className={classes.link}>
          <MenuListItems symbol={<LocalHospitalOutlinedIcon />} title="Covid" />
        </Link>
        <Divider />

        {!currentUser && (
          <Link to="/login" className={classes.link}>
            <MenuListItems symbol={<LockOpenIcon />} title="Login" />
          </Link>
        )}
        {currentUser && (
          <MenuListItems
            symbol={<AcitveAvatar photoURL={currentUser.photoURL} />}
            title={currentUser.displayName}
          />
        )}
        {currentUser && (
          <Link to="/profile" className={classes.link}>
            <MenuListItems symbol={<SettingsIcon />} title="Setting" />
          </Link>
        )}

        <Link to="/clip" className={classes.link}>
          <MenuListItems symbol={<AttachFileIcon />} title="Clip News" />
        </Link>
      </div>
    );
  };

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon color="inherit" fontSize="large" />
          <div />
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          <OpenListItem anchor={"left"} />
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default DrawerMenu;
