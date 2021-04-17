import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import Message from "../../common/Message";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, TextField, CircularProgress } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  InputUsername: {
    backgroundColor: "white",
  },
  editButton: {
    border: "1px solid #5a7881",
    color: "#5a7881",
    backgroundColor: "white",
  },
  updateButton: {
    backgroundColor: "white",
    fontSize: 14,
    fontWeight: 600,
  },
}));

const EditDisplayname = () => {
  const { currentUser, updateUsername } = useAuth();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(currentUser.displayName);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [displayUsername, setDisplayUsername] = useState(false);
  const classes = useStyles();

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

  useEffect(() => {}, [currentUser.displayName]);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default EditDisplayname;
