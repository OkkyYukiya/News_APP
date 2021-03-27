import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../Store/AuthProvider";
// import { storage } from "../firebase";
import {
  Box,
  ButtonBase,
  Button,
  Paper,
  Typography,
  Avatar,
} from "@material-ui/core";
import LocationModal from "../components/Modals/LocationModal";
import { useHistory } from "react-router-dom";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin: "auto auto",
    padding: "0 2px",
  },
  paper: {
    display: "flex",
    justifyContent: "space-around",
    width: 370,
  },
  image: {
    borderRadius: "999px",
    position: "relative",
    height: 100,
  },
  icon: {
    position: "absolute",
    bottom: 0,
    right: 10,
    color: "black",
  },
  logoutButton: {
    backgroundColor: "#5a7881",
    color: "white",
  },
  editButton: {
    border: "1px solid #5a7881",
    color: "#5a7881",
    backgroundColor: "white",
  },
  accountIcon: {
    fontSize: 26,
    marginRight: 4,
  },
}));

const ProfilePage = () => {
  const classes = useStyles();
  const { currentUser, logout } = useAuth();
  // const [avatarImage, setAvatarImage] = useState(null);
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/login");
    } catch {
      console.log("logout error");
    }
  };
  return (
    <Box className={classes.root}>
      <Paper elevation={2} className={classes.paper}>
        <Box p={1} display="flex" justifyContent="center">
          <ButtonBase>
            {currentUser.photoURL ? (
              <img
                className={classes.image}
                src={currentUser.photoURL}
                alt=""
              />
            ) : (
              <Avatar style={{ height: 100, width: 100 }} />
            )}
            <AddAPhotoIcon className={classes.icon} fontSize="small" />
          </ButtonBase>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          p={2}
        >
          <Typography variant="h6">
            <Box display="flex">
              <AccountCircleIcon className={classes.accountIcon} />
              {currentUser.displayName}
            </Box>
          </Typography>

          <Typography variant="body2">{currentUser.email}</Typography>
        </Box>
      </Paper>
      <Box my={4}>
        <Button fullWidth className={classes.editButton}>
          Edit Profile
        </Button>
      </Box>
      <Box my={4}>
        <LocationModal />
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          onClick={handleLogout}
          fullWidth
          className={classes.logoutButton}
        >
          LOGOUT
        </Button>
      </Box>
    </Box>
  );
};

export default ProfilePage;
