import React from "react";
import { Box, Grid2 as Grid, Typography } from "@mui/material";

const McqHoware = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid
          size={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            alignItems: "center",
            marginTop: "50px",
            marginBottom: "24px",
          }}
        >
          <Typography
            sx={{
              font: {
                xs: "normal 500 18px/normal 'Inter'",
                sm: "normal 500 20px/normal 'Inter'",
                md: "normal 500 28px/normal 'Inter'",
                lg: "normal 500 33px/normal 'Inter'",
              },
              color: "#5A5C5F",
              letterSpacing: "0.083px",
              margin: "0px",
            }}
          >
            HOW ARE MCQs made?
          </Typography>
          <hr
            style={{
              background: "#000",
              width: "11%",
              height: "1px",
              margin: "0px",
            }}
          />
        </Grid>
        <Grid>
          <Typography
            sx={{
              font: {
                xs: "normal 400 15px/normal 'Inter'",
                sm: "normal 400 17px/normal 'Inter'",
                md: "normal 400 19px/normal 'Inter'",
                lg: "normal 400 23px/normal 'Inter'",
              },
              color: "#000",
              margin: {
                xs: "0px 0px 15px 0px",
                sm: "0px 0px 15px 0px",
                md: "0px 0px 25px 0px",
                lg: "0px 0px 45px 0px",
              },
            }}
          >
            Using advanced AI algorithms, it generates questions that align with
            the user’s preferences, provides answer choices, and offers instant
            feedback with detailed explanations to enhance understanding.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default McqHoware;
