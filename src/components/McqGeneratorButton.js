import { Button } from "@mui/material";
import React from "react";

const McqGeneratorButton = () => {
  const btnStyle = {
    textTransform: "none",
    font: "normal 500 14px/normal 'Inter'",
    color: "19467E",
    letterSpacing: "0.168px",
    borderRadius: "30px",
    border: "1px solid #19467E",
    height: { xs: "39px", sm: "49px" },
    width: { xs: "285px", sm: "505px", md: "748px", lg: "748px" },
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button sx={{ ...btnStyle, background: "#054BB4" }} variant="contained">
        Generate MCQ
      </Button>
    </div>
  );
};

export default McqGeneratorButton;
