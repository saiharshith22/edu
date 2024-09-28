import { Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import LatestNewsImg from "../assets/Images/latest-news.png";

const LatestNews = () => {
  return (
    <Grid container>
      <Grid
        size={{ xs: 12 }}
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
          LATEST NEWS
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
      <Grid size={{ sm: 6 }} sx={{ display: "flex", alignItems: "flex-end" }}>
        <Box
          component="img"
          src={LatestNewsImg}
          alt="testimonial-img"
          sx={{ maxWidth: "566px", width: "100%" }}
        />
      </Grid>
      <Grid size={{ sm: 6 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box>
            <Typography
              sx={{
                font: {
                  xs: "normal 600 14px/normal 'Inter'",
                  sm: "normal 600 16px/normal 'Inter'",
                  md: "normal 600 18px/normal 'Inter'",
                  lg: "normal 600 22px/normal 'Inter'",
                },
                color: "#000",
                letterSpacing: "0.035px",
                mb: "20px",
              }}
            >
              Revolutioning Education with AI- Powered Learning Tools
            </Typography>
            <Typography
              sx={{
                font: {
                  xs: "italic 400 14px/normal 'Inter'",
                  sm: "italic 400 16px/normal 'Inter'",
                  md: "italic 400 18px/normal 'Inter'",
                  lg: "italic 400 22px/normal 'Inter'",
                },
                color: "#000",
              }}
            >
              AI Tools Achieve Milestone of 1 Million Users
            </Typography>
          </Box>
          <Typography
            sx={{
              font: {
                xs: "italic 400 14px/normal 'Inter'",
                sm: "italic 400 16px/normal 'Inter'",
                md: "italic 400 24px/normal 'Inter'",
                lg: "italic 400 28px/normal 'Inter'",
              },
              color: "#5A5C5F",
              letterSpacing: "0.075px",
            }}
          >
            “Implementing the AI tools from this platform has significantly
            enhanced our curriculum. Teachers can now generate high quality
            questions and quizzes in minutes, freezing up time to focus on more
            interactive teaching methods. The positive impact on student
            engagement has been remarkable”
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LatestNews;
