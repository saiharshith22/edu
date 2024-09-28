import { Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import AboutUsImage from "../assets/Images/AboutUsImage.svg";

const About = () => {
  const typotext = {
    font: {
      xs: "normal 500 12px/normal 'Inter'",
      sm: "normal 500 14px/normal 'Inter'",
      md: "normal 500 16px/normal 'Inter'",
      lg: "normal 500 16px/normal 'Inter'",
    },
    color: "#5A5C5F",
    letterSpacing: "0.024px",
  };
  return (
    <Grid container spacing={3}>
      <Grid
        size={{ xs: 12, sm: 6 }}
        sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
      >
        <Box
          component="img"
          src={AboutUsImage}
          sx={{ width: "40vw", maxWidth: "670px", maxHeight: "518px" }}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <hr
            style={{
              background: "#000",
              width: "13%",
              height: "0.8px",
              margin: "0px",
            }}
          />
          <Typography
            sx={{
              font: {
                xs: "normal 500 16px/normal 'Inter'",
                sm: "normal 500 20px/normal 'Inter'",
                md: "normal 500 28px/normal 'Inter'",
                lg: "normal 500 33px/normal 'Inter'",
              },
              color: "#5A5C5F",
              letterSpacing: "0.083px",
              margin: "0px",
            }}
          >
            ABOUT US
          </Typography>
        </Grid>
        <Grid
          sx={{ display: "flex", flexDirection: "column", gap: 2, mb: "40px" }}
        >
          <Typography
            sx={{
              font: {
                xs: "normal 500 22px/normal 'InterBold'",
                sm: "normal 500 28px/normal 'Inter'",
                md: "normal 500 35px/normal 'Inter'",
                lg: "normal 500 47px/normal 'Inter'",
              },
              color: "#000",
              marginTop: "16px",
            }}
          >
            Who We Are?
          </Typography>
          <Typography sx={typotext}>
            Welcome to EduTechAI, where innovation meets education. We are a
            dynamic team of educators, technologists, and AI enthusiasts
            dedicated to transforming the learning experience through
            cutting-edge artificial intelligence.
          </Typography>
          <Typography sx={typotext}>
            At EduTechAI, we believe in the power of technology to enhance
            education and make learning accessible, personalized, and engaging
            for everyone. Our mission is to equip educators and students with
            the tools they need to succeed in an ever-evolving academic
            landscape.
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: { xs: "flex", sm: "none" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={AboutUsImage}
            sx={{ width: "40vw", maxWidth: "670px", maxHeight: "518px" }}
          />
        </Grid>
        <Grid
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              font: {
                xs: "normal 500 22px/normal 'InterBold'",
                sm: "normal 500 28px/normal 'Inter'",
                md: "normal 500 35px/normal 'Inter'",
                lg: "normal 500 47px/normal 'Inter'",
              },
              color: "#000",
            }}
          >
            Our Vision
          </Typography>
          <Typography sx={typotext}>
            Our vision is to redefine education by harnessing the capabilities
            of AI to deliver intelligent, adaptive, and individualized learning
            experiences. We strive to bridge the gap between traditional
            educational methods and the limitless possibilities offered by
            modern technology.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        size={{ xs: 12 }}
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            font: {
              xs: "normal 500 22px/normal 'InterBold'",
              sm: "normal 500 28px/normal 'Inter'",
              md: "normal 500 35px/normal 'Inter'",
              lg: "normal 500 47px/normal 'Inter'",
            },
            color: "#000",
          }}
        >
          Our Vision
        </Typography>
        <Typography sx={typotext}>
          Our vision is to redefine education by harnessing the capabilities of
          AI to deliver intelligent, adaptive, and individualized learning
          experiences. We strive to bridge the gap between traditional
          educational methods and the limitless possibilities offered by modern
          technology.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
