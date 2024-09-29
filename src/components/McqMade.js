import React from "react";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import Vector from "../assets/Images/Vector.svg";

const McqMade = () => {
  return (
    <Grid container>
      <Grid
        container
        size={{ xs: 12, md: 6, sm: 6, xl: 6 }}
        sx={{
          paddingTop: "10%",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "1000px",
            background: "#5A5C5F",
          }}
        />
        <Typography
          sx={{
            font: {
              xs: "normal 400 15px/normal 'Inter'",
              sm: "normal 400 17px/normal 'Inter'",
              md: "normal 400 19px/normal 'Inter'",
              lg: "normal 400 23px/normal 'Inter'",
            },
            color: "#000",
            margin: 0,
          }}
        >
          Identifying key sentences from the text
        </Typography>

        <Typography
          sx={{
            font: {
              xs: "normal 400 15px/normal 'Inter'",
              sm: "normal 400 17px/normal 'Inter'",
              md: "normal 400 19px/normal 'Inter'",
              lg: "normal 400 23px/normal 'Inter'",
            },
            color: "#5A5C5F",
          }}
        >
          To generate effective MCQs, EduTech AI identifies key sentences from
          the text by analyzing content for essential concepts, facts, and
          definitions.
        </Typography>

        <Box
          component="img"
          src={Vector}
          alt="image1"
          sx={{
            position: "absolute",
            bottom: { xs: "20px", sm: "40px", md: "45px", lg: "45px" },
            right: { xs: "20px", sm: "40px", md: "54px", lg: "54px" },
            maxWidth: { xs: "70%", sm: "60%", md: "50%", lg: "40%" },
            height: "auto",
          }}
        />
      </Grid>
      <Grid
        sx={{ padding: "1.5%" }}
        size={{ xs: 12, md: 6, sm: 6, xl: 6 }}
        container
      >
        <Box sx={{ border: "1px solid #E2E0E0" }}>
          <Typography
            sx={{
              font: "normal 600 23px/normal 'Inter'",
              color: "#000",
              textAlign: "center",
            }}
          >
            AI in banking and finance
          </Typography>
          <Typography
            sx={{
              font: {
                xs: "normal 400 8px/normal 'Inter'",
                sm: "normal 400 10px/normal 'Inter'",
                md: "normal 400 16px/normal 'Inter'",
                lg: "normal 400 18px/normal 'Inter'",
              },
              color: "#000",
              padding: "10px",
            }}
          >
            Banks, financial institutions and insurance providers have used
            <span style={{ color: "#CBAC15" }}> AI-powered systems</span> for
            many years and are uniquely positioned to leverage their vast
            customer data. Banks use AI in various ways,{" "}
            <span style={{ color: "#CBAC15" }}>
              from automating baking services
            </span>
            , which improve customer experience, to detecting fraud while
            ensuring regulatory compliance and data confidentiality. Today,
            almost all banks use digital technology to assess{" "}
            <span style={{ color: "#CBAC15" }}>
              credit applications, track market trends, manage risk
            </span>{" "}
            and offer personalised customer services. Banking has also been made
            safer through{" "}
            <span style={{ color: "#CBAC15" }}>
              real-time transaction monitoring, customer behavioural analysis
              and credit risk prediction
            </span>
            . Similarly, virtual chatbots, personalised banking recommendations,
            automated transactions and spending pattern analysis have enabled
            banks to offer relevant services to customers. Being an early
            adopter has undoubtedly helped the{" "}
            <span style={{ color: "#CBAC15" }}>
              BFSI industry reduce operational costs, improve customer
              experience, reduce fraud, enhance compliance
            </span>{" "}
            and automate critical business decision-making.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default McqMade;
