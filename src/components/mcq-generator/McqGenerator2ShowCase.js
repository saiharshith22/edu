import { Box, TextField } from "@mui/material";
import React, { useContext } from "react";
import { McqGeneratorContext } from ".";

const McqGenerator2ShowCase = () => {
  const context = useContext(McqGeneratorContext);
  const { text, setText } = context;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        height: "267px",
        justifyContent: "center",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-multiline-static"
        value={text}
        onChange={handleTextChange}
        multiline
        rows={10}
        sx={{
          m: 1,
          width: { xs: "280px", sm: "500px", md: "746px", lg: "746px" },
          //maxWidth: "746px",
          borderRadius: "5px",
          border: "1px solid #000",
          background: "#FFF",
          "& .MuiInputBase-input": {
            whiteSpace: "pre-line",
            font: {
              xs: "normal 400 10px/normal 'Inter'",
              sm: "normal 400 10px/normal 'Inter'",
              md: "normal 400 12px/normal 'Inter'",
              lg: "normal 400 14px/normal 'Inter'",
            },
            color: "#000",
            letterSpacing: "0.021px",
          },
        }}
      />
    </Box>
  );
};

export default McqGenerator2ShowCase;
