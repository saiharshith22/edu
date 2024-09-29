import React from "react";
import McQFormImg from "../assets/Images/McqFormImg.svg";
import {
  Box,
  Button,
  Grid2 as Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const McqForm = () => {
  const formStyle = {
    font: {
      xs: "normal 400 8px/normal 'Inter'",
      sm: "normal 400 12px/normal 'Inter'",
      md: "normal 400 12px/normal 'Inter'",
      lg: "normal 400 14px/normal 'Inter'",
    },
    color: "#FFFFFF",
    borderRadius: "2px",
    backgroundColor: "#054BB4",
    textTransform: "none",
    // padding: "5px",
    // textAlign: "center",
  };
  return (
    <div>
      <Grid container>
        <Grid
          size={{ xs: 12, sm: 4, md: 5, lg: 5 }}
          sx={{ display: "grid", alignItems: "center" }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <Box
              sx={{ gap: { xs: 0.5, sm: 0.5, md: 1, lg: 1 }, display: "grid" }}
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
                        Form Multiple Choice Questions
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
                        When forming multiple-choice questions, EduTech AI uses
                        key sentences and keywords to create questions that
                        accurately assess the learner's understanding of the
                        material. The AI formulates a clear question stem,
                        identifies the correct answer, and generates plausible
                        distractors (incorrect options) that challenge the
                        learner without causing confusion. This approach ensures
                        that each MCQ is balanced, fair, and effectively tests
                        comprehension and critical thinking skills.
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </div>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 2, md: 2, lg: 2 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={McQFormImg}
            alt="image1"
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: "132px",
              maxHeight: "151px",
              display: { xs: "none", sm: "block" },
            }}
          />
        </Grid>
        <Grid
          size={{ xs: 12, sm: 6, md: 5, xl: 5 }}
          sx={{
            padding: "1.5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          container
        >
          <Grid size={{ xs: 11, sm: 12 }}>
            <Box
              sx={{
                display: "grid",
                gap: { xs: 2, sm: 2, md: 3, lg: 3 },
                border: "1px solid #E2E0E0",
                padding: "2%",
              }}
            >
              <Typography
                sx={{
                  font: {
                    xs: "normal 400 12px/normal 'Inter'",
                    sm: "normal 400 12px/normal 'Inter'",
                    md: "normal 400 14px/normal 'Inter'",
                    lg: "normal 400 16px/normal 'Inter'",
                  },
                  color: "#000",
                }}
              >
                Banks, financial institutions and insurance providers have used
                <span style={{ color: "#CBAC15" }}>
                  {" "}
                  AI-powered systems
                </span>{" "}
                for many years and are uniquely positioned to leverage their
                vast customer data. Banks use AI in various ways,{" "}
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
              <Typography
                sx={{
                  backgroundColor: "#E2E0E0",
                  borderRadius: "5px",
                  padding: "10px",
                  font: {
                    xs: "normal 500 10px/normal 'Inter'",
                    sm: "normal 500 12px/normal 'Inter'",
                    md: "normal 500 14px/normal 'Inter'",
                    lg: "normal 500 16px/normal 'Inter'",
                  },
                }}
              >
                Which technology is used to automate banking services?
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(4, 1fr)",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(2, 1fr)",
                  },
                  gap: 1,
                }}
              >
                <Button sx={formStyle}>Artifial Intelligence</Button>
                <Button sx={formStyle}>Blockchain</Button>
                <Button sx={formStyle}>Cloud computing</Button>
                <Button sx={formStyle}>Robotic Process Automation</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default McqForm;
