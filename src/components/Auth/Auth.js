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
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Google_logo from "../../assets/google-logo.png";
import { auth, provider } from "../../firebase";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");

  const signInGoogle = async () => {
    await auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  const signUp = async () => {
    await auth.createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className={styles.root}>
      <Paper className={styles.container} elevation={4}>
        <div className={styles.wrapper}>
          <Avatar className={styles.icon_wrapper}>
            {isLogin ? (
              <LockOpenIcon className={styles.icon} fontSize="large" />
            ) : (
              <PersonAddIcon className={styles.icon} fontSize="large" />
            )}
          </Avatar>
          <Typography variant="h5">
            <Box fontWeight="fontWeightBold" pt={1}>
              {isLogin ? "Sing In" : "Sing Up"}
            </Box>
          </Typography>
          <Box my={1} />
          <form>
            {/* {!isLogin && (
              <>
                <TextField
                  className={styles.input_field}
                  label="Username"
                  variant="outlined"
                  autoFocus
                  fullWidth
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div className={styles.spacer} />
              </>
            )} */}
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
            <Box my={1} />
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

            <Box my={1} />
            <Button
              variant="contained"
              fullWidth
              className={styles.button}
              onClick={signUp}
            >
              {isLogin ? "SIGN IN" : "Sing UP"}
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
          <Box className={styles.sub_menu} mt={8}>
            <span>Forgot Password?</span>
            <span
              onClick={() => setIsLogin(!isLogin)}
              className={styles.create}
            >
              {isLogin ? "Create New Account" : "Sign In"}
            </span>
          </Box>
        </div>
      </Paper>
    </div>
  );
};

export default Auth;
