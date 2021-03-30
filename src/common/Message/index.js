import React from "react";
import { Box, Typography } from "@material-ui/core";

const Message = ({ backgroundColor, color, message }) => {
  return (
    <Box
      px={5}
      py={1}
      mt={1}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        borderRadius: 7,
      }}
    >
      <Typography>{message}</Typography>
    </Box>
  );
};

export default Message;
