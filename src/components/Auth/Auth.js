import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
  Avatar,
  Button,
} from "@material-ui/core";
import styles from "./Auth.module.scss";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import google_logo from "../../assets/google-logo.png";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Grid className={styles.root} component="main" container>
      <Grid
        className={styles.wrapper}
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <Box className={styles.contents_box} mt={4}>
          <Avatar className={styles.avatar}>
            {isLogin ? (
              <LockOpenIcon className={styles.icon} fontSize="large" />
            ) : (
              <PersonAddIcon className={styles.icon} fontSize="large" />
            )}
          </Avatar>
          <Typography className={styles.title} component="h1" variant="h6">
            {isLogin ? "SIGN IN" : "SIGN UP"}
          </Typography>
          <form>
            {!isLogin && ( //when create user,then display username textfield
              <>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </>
            )}
            <TextField
              className={styles.input}
              variant="outlined"
              fullWidth
              margin="normal"
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              className={styles.input}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Box mt={3}>
              <Button
                className={styles.signin_button}
                variant="contained"
                fullWidth
              >
                {isLogin ? "SING IN" : "Create New Account"}
              </Button>
            </Box>
          </form>

          <Box mt={3}>
            <Button
              className={styles.google_signin}
              variant="contained"
              fullWidth
            >
              <img className={styles.google_logo} src={google_logo} alt="" />
              <span>Sign In With Google</span>
            </Button>
          </Box>

          <Box mt={5}>
            <Grid className={styles.subarea} container justify="space-between">
              <Grid item>
                <span className={styles.reset_password}>Forgot password?</span>
              </Grid>
              <Grid item>
                <span
                  onClick={() => setIsLogin(!isLogin)}
                  className={styles.sign_up}
                >
                  {isLogin ? "Create new account" : "Back to SingIn"}
                </span>
              </Grid>
            </Grid>
          </Box>
          {/* あとで消す */}
          <Box mt={2}>
            <h2 style={{ fontSize: 22 }}>※Authentication is Coming Soon</h2>
          </Box>
          {/* あとで消す */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Auth;
