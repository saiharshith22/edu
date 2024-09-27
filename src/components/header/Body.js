import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import PlayButton from "../../assets/Images/Play icon.svg";
import Group from "../../assets/Images/Group.svg";

const Body = () => {
  const avatarStyle = {
    width: "38px",
    height: "38px",
    borderRadius: "238.983px",
    border: "1px solid #fff",
  };

  const kreview = {
    color: "#000",
    textAlign: "center",
    //fontFamily: "'Inter', sans-serif",
    fontFamily: "normal 700 14px/normal 'Inter'",
    fontWeight: 700,
    letterSpacing: "0.035px",
    display: "flex",
    width: "72px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "var(--Spacing-Roles-Spacing-between-small-element, 4px)",
  };

  const btnStyle = {
    textTransform: "none",
    color: "#FFF",
    fontFamily: "normal 500 14px/normal 'Inter'",
    letterSpacing: "0.175px",
    display: "flex",
    height: { md: "30px", lg: "50px" },
    width: { md: "70px", lg: "150px" },
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    borderRadius: "32px",
    background: " #054BB4",
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Box>
            <Typography
              sx={{
                color: "#000",
                fontFamily: "Inter",
                fontSize: "47px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "normal",
              }}
              gutterBottom
            >
              Elevate Your Study Game with AI
            </Typography>
            <Typography
              sx={{
                color: "#595959",
                fontFamily: "Inter",
                fontSize: "33px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                letterSpacing: "0.083px",
              }}
              gutterBottom
            >
              Transform Your Learning Experience
            </Typography>
            <Typography
              sx={{
                color: "#595959",
                fontFamily: "Inter",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                letterSpacing: "0.024px",
              }}
              gutterBottom
            >
              Welcome to the future of learning. Discover a new way to study
              with our AI-powered educational platform. Upload your textbooks,
              browse our AI-driven bookstore, and harness the power of our AI
              Question Generator and MCQ Creator. Experience personalized,
              smarter study sessions designed just for you.
            </Typography>
          </Box>

          <Stack direction="row" sx={{ gap: "1rem" }}>
            <Button
              sx={{ ...btnStyle, backgroundColor: "#054BB4", color: "#fff" }}
              variant="contained"
            >
              Get Started
            </Button>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button sx={{ padding: 0, minWidth: "auto" }} aria-label="Play">
                <img
                  src={PlayButton}
                  alt="Play Button"
                  style={{ width: "20px", height: "20px" }}
                />
              </Button>
              <Typography
                sx={{
                  color: "#000",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  letterSpacing: "0.175px",
                }}
              >
                See how it works?
              </Typography>
            </Box>
          </Stack>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Left section with AvatarGroup and Reviewers */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AvatarGroup>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={avatarStyle}
                />
                <Avatar
                  alt="Travis Howard"
                  src="/static/images/avatar/2.jpg"
                  sx={avatarStyle}
                />
                <Avatar
                  alt="Cindy Baker"
                  src="/static/images/avatar/3.jpg"
                  sx={avatarStyle}
                />
              </AvatarGroup>
              <Stack
              // sx={{
              //   display: "flex",
              //   flexDirection: "column",
              //   alignItems: "flex-start",
              // }}
              >
                <Typography sx={kreview}>+10K</Typography>
                <Typography sx={kreview}>Reviewers</Typography>
              </Stack>
            </Box>
            <Box>
              <img src={Group} alt="Group" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5}></Grid>
      </Grid>
    </Box>
  );
};

export default Body;
