import React from "react";
import { Box, Button, Typography, Grid2 as Grid } from "@mui/material";
import McqContentVdos from "../assets/Images/MyContentVdo.mp4";

const McqGenIntro2 = () => {
  return (
    <Grid
      container
      spacing={2}
      size={12}
      sx={{ display: "flex", flexDirection: "cloumn" }}
    >
      {/* <Grid size={12}> */}
      <Box>
        <Typography
          sx={{
            font: {
              xs: "normal 500 20px/normal 'InterBold'",
              sm: "normal 500 24px/normal 'InterBold'",
              md: "normal 500 28px/normal 'InterBold'",
              lg: "normal 500 33px/normal 'InterBold'",
            },
            color: "#000",
            letterSpacing: "0.083px",
            margin: "0px 0px 24px 0px",
          }}
        >
          Experience the hassle -free MCQ generation using the advanced AI
          technology
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            font: {
              xs: "normal 400 12px/normal 'Inter'",
              sm: "normal 400 14px/normal 'Inter'",
              md: "normal 400 16px/normal 'Inter'",
              lg: "normal 400 16px/normal 'Inter'",
            },
            color: "#595959",
            letterSpacing: "0.024px",
            margin: "0px 0px 20px 0px",
            textAlign: "justify",
          }}
        >
          Your go-to tool for creating customized multiple-choice quizzes in
          seconds. Whether you’re a student looking to practice, a teacher
          designing assessments, or a parent supporting your child's learning,
          our AI-powered tool adapts to your needs, offering questions tailored
          by subject, difficulty level, and specific topics. Get instant
          feedback and detailed explanations to enhance your learning experience
          effortlessly!
        </Typography>
      </Box>
      <Box>
        <video width="387px" height="auto" controls>
          <source src={McqContentVdos} type="video/mp4" />
        </video>
      </Box>
    </Grid>
    // </Grid>
  );
};

export default McqGenIntro2;
