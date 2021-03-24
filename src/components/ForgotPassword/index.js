import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import SendIcon from "@material-ui/icons/Send";
import { Box, TextField, Typography } from "@material-ui/core";
import { useAuth } from "../../Store/AuthProvider";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
  forgotPasswordButton: {
    color: "blue",
    backgroundColor: "white",
  },
  email: {
    width: 320,
  },
  openedButton: {
    color: "#5a7881",
  },
}));

const ModalSelector = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const { resetPassword } = useAuth();

  const handleSendPassword = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
    } catch {
      setMessage("Failed to reset password");
    } finally {
      setMessage("Please check your email inbox");
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <span className={classes.forgotPasswordButton} onClick={handleClickOpen}>
        Forgot Password?
      </span>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Forgot Password?</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <TextField
              className={classes.email}
              variant="outlined"
              fullWidth
              type="text"
              autoFocus
              label="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
        </DialogContent>
        {message && (
          <Box p={1} textAlign="center">
            <Typography style={{ color: "darkgreen" }} variant="body1">
              {message}
            </Typography>
          </Box>
        )}
        <DialogActions>
          <Button onClick={handleClose} className={classes.openedButton}>
            close
          </Button>
          <Button onClick={handleSendPassword} className={classes.openedButton}>
            <SendIcon fontSize="small" style={{ marginRight: 2 }} />
            send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalSelector;
