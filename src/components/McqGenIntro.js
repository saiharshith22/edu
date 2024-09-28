import { Box, Button, Typography, Grid2 as Grid } from "@mui/material";
import React from "react";

const McqGenIntro = () => {
  const btnStyle = {
    textTransform: "none",
    font: {
      xs: "normal 500 8px/normal 'Inter'",
      sm: "normal 500 10px/normal 'Inter'",
      md: "normal 500 12px/normal 'Inter'",
      lg: "normal 500 14px/normal 'Inter'",
    },

    letterSpacing: "0.175px",
    borderRadius: "32px",
    border: "1px solid #054BB4",
    // height: "49px",
    // width: "178px",
    height: { xs: "25px", sm: "35px", md: "40px", lg: "49px" },
    width: { xs: "100px", sm: "130px", md: "150px", lg: "178px" },
    color: "white",
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
              margin: "48px 0px 0px 0px",
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
        <Box sx={{ margin: "50px 0px 50px 0px" }}>
          <Button
            sx={{ ...btnStyle, backgroundColor: "#054BB4" }}
            variant="contained"
          >
            Get Started for free
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default McqGenIntro;
