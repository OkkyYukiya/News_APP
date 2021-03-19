import React, { useState } from "react";
import styles from "./Auth.module.scss";
import {
  Paper,
  TextField,
  Avatar,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Google_logo from "../../assets/google-logo.png";
import { auth, provider } from "../../firebase";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../Store/AuthProvider";
import LoadingCircle from "../../components/Atoms/CircularProgress";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const history = useHistory();

  const signInGoogle = async () => {
    await auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConf) {
      return setError("Passwords do not match");
    }
    if (!username) {
      return setError("need to enter the username");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      history.push("/clip");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <div className={styles.root}>
      <Paper className={styles.container} elevation={4}>
        <div className={styles.wrapper}>
          <Avatar className={styles.icon_wrapper}>
            <LockOpenIcon className={styles.icon} fontSize="large" />
          </Avatar>
          <Typography variant="h5">
            <Box fontWeight="fontWeightBold" pt={1}>
              Sing Up
            </Box>
          </Typography>
          {error && (
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
              <Typography>{error}</Typography>
            </Box>
          )}
          <Box my={1} />
          <form onSubmit={handleSubmit}>
            <TextField
              className={styles.input_field}
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              label="User Name"
              fullWidth
              required
            />
            <Box my={2} />
            <TextField
              className={styles.input_field}
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              label="E-mail"
              fullWidth
              required
            />
            <Box my={2} />
            <TextField
              className={styles.input_field}
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              label="Password"
              fullWidth
              required
            />
            <Box my={2} />
            <TextField
              className={styles.input_field}
              variant="outlined"
              value={passwordConf}
              onChange={(e) => setPasswordConf(e.target.value)}
              type="password"
              label="password-confirm"
              fullWidth
              required
            />
            <Box my={2} />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className={styles.button}
            >
              {!loading && "Sing Up"}
              {loading && <LoadingCircle color="white" size={22} />}
            </Button>
          </form>
          <Box my={1} />
          <Button
            variant="contained"
            fullWidth
            className={styles.google_signIn_button}
            onClick={signInGoogle}
          >
            <img src={Google_logo} alt="" />
            SIGN IN WITH GOOGLE
          </Button>
          <Box className={styles.sub_menu} mt={5}>
            <span className={styles.create}>
              Have an account?
              <Link to="/login"> Login</Link>
            </span>
          </Box>
        </div>
      </Paper>
    </div>
  );
};

export default Signup;
