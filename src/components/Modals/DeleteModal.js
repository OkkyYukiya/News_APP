import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { db } from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    color: "#054155",
    cursor: "pointer",
    "&:hover": {
      transition: "0.3s",
      color: "darkred",
    },
  },
});

const ModalSelector = ({ docId, uid }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    await db
      .collection("users")
      .doc(uid)
      .collection("clips")
      .doc(docId)
      .delete();
    setOpen(false);
  };

  return (
    <div>
      <DeleteForeverIcon className={classes.button} onClick={handleClickOpen} />
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Really delete this clip?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalSelector;
