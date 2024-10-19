import { Box, TextField, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import { McqGeneratorContext } from ".";

const McqGenerator2ShowCase = () => {
  const context = useContext(McqGeneratorContext);
  const { text, setText, mcqInputDisabled, setMcqInputDisabled } = context;
  const BELOW_SM = useMediaQuery("(max-width:600px)");

  const handleTextChange = (e) => {
    setText(e.target.value);
    if (e.target.value) {
      setMcqInputDisabled({ text: false, uploadedFile: true, wikiUrl: true });
    } else {
      setMcqInputDisabled({ text: false, uploadedFile: false, wikiUrl: false });
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        // height: "267px",
        justifyContent: "center",
        alignItems: "center",
        m: { xs: "20px 0", sm: "50px 0px" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-multiline-static"
        value={text}
        onChange={handleTextChange}
        disabled={mcqInputDisabled.text}
        multiline
        rows={BELOW_SM ? 5 : 10}
        placeholder="Enter the text here"
        sx={{
          width: { xs: "280px", sm: "500px", md: "746px", lg: "746px" },
          //maxWidth: "746px",
          borderRadius: "5px",
          border: `${mcqInputDisabled.text ? "none" : "1px solid #000"}`,
          background: "#FFF",
          "& .MuiInputBase-input": {
            whiteSpace: "pre-line",
            fontSize: {
              xs: "12px",
              md: "12px",
              lg: "14px",
            },
            fontWeight: 400,
            fontFamily: "'Inter', sans-serif",
            color: "#000",
            letterSpacing: "0.021px",
          },
        }}
      />
    </Box>
  );
};

export default McqGenerator2ShowCase;
