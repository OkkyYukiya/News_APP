import React from "react";
import { Box, Typography } from "@material-ui/core";
import ClipNewsItem from "../Atoms/DemoCLip";

const ClipNews = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography variant="h4">CLIP News</Typography>
      <ClipNewsItem />
    </Box>
  );
};

export default ClipNews;
