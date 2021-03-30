import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: 600,
    display: "flex",
  },
}));

const ClipNewsItem = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              style={{
                width: 120,
                height: 100,
                border: "2px solid grey",
                borderRadius: 12,
              }}
            >
              image
            </Box>
            <Box
              ml={2}
              textAlign="left"
              justifyContent="center"
              display="flex"
              flexDirection="column"
            >
              <Typography variant="subtitle1" style={{ color: "black" }}>
                Powell Fed Is in It to Win It Despite Bond-Market ...
              </Typography>
              <Typography variant="body2">
                Jerome Powell has a goal that is bigger than the bond market’s
                near term inflation concern.In perhaps his most ...
              </Typography>
            </Box>
          </Paper>
          <Paper className={classes.paper}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              style={{
                width: 120,
                height: 100,
                border: "2px solid grey",
                borderRadius: 12,
              }}
            >
              image
            </Box>
            <Box
              ml={2}
              textAlign="left"
              justifyContent="center"
              display="flex"
              flexDirection="column"
            >
              <Typography variant="subtitle1" style={{ color: "black" }}>
                Powell Fed Is in It to Win It Despite Bond-Market ...
              </Typography>
              <Typography variant="body2">
                Jerome Powell has a goal that is bigger than the bond market’s
                near term inflation concern.In perhaps his most ...
              </Typography>
            </Box>
          </Paper>
          <Paper className={classes.paper}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              style={{
                width: 120,
                height: 100,
                border: "2px solid grey",
                borderRadius: 12,
              }}
            >
              image
            </Box>
            <Box
              ml={2}
              textAlign="left"
              justifyContent="center"
              display="flex"
              flexDirection="column"
            >
              <Typography variant="subtitle1" style={{ color: "black" }}>
                Powell Fed Is in It to Win It Despite Bond-Market ...
              </Typography>
              <Typography variant="body2">
                Jerome Powell has a goal that is bigger than the bond market’s
                near term inflation concern.In perhaps his most ...
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ClipNewsItem;
