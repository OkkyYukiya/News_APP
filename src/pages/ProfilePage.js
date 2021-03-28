import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../context/AuthProvider";
import { useHistory } from "react-router-dom";
import {
  Box,
  ButtonBase,
  Button,
  Paper,
  Typography,
  Avatar,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import LocationModal from "../components/Modals/LocationModal";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";

const ProfilePage = () => {
  const classes = useStyles();
  const { currentUser, logout, updateUsername } = useAuth();
  const [displayUsername, setDisplayUsername] = useState(false);
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUser = (e) => {
    setUsername(e.target.value);
  };

  const handleUpdateUsername = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateUsername(username);
    } catch {
      setErrorMessage("Faild to update your username");
    } finally {
      setSuccessMessage("Successfully changed username");
      setUsername("");
      setLoading(false);
    }
  };

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
              <Avatar style={{ height: 90, width: 90 }} />
            )}
            <AddAPhotoIcon className={classes.icon} fontSize="small" />
          </ButtonBase>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          p={2}
        >
          {/* uesrname and email "start"*/}
          <Box display="flex" flexWrap="wrap">
            <AccountCircleIcon className={classes.accountIcon} />
            <Typography variant="h6">{currentUser.displayName}</Typography>
          </Box>

          <Box display="flex" flexWrap="wrap">
            <MailIcon fontSize="small" />
            <Typography variant="body2">{currentUser.email}</Typography>
          </Box>
          {/* uesrname and email "end"*/}
        </Box>
      </Paper>

      {displayUsername && (
        <Box mt={3}>
          <form onSubmit={handleUpdateUsername}>
            <TextField
              variant="outlined"
              label="New Username"
              autoFocus
              fullWidth
              value={username}
              onChange={handleUser}
              className={classes.InputUsername}
            />

            {errorMessage && (
              <Box
                px={5}
                py={1}
                mt={1}
                style={{
                  backgroundColor: "rgb(255,0,0,0.4)",
                  color: "darkred",
                  borderRadius: 7,
                }}
              >
                <Typography>{errorMessage}</Typography>
              </Box>
            )}
            {successMessage && (
              <Box
                textAlign="center"
                px={5}
                py={1}
                mt={1}
                style={{
                  backgroundColor: "rgba(123, 239, 178, 0.5)",
                  color: "green",
                  borderRadius: 7,
                }}
              >
                <Typography>{successMessage}</Typography>
              </Box>
            )}
            <Box my={1} />
            <Button
              color="primary"
              variant="outlined"
              fullWidth
              disabled={!username}
              className={classes.updateButton}
              type="submit"
            >
              {loading ? (
                <CircularProgress size={24} thickness={3} />
              ) : (
                "update"
              )}
            </Button>
          </form>
        </Box>
      )}
      <Box my={3}>
        <Button
          onClick={() => setDisplayUsername(!displayUsername)}
          fullWidth
          className={classes.editButton}
        >
          {!displayUsername ? "Edit UserName" : "close"}
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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin: "30px auto",
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
    height: 90,
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
    // fontSize: 26,
    // marginRight: 4,
  },
  InputUsername: {
    backgroundColor: "white",
  },
  updateButton: {
    backgroundColor: "white",
    fontSize: 14,
    fontWeight: 600,
  },
}));
