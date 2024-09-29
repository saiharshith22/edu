import {
  Box,
  Grid2 as Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import ExtractKeywords from "../assets/Images/ExtractKeywords.svg";
import EtractVector from "../assets/Images/ExtractVector.svg";

const McqHoware2ndBox = () => {
  return (
    <Grid container sx={{ mb: "50px" }}>
      <Grid
        size={{ xs: 12, sm: 6, md: 5, xl: 5 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          //   paddingTop: "10px",
          //   paddingBottom: "10px",
        }}
        container
        order={{ xs: 3, sm: 1 }}
      >
        <Grid
          size={{ xs: 8, sm: 12 }}
          sx={{ border: "1px solid #E2E0E0", padding: "10px" }}
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
      </Grid>
      <Grid
        size={{ xs: 12, sm: 2, md: 2, lg: 2 }}
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
        }}
        order={{ xs: 2, sm: 2 }}
      >
        <Box
          component="img"
          sx={{
            MaxWidth: "169px",
            width: "100%",
            maxHeight: "109px",
            height: "auto",
            display: { xs: "none", sm: "block" },
          }}
          src={EtractVector}
          alt="EtractVector"
        />
      </Grid>

      <Grid
        size={{ xs: 12, sm: 4, md: 5, lg: 5 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
        order={{ xs: 1, sm: 3 }}
      >
        <List
          sx={{
            paddingLeft: 2,
            position: "relative",
          }}
        >
          <ListItem
            sx={{
              listStyleType: "disc",
              display: "list-item",
              padding: { xs: "0px", sm: "1.5px", md: "3px", lg: "5px" },
            }}
          >
            <ListItemText
              primary={
                <Typography
                  sx={{
                    font: {
                      xs: "normal 400 12px/normal 'Inter'",
                      sm: "normal 400 12px/normal 'Inter'",
                      md: "normal 400 18px/normal 'Inter'",
                      lg: "normal 400 22px/normal 'Inter'",
                    },
                    color: "#000",
                    margin: 0,
                  }}
                >
                  Extracting Keywords from the sentences
                </Typography>
              }
            />
          </ListItem>
          <ListItem
            sx={{
              padding: { xs: "0px", sm: "1.5px", md: "3px", lg: "5px" },
            }}
          >
            <ListItemText
              primary={
                <Typography
                  sx={{
                    font: {
                      xs: "normal 400 12px/normal 'Inter'",
                      sm: "normal 400 12px/normal 'Inter'",
                      md: "normal 400 18px/normal 'Inter'",
                      lg: "normal 400 22px/normal 'Inter'",
                    },
                    color: "#5A5C5F",
                    margin: 0,
                  }}
                >
                  For MCQ generation, EduTech AI identifies keywords from the
                  text by scanning for important terms, concepts, names, dates,
                  and technical vocabulary that are central to the topic
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default McqHoware2ndBox;
