import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../context/AuthProvider";
import { useHistory } from "react-router-dom";
import { storage, db } from "../firebase";
import {
  Box,
  ButtonBase,
  Button,
  Paper,
  Typography,
  Avatar,
  TextField,
  CircularProgress,
  IconButton,
} from "@material-ui/core";
import LocationModal from "../components/Modals/LocationModal";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import EditIcon from "@material-ui/icons/Edit";
import Message from "../common/Message";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CloseIcon from "@material-ui/icons/Close";
import { generateUrl } from "../utility/urlGenerater";

const ProfileInfo = ({ info, icon, size }) => {
  return (
    <Box display="flex" alignItems="center" flexWrap="wrap">
      {icon}
      <Typography variant={size}>{info}</Typography>
    </Box>
  );
};

const ProfilePage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { currentUser, logout, updateUsername, updateAvatarImage } = useAuth();
  const [username, setUsername] = useState(currentUser.displayName);
  const [displayUsername, setDisplayUsername] = useState(false);
  const [avatarImage, setAvatarImage] = useState(null);
  const [displayImage, setDisplayImage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [countClips, setCountClips] = useState(null);

  //change username logic
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
      setTimeout(() => {
        setDisplayUsername(false);
        setSuccessMessage(null);
      }, 5000);
    }
  };

  //change avatar image logic
  const onChangeImageHandler = (e) => {
    if (e.target.files[0]) {
      setAvatarImage(e.target.files[0]);
      e.target.value = "";
    }
  };

  const changeAvatarImage = async () => {
    let url = "";
    if (avatarImage) {
      const fileName = generateUrl(avatarImage);
      await storage.ref(`avatars/${fileName}`).put(avatarImage);
      url = await storage.ref("avatars").child(fileName).getDownloadURL();
    }

    await updateAvatarImage(url);
    window.location.reload();
  };

  //logout
  const handleLogout = async () => {
    try {
      await logout();
      history.push("/login");
    } catch {
      console.log("logout error");
    }
  };

  useEffect(() => {
    const getClip = async () => {
      const USER_ID = currentUser.uid;
      const docRef = db.collection("users").doc(USER_ID).collection("clips");
      const body = await docRef.get();
      const size = body.size;
      setCountClips(size);
    };
    getClip();
    // eslint-disable-next-line
  }, []);
  return (
    <Box className={classes.root}>
      <Paper elevation={2} className={classes.paper}>
        <Box p={1} display="flex" justifyContent="center">
          <ButtonBase onClick={() => setDisplayImage(!displayImage)}>
            {currentUser.photoURL ? (
              <Avatar
                className={classes.avatarLarge}
                src={currentUser.photoURL}
              />
            ) : (
              <Avatar style={{ height: 90, width: 90 }} />
            )}
          </ButtonBase>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="flex-start"
          p={2}
        >
          {/* uesrname and email "start"*/}
          <ProfileInfo
            icon={<AccountCircleIcon fontSize="small" />}
            info={currentUser.displayName}
            size="h6"
          />
          <ProfileInfo
            icon={<MailIcon fontSize="small" />}
            info={currentUser.email}
            size="body2"
          />
          <ProfileInfo
            icon={<AttachFileIcon fontSize="small" />}
            info={
              <Button
                onClick={() => history.push("/clip")}
                style={{ padding: 0 }}
              >
                Clip News {countClips}
              </Button>
            }
            size="body2"
          />
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
              <Message
                backgroundColor="rgb(255,0,0,0.4)"
                color="darkred"
                message={errorMessage}
              />
            )}
            {successMessage && (
              <Message
                backgroundColor="rgba(123, 239, 178, 0.5)"
                color="green"
                message={successMessage}
              />
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
          {!displayUsername ? (
            <>
              <EditIcon style={{ marginRight: 4 }} />
              Edit displayName
            </>
          ) : (
            <>
              <CloseIcon />
              close
            </>
          )}
        </Button>
      </Box>
      {displayImage && (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mb={2}
          textAlign="center"
        >
          <IconButton type="submit">
            <label>
              <Avatar className={classes.avatarMideum}>
                <AddPhotoAlternateIcon
                  className={avatarImage ? classes.addImage : ""}
                  fontSize="large"
                />
                <input
                  onChange={onChangeImageHandler}
                  className={classes.inputImage}
                  type="file"
                />
              </Avatar>
            </label>
          </IconButton>
          {avatarImage && (
            <Typography style={{ color: "green" }} variant="body2">
              ✔︎Added your image
            </Typography>
          )}
          <Button
            style={{ marginTop: 8 }}
            disabled={!avatarImage}
            variant="outlined"
            color="primary"
            onClick={changeAvatarImage}
          >
            update
          </Button>
        </Box>
      )}
      <Box>
        <Button
          onClick={() => setDisplayImage(!displayImage)}
          className={classes.editButton}
          fullWidth
        >
          {!displayImage ? (
            <AddPhotoAlternateIcon style={{ marginRight: 4 }} />
          ) : (
            <CloseIcon />
          )}
          {!displayImage ? "update avatar image" : "close"}
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

//styles
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin: "30px auto",
    padding: "16px 4px",
    backgroundColor: "white",
  },
  paper: {
    display: "flex",
    justifyContent: "space-around",
    width: 370,
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
  InputUsername: {
    backgroundColor: "white",
  },
  updateButton: {
    backgroundColor: "white",
    fontSize: 14,
    fontWeight: 600,
  },
  inputImage: {
    textAlign: "center",
    display: "none",
  },
  addImage: {
    color: "darkgreen",
  },
  avatarLarge: {
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  avatarMideum: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));
