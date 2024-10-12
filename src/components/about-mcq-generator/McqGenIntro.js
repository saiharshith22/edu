import { Box, Button, Typography, Grid2 as Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const McqGenIntro = () => {
  const navigate = useNavigate();
  const btnStyle = {
    textTransform: "none",
    font: {
      xs: "normal 500 12px/normal 'Inter'",
      sm: "normal 500 12px/normal 'Inter'",
      md: "normal 500 12px/normal 'Inter'",
      lg: "normal 500 14px/normal 'Inter'",
    },

    letterSpacing: "0.175px",
    borderRadius: "32px",
    border: "1px solid #054BB4",
    height: { xs: "40px", sm: "35px", md: "40px", lg: "49px" },
    width: { xs: "150px", sm: "130px", md: "150px", lg: "178px" },
    color: "white",
  };

  const handleGetStarted = () => {
    navigate("/mcq-generator");
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ justifyContent: "center", textAlign: "center" }}
    >
      <Grid
        size={12}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box>
          <Typography
            sx={{
              font: {
                xs: "normal 800 22px/normal 'InterBold'",
                sm: "normal 800 28px/normal 'InterBold'",
                md: "normal 800 35px/normal 'InterBold'",
                lg: "normal 800 47px/normal 'InterBold'",
              },
              color: "#000",
              margin: { xs: "15px 0 0 0", sm: "48px 0px 0px 0px" },
            }}
          >
            Welcome to the EduTech AI MCQ Generator!
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
              margin: "24px 0px 24px 0px",
            }}
          >
            Quickly generate personalized multiple-choice questions with the
            EduTech AI MCQ Generator!
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
            }}
          >
            Get Started with Our Interactive Multiple Choice Question Tool
          </Typography>
        </Box>
        <Box
          sx={{ margin: { xs: "20px 0px 20px 0px", sm: "50px 0px 50px 0px" } }}
        >
          <Button
            sx={{ ...btnStyle, backgroundColor: "#054BB4" }}
            variant="contained"
            onClick={handleGetStarted}
          >
            Get Started for free
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default McqGenIntro;
