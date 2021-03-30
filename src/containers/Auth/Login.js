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
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import LoadingCircle from "../../components/Versatility/CircularProgress";
import ForgotPassword from "../../components/ForgotPassword";
import Message from "../../common/Message";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const { login } = useAuth();
  const history = useHistory();

  const signInGoogle = async () => {
    try {
      setGoogleLoading(true);
      await auth.signInWithPopup(provider).catch((err) => alert(err.message));

      history.push("/");
    } catch {
      setError("Faild to Login");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch {
      setError("Failed to Login.");
    } finally {
      setLoading(false);
    }
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
              Login
            </Box>
          </Typography>
          {error && (
            <Message
              backgroundColor="rgb(255,0,0,0.4)"
              color="darkred"
              message={error}
            />
          )}
          <Box my={1} />
          <form onSubmit={handleSubmit}>
            <TextField
              className={styles.input_field}
              variant="outlined"
              value={email}
              type="text"
              label="E-mail"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
            <Box my={4} />
            <TextField
              className={styles.input_field}
              variant="outlined"
              value={password}
              type="password"
              label="Password"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Box my={4} />
            <Button
              variant="contained"
              fullWidth
              className={email && password ? styles.button : null}
              type="submit"
              disabled={!email || !password}
            >
              {loading && <LoadingCircle color={"white"} size={22} />}
              {!loading && "Login"}
            </Button>
          </form>
          <Box my={1} />
          <Button
            variant="contained"
            fullWidth
            className={styles.google_signIn_button}
            onClick={signInGoogle}
          >
            {!googleLoading && (
              <>
                <img src={Google_logo} alt="" />
                SIGN IN WITH GOOGLE
              </>
            )}
            {googleLoading && <LoadingCircle size={22} />}
          </Button>
          <Box className={styles.sub_menu} mt={8}>
            <ForgotPassword />
            <span>
              <Link to="/signup">Create New Account</Link>
            </span>
          </Box>
        </div>
      </Paper>
    </div>
  );
};

export default Auth;
