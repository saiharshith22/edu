import React from "react";
import {
  Box,
  Grid2 as Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Vector from "../assets/Images/Vector.svg";

const McqMade = () => {
  return (
    <Grid
      container
      sx={{
        my: { xs: "15px", sm: "50px" },
      }}
    >
      <Grid
        size={{ xs: 12, sm: 6, md: 7, xl: 7 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
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
                  Identifying key sentences from the text
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
                  To generate effective MCQs, EduTech AI identifies key
                  sentences from the text by analyzing content for essential
                  concepts, facts, and definitions.
                </Typography>
              }
            />
          </ListItem>

          <Box
            component="img"
            src={Vector}
            alt="image1"
            sx={{
              display: { xs: "none", sm: "block" },
              width: { sm: "90px", md: "125px" },
              position: "absolute",
              // bottom: { xs: "20px", sm: "40px", md: "45px", lg: "45px" },
              // right: { xs: "20px", sm: "40px", md: "54px", lg: "54px" },
              // maxWidth: { xs: "70%", sm: "60%", md: "50%", lg: "40%" },
              right: "2%",
              height: "auto",
            }}
          />
        </List>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 6, md: 5, xl: 5 }}
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid size={{ xs: 9, sm: 12 }}>
          <Box sx={{ border: "1px solid #E2E0E0" }}>
            <Typography
              sx={{
                font: {
                  xs: "normal 600 14px/normal 'Inter'",
                  sm: "normal 600 16px/normal 'Inter'",
                  md: "normal 600 18px/normal 'Inter'",
                  lg: "normal 600 22px/normal 'Inter'",
                },
                color: "#000",
                textAlign: "center",
              }}
            >
              AI in banking and finance
            </Typography>
            <Typography
              sx={{
                font: {
                  xs: "normal 400 12px/normal 'Inter'",
                  sm: "normal 400 12px/normal 'Inter'",
                  md: "normal 400 14px/normal 'Inter'",
                  lg: "normal 400 16px/normal 'Inter'",
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
              and offer personalised customer services. Banking has also been
              made safer through{" "}
              <span style={{ color: "#CBAC15" }}>
                real-time transaction monitoring, customer behavioural analysis
                and credit risk prediction
              </span>
              . Similarly, virtual chatbots, personalised banking
              recommendations, automated transactions and spending pattern
              analysis have enabled banks to offer relevant services to
              customers. Being an early adopter has undoubtedly helped the{" "}
              <span style={{ color: "#CBAC15" }}>
                BFSI industry reduce operational costs, improve customer
                experience, reduce fraud, enhance compliance
              </span>{" "}
              and automate critical business decision-making.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default McqMade;
