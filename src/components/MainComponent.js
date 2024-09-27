import {
  Avatar,
  AvatarGroup,
  Button,
  Stack,
  Typography,
  Box,
  Grid2 as Grid,
  Grid as GridOld,
} from "@mui/material";
import React from "react";
import playBtn from "../assets/Images/Play icon.svg";
import image1 from "../assets/Images/image1.png";
import image2 from "../assets/Images/image2.png";
import image3 from "../assets/Images/image3.png";
import image4 from "../assets/Images/image4.png";
import avatar1 from "../assets/Images/avatar1.png";
import avatar2 from "../assets/Images/avatar2.png";
import avatar3 from "../assets/Images/avatar3.png";
import laptopImg from "../assets/Images/laptopImg.png";
import totalStu from "../assets/Images/totalStu.png";
import AIimgage from "../assets/Images/AIimage.png";
import StartIcon from "../assets/Images/Group.svg";
import Start1 from "../assets/Images/Start1.svg";
import GTSch from "../assets/Images/gtschool_logo.png.png";
import DelhiPub from "../assets/Images/delhi_public_world_school_kotputli__kotputli_logo.png.png";
import MindIcon from "../assets/Images/mind_research_institute_logo.png.png";
import AciLearn from "../assets/Images/aci_learning_logo.png.png";
import Vector from "../assets/Images/Frame.png";

import AllenIcon from "../assets/Images/allen_career_institute_logo.png.png";
import AnatomyIcon from "../assets/Images/anatomy_guru_logo.png.png";
import ThinkTacIcon from "../assets/Images/thinktac_logo.png.png";
import Unanet from "../assets/Images/menu.svg";

const MainComponent = () => {
  const avatarStyle = {
    width: "38px",
    height: "38px",
    borderRadius: "238.983px",
    border: "1px solid #fff",
  };
  const kreviews = {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    font: "normal 700 14px/normal 'InterBold'",
    textAlign: "center",
    letterSpacing: "0.035px",
    alignItems: "flex-start",
  };
  const btnStyle = {
    textTransform: "none",
    font: "normal 500 14px/normal 'Inter'",
    color: "19467E",
    letterSpacing: "0.168px",
    borderRadius: "30px",
    border: "1px solid #19467E",
    height: "50px",
    width: "150px",
  };
  return (
    <Box sx={{ pt: { xs: 0, md: "40px" } }}>
      <Grid container spacing={2}>
        <Grid
          size={{ xs: 12, sm: 8, xl: 9 }}
          container
          sx={{ position: "relative" }}
        >
          <Grid rowSpacing={1}>
            <Typography
              sx={{
                font: {
                  xs: "normal 800 22px/normal 'InterBold'",
                  sm: "normal 800 28px/normal 'InterBold'",
                  md: "normal 800 35px/normal 'InterBold'",
                  lg: "normal 800 47px/normal 'InterBold'",
                },
                color: "#000",
                margin: "20px 0px 6px 0px",
              }}
            >
              Elevate Your Study Game with AI
            </Typography>
            <Typography
              sx={{
                font: {
                  xs: "normal 600 16px/normal 'Inter'",
                  sm: "normal 600 20px/normal 'Inter'",
                  md: "normal 600 28px/normal 'Inter'",
                  lg: "normal 600 33px/normal 'Inter'",
                },
                color: "#595959",
                letterSpacing: "0.083px",
              }}
            >
              Transform Your Learning Experience
            </Typography>
            <Typography
              sx={{
                font: {
                  xs: "normal 400 12px/normal 'Inter'",
                  sm: "normal 400 14px/normal 'Inter'",
                  md: "normal 400 16px/normal 'Inter'",
                  lg: "normal 400 16px/normal 'Inter'",
                },
                color: "#595959",
                letterSpacing: "0.024px",
                margin: "32px 0px 32px 0px",
              }}
            >
              Welcome to the future of learning. Discover a new way to study
              with our AI-powered educational platform. Upload your textbooks,
              browse our AI-driven bookstore, and harness the power of our AI
              Question Generator and MCQ Creator. Experience personalized,
              smarter study sessions designed just for you
            </Typography>
          </Grid>
          <Grid
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Button
              sx={{ ...btnStyle, background: "#054BB4", height: "35px" }}
              variant="contained"
            >
              Get Started
            </Button>
            <div style={{ display: "flex", gap: "4px" }}>
              <img src={playBtn} alt="playBtn" height={20} width={20} />
              <span>See how it works?</span>
            </div>
          </Grid>
          <Grid
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <AvatarGroup>
                <Avatar alt="avatar1" src={avatar1} sx={avatarStyle} />
                <Avatar alt="avatar2" src={avatar2} sx={avatarStyle} />
                <Avatar alt="avatar3" src={avatar3} sx={avatarStyle} />
              </AvatarGroup>
              <div>
                <Typography sx={kreviews}>+10K</Typography>
                <Typography sx={kreviews}>Reviewers</Typography>
              </div>
            </div>
            <Box
              component="img"
              src={Start1}
              alt="Start1"
              sx={{
                position: "absolute",
                width: "100%",
                height: "auto",
                maxWidth: { xs: "70px", sm: "100px" },
                maxHeight: { xs: "70px", sm: "100px" },
                right: 0,
                bottom: 0,
              }}
            />
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, sm: 4, xl: 3 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(4, 1fr)", // 1 column on extra small screens
                sm: "repeat(2, 1fr)", // 2 columns on small screens
                md: "repeat(2, 1fr)", // 2 columns on medium screens
                lg: "repeat(2, 1fr)", // 4 columns on large screens
              },
              gap: 2, // gap between items
            }}
          >
            <Box
              component="img"
              src={image1}
              alt="image1"
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: "176px",
                maxHeight: "215px",
              }}
            />
            <Box
              component="img"
              src={image2}
              alt="image2"
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: "176px",
                maxHeight: "215px",
              }}
            />
            <Box
              component="img"
              src={image3}
              alt="image3"
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: "176px",
                maxHeight: "215px",
              }}
            />
            <Box
              component="img"
              src={image4}
              alt="image4"
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: "176px",
                maxHeight: "215px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Stack direction="row">
        <Grid size={{ xs: 4 }} sx={{ position: "relative" }}>
          <img src={laptopImg} alt="laptopImage" width={257} height={322} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#CBAC15",
              padding: "20px",
              borderRadius: "30px",
              width: "109px",
              height: "139px",
              position: "absolute",
              top: "20%",
              left: "84%",
            }}
          >
            <img
              src={totalStu}
              alt="studentImage"
              width={72}
              height={72}
              style={{
                marginBottom: "20px",
              }}
            />
            <span style={{ color: "white" }}>10 K</span>
            <span style={{ color: "white" }}>Total Students</span>
          </div>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <img src={StartIcon} alt="StarIcon" />
          <Typography>
            Transform the way you study with our comprehensive suite tools and
            experience the ultimate AI-driven educational platform tailored to
            enhance your study efficiency and success.
          </Typography>
          <Typography>
            Join a community of learners who are enhancing their educational
            experience through the power of AI. Start your journey towards
            smarter studying today.
          </Typography>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <img src={AIimgage} alt="Ai_Image" />
        </Grid>
      </Stack>

      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <Box>
          <Typography
            sx={{
              font: "normal 500 33px/normal 'Inter'",
              color: "#595959",
              letterSpacing: "0.083px",
              textAlign: "center",
            }}
          >
            Trusted by 100+ Companies Worldwide
          </Typography>
        </Box>
        <Stack
          direction="row"
          sx={{ gap: "32px", justifyContent: "center", width: "100%" }}
        >
          <img
            height={54.202}
            style={{ alignSelf: "center" }}
            src={GTSch}
            alt="GTSch"
          />
          <img
            height={84}
            style={{ alignSelf: "center" }}
            src={DelhiPub}
            alt="DelhiPub"
          />
          <img
            height={68}
            style={{ alignSelf: "center" }}
            src={MindIcon}
            alt="MindIcon"
          />
          <img
            width={117}
            height={49}
            style={{ alignSelf: "center" }}
            src={AciLearn}
            alt="AciLearn"
          />

          <img
            width={125}
            height={59}
            style={{ alignSelf: "center" }}
            src={Vector}
            alt="Vector"
          />

          <img
            height={77}
            style={{ alignSelf: "center" }}
            src={AllenIcon}
            alt="AllenIcon"
          />
          <img
            height={84}
            style={{ alignSelf: "center" }}
            src={AnatomyIcon}
            alt="AnatomyIcon"
          />
          <img
            height={84}
            style={{ alignSelf: "center" }}
            src={ThinkTacIcon}
            alt="ThinkTacIcon"
          />
          <img
            height={22}
            width={150}
            style={{ alignSelf: "center" }}
            src={Unanet}
            alt="Unanet"
          />
        </Stack>
      </div> */}
    </Box>
  );
};

export default MainComponent;
