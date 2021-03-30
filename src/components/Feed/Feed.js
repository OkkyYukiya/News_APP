import React from "react";
import { Link } from "react-router-dom";
import styles from "./Feed.module.scss";
import { useHistory, useLocation } from "react-router-dom";

const Feed = () => {
  const history = useHistory();
  const backtohome = () => history.push("/");

  const location = useLocation();
  console.log(location);
  return (
    <div className={styles.root}>
      <h3>
        <Link to="/">Back to Home</Link>
      </h3>
      <button onClick={backtohome}>Home</button>
    </div>
  );
};

export default Feed;
