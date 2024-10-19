import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const LoadingOverlay = ({ open }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" size={"60px"} />
    </Backdrop>
  );
};

export default LoadingOverlay;
