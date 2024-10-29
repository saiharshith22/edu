import { Button } from "@mui/material";
import React, { useContext } from "react";
import { McqGeneratorContext } from ".";
import { useDispatch } from "react-redux";
import {
  generateMcqsFromFile,
  generateMcqsFromText,
  generateMcqsFromWikiUrl,
} from "../../features/generateMcqs/generateMcqsSaga";
import { useNavigate } from "react-router-dom";

const McqGeneratorButton = () => {
  const context = useContext(McqGeneratorContext);
  const dispatch = useDispatch();
  const { text, uploadedFile, mcqCount, wikiUrl } = context;
  const navigate = useNavigate();

  const btnStyle = {
    textTransform: "none",
    font: "normal 500 14px/normal 'Inter'",
    color: "19467E",
    letterSpacing: "0.168px",
    borderRadius: "30px",
    border: "1px solid #19467E",
    height: { xs: "39px", sm: "49px" },
    width: { xs: "100%", sm: "530px", md: "700px", lg: "770px" },
  };

  const handleGenerateMcq = async () => {
    let result = null;
    try {
      if (text) {
        result = await dispatch(
          generateMcqsFromText({ text, number: mcqCount })
        );
      }
      if (uploadedFile) {
        result = await dispatch(
          generateMcqsFromFile({ uploadedFile, number: mcqCount })
        );
      }
      if (wikiUrl) {
        result = await dispatch(
          generateMcqsFromWikiUrl({ text: wikiUrl, number: mcqCount })
        );
      }
      console.log("--->", result);
      if (result.meta.requestStatus === "fulfilled") {
        navigate("/take-quiz");
      } else {
        console.error("Failed to generate MCQs");
      }
    } catch (error) {}
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        sx={{ ...btnStyle, background: "#054BB4" }}
        variant="contained"
        onClick={handleGenerateMcq}
      >
        Generate MCQ
      </Button>
    </div>
  );
};

export default McqGeneratorButton;
