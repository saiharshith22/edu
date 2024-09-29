import {
  Box,
  Grid2 as Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import McqGenVideo from "../assets/Images/McqGenVideo.mp4";
import React from "react";

const McqWorks = () => {
  const videoBreakPoint = useMediaQuery("(max-width:600px)");
  return (
    <Box>
      <div
        style={{
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
          HOW IT WORKS
        </Typography>
        <hr
          style={{
            background: "#000",
            width: "11%",
            height: "1px",
            margin: "0px",
          }}
        />
      </div>
      <Grid container>
        <Grid
          size={{ xs: 12, sm: 8, md: 8, lg: 8 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <List
            sx={{
              paddingLeft: 2,
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
                        xs: "normal 400 14px/normal 'Inter'",
                        sm: "normal 400 16px/normal 'Inter'",
                        md: "normal 400 18px/normal 'Inter'",
                        lg: "normal 400 22px/normal 'Inter'",
                      },
                    }}
                  >
                    Step 1: Choose your subject and topic.
                  </Typography>
                }
              />
            </ListItem>
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
                        xs: "normal 400 14px/normal 'Inter'",
                        sm: "normal 400 16px/normal 'Inter'",
                        md: "normal 400 18px/normal 'Inter'",
                        lg: "normal 400 22px/normal 'Inter'",
                      },
                    }}
                  >
                    Step 2: Select the Question Type & Question Count
                  </Typography>
                }
              />
            </ListItem>
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
                        xs: "normal 400 14px/normal 'Inter'",
                        sm: "normal 400 16px/normal 'Inter'",
                        md: "normal 400 18px/normal 'Inter'",
                        lg: "normal 400 22px/normal 'Inter'",
                      },
                    }}
                  >
                    Step 3: Select the difficulty level (Easy, Medium, Hard)
                  </Typography>
                }
              />
            </ListItem>
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
                        xs: "normal 400 14px/normal 'Inter'",
                        sm: "normal 400 16px/normal 'Inter'",
                        md: "normal 400 18px/normal 'Inter'",
                        lg: "normal 400 22px/normal 'Inter'",
                      },
                    }}
                  >
                    Step 4: Enter any specific keywords or concepts you want to
                    focus on.
                  </Typography>
                }
              />
            </ListItem>
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
                        xs: "normal 400 14px/normal 'Inter'",
                        sm: "normal 400 16px/normal 'Inter'",
                        md: "normal 400 18px/normal 'Inter'",
                        lg: "normal 400 22px/normal 'Inter'",
                      },
                    }}
                  >
                    Step 5: Generate your custom MCQs with instant feedback and
                    explanations!
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 4, md: 4, lg: 4 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            width={`${videoBreakPoint ? "50%" : "100%"}`}
            height="auto"
            autoPlay
            loop
            muted
            controls={false}
          >
            <source src={McqGenVideo} type="video/mp4" />
          </video>
        </Grid>
      </Grid>
    </Box>
  );
};

export default McqWorks;
