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
import { useAuth } from "../../Store/AuthProvider";
import LoadingCircle from "../../components/Versatility/CircularProgress";
import ForgotPassword from "../../components/ForgotPassword";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const history = useHistory();

  const signInGoogle = async () => {
    try {
      setLoading(true);
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
      await login(email, password);
      history.push("/clip");
    } catch {
      setError("Failed to Login.");
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
              className={styles.button}
              type="submit"
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
            <img src={Google_logo} alt="" />
            SIGN IN WITH GOOGLE
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
