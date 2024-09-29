import { Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import ExtractKeywords from "../assets/Images/ExtractKeywords.svg";
import EtractVector from "../assets/Images/ExtractVector.svg";
import BulletPoint from "../assets/Images/ExtractPointerIMG.svg";

const McqHoware2ndBox = () => {
  return (
    <Grid container>
      <Grid
        size={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          //   paddingTop: "10px",
          //   paddingBottom: "10px",
          padding: "10px",
          border: "1px solid red",
        }}
      >
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
          <span style={{ color: "#CBAC15" }}> AI-powered systems</span> for many
          years and are uniquely positioned to leverage their vast customer
          data. Banks use AI in various ways,{" "}
          <span style={{ color: "#CBAC15" }}>
            from automating baking services
          </span>
          , which improve customer experience, to detecting fraud while ensuring
          regulatory compliance and data confidentiality. Today, almost all
          banks use digital technology to assess{" "}
          <span style={{ color: "#CBAC15" }}>
            credit applications, track market trends, manage risk
          </span>{" "}
          and offer personalised customer services.
        </Typography>

        <img
          style={{
            MaxWidth: "412px",
            width: "100%",
            maxHeight: "181px",
            height: "auto",
          }}
          src={ExtractKeywords}
          alt="ExtractKeywords"
        />
      </Grid>
      <Grid
        size={2}
        sx={{
          display: "flex",
          //flexDirection:"row",
          alignItems: "center",
        }}
      >
        <img
          style={{
            MaxWidth: "169px",
            width: "100%",
            maxHeight: "109px",
            height: "auto",
            transform: "rotate(180deg)",
          }}
          src={EtractVector}
          alt="EtractVector"
        />
      </Grid>

      <Grid
        size={5}
        sx={{
          display: "inline-table",
          //flexDirection: "column",
          alignItems: "center",
          //justifyContent: "center",

          padding: "10px",
          border: "1px solid black",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <img
            style={{
              maxWidth: "10px",
              maxHeight: "10px",
              width: "100%",
              height: "auto",
            }}
            src={BulletPoint}
            alt="BulletPoint"
          />
          <Typography
            sx={{
              font: {
                xs: "normal 400 14px/normal 'Inter'",
                sm: "normal 400 16px/normal 'Inter'",
                md: "normal 400 18px/normal 'Inter'",
                lg: "normal 400 22px/normal 'Inter'",
              },
              color: "#000",
            }}
          >
            Extracting Keywords from the sentences
          </Typography>
        </Grid>
        {/* <Grid sx={{ marginTop: "10px" }}> */}
        <Typography
          sx={{
            font: {
              xs: "normal 400 14px/normal 'Inter'",
              sm: "normal 400 16px/normal 'Inter'",
              md: "normal 400 18px/normal 'Inter'",
              lg: "normal 400 22px/normal 'Inter'",
            },
            color: "#5A5C5F",
            width: "100%",
            height: "auto",
            border: "1px solid blue",
          }}
        >
          For MCQ generation, EduTech AI identifies keywords from the text by
          scanning for important terms, concepts, names, dates, and technical
          vocabulary that are central to the topic
        </Typography>
        {/* </Grid> */}
      </Grid>
    </Grid>
  );
};

export default McqHoware2ndBox;
