import React from "react";
import { Link } from "react-router-dom";
import styles from "./Feed.module.scss";

const Feed = () => {
  return (
    <div className={styles.root}>
      <h1>Feed is Coming Soon</h1>
      <h3>
        <Link to="/">Back to Home</Link>
      </h3>
    </div>
  );
};

export default Feed;
