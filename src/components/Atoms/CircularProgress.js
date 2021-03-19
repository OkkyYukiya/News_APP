import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingCircle = ({ size, color }) => (
  <CircularProgress style={{ color: color }} size={size} />
);

export default LoadingCircle;
