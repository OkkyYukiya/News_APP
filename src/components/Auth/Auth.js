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
import { googleLogoUrl } from "../../assets/imageUrls";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
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
          <div className={styles.spacer} />
          {!isLogin && (
            <>
              <TextField
                className={styles.input_field}
                label="Username"
                variant="outlined"
                fullWidth
              />
              <div className={styles.spacer} />
            </>
          )}
          <TextField
            className={styles.input_field}
            label="E-mail"
            variant="outlined"
            fullWidth
          />
          <div className={styles.spacer} />
          <TextField
            className={styles.input_field}
            label="Password"
            variant="outlined"
            fullWidth
          />
          <div className={styles.spacer} />
          <Button variant="contained" fullWidth className={styles.button}>
            SIGN IN
          </Button>
          <div className={styles.spacer} />
          <Button
            variant="contained"
            fullWidth
            className={styles.google_signIn_button}
          >
            <img src={googleLogoUrl} alt="" />
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
