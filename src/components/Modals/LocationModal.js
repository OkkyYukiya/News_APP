import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Store } from "../../context/Store";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
  loacionButton: {
    border: "1px solid #5a7881",
    color: "#5a7881",
    backgroundColor: "white",
  },
  currentSelected: {
    fontSize: 15,
  },
}));

const ModalSelector = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [language, setLauguage] = useState("");
  const history = useHistory();

  const handleChange = (event) => {
    try {
      setLauguage(event.target.value);
      setGlobalState({
        type: "SET_LANGUAGE",
        payload: { language: event.target.value },
      });
    } catch {}
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeLocation = () => {
    setOpen(false);
    history.push("/");
  };

  return (
    <div>
      <Button
        className={classes.loacionButton}
        fullWidth
        onClick={handleClickOpen}
      >
        Chose your location
      </Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          Chose your location
          <br />
          <span className={classes.currentSelected}>
            Current selected: {globalState.language === "us" ? "USA" : "JAPAN"}
          </span>
        </DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel id="select-label">Location</InputLabel>
              <Select
                labelId="select-label"
                id="select"
                value={language}
                onChange={handleChange}
                input={<Input />}
              >
                <MenuItem value={"ja"}>Japan</MenuItem>
                <MenuItem value={"us"}>USA</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleChangeLocation} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalSelector;
