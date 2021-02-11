import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import ChatIcon from "@material-ui/icons/Chat";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import DescriptionIcon from "@material-ui/icons/Description";

const useStyles = makeStyles({
  root: {
    width: 500,
    margin: "0 auto",
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("news");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="News"
        value="news"
        icon={<DescriptionIcon color="action" />}
      />
      <BottomNavigationAction
        label="Chat"
        value="chat"
        icon={<ChatIcon color="action" />}
      />
      <BottomNavigationAction
        label="Stocks"
        value="stocks"
        icon={<ShowChartIcon />}
      />
      <BottomNavigationAction
        label="Folder"
        value="folder"
        icon={<FolderIcon />}
      />
    </BottomNavigation>
  );
}
