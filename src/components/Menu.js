import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ForumIcon from "@material-ui/icons/Forum";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  list: {
    width: 230,
    textAlign: "center",
  },
  fullList: {
    width: "auto",
  },
  title: {
    color: "#7c7c7c",
    borderBottom: "2px solid #7c7c7c",
    width: 110,
    margin: "17px auto",
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

  const MenuListItems = ({ symbol, title, subtitle, path }) => {
    return (
      <List style={{ marginTop: 10 }}>
        <Link to={path} style={{ textDecoration: "none", color: "black" }}>
          <ListItem button>
            <ListItemIcon>{symbol}</ListItemIcon>
            <ListItemText primary={title} secondary={subtitle} />
          </ListItem>
        </Link>
      </List>
    );
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h3 className={classes.title}>MENU LIST</h3>
      <MenuListItems symbol={<AssignmentIcon />} title="News Top" path={"/"} />
      <MenuListItems symbol={<ForumIcon />} title="Open Chat" />
      <MenuListItems
        symbol={<ShowChartIcon />}
        title="Stocks"
        path={"/stocks"}
      />
      <MenuListItems symbol={<ContactSupportIcon />} title="Support" />
      <MenuListItems symbol={<ExitToAppIcon />} title="Signin" />
    </div>
  );

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
          {list("left")}
          <Divider />
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default DrawerMenu;
