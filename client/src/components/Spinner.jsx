import React from "react";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import { string, number, oneOfType } from "prop-types";

const Spinner = ({ color = "primary", size = 40, height = "50vh" }) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", minHeight: { height } }}
    >
      <CircularProgress color={color} size={size} height={height} />
    </Box>
  );
};

Spinner.propTypes = {
  color: string,
  size: number,
  height: oneOfType([string, number]),
};

export default Spinner;
