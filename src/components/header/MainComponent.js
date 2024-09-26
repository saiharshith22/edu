import {
  Avatar,
  AvatarGroup,
  Button,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import playBtn from "../../assets/Images/Play icon.svg";
import image1 from "../../assets/Images/image1.png";
import image2 from "../../assets/Images/image2.png";
import image3 from "../../assets/Images/image3.png";
import image4 from "../../assets/Images/image4.png";
import avatar1 from "../../assets/Images/avatar1.png";
import avatar2 from "../../assets/Images/avatar2.png";
import avatar3 from "../../assets/Images/avatar3.png";
import laptopImg from "../../assets/Images/laptopImg.png";
import totalStu from "../../assets/Images/totalStu.png";
import AIimgage from "../../assets/Images/AIimage.png";
import StartIcon from "../../assets/Images/Group.svg";

const MainComponent = () => {
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
    <div>
      <Grid container spacing={2} sx={{ padding: "2rem" }}>
        <Grid item xs={8}>
          <Typography
            sx={{
              font: "normal 800 35px/normal 'Inter'",
              color: "#000",
              margin: "20px 0px 6px 0px",
            }}
          >
            Elevate Your Study Game with AI
          </Typography>
          <Typography
            sx={{
              font: "normal 500 33px/normal 'Inter'",
              color: "#595959",
              letterSpacing: "0.083px",
            }}
          >
            Transform Your Learning Experience
          </Typography>
          <Typography
            sx={{
              font: "normal 400 16px/normal 'Inter'",
              color: "#595959",
              letterSpacing: "0.024px",
              margin: "32px 0px 32px 0px",
            }}
          >
            Welcome to the future of learning. Discover a new way to study with
            our AI-powered educational platform. Upload your textbooks, browse
            our AI-driven bookstore, and harness the power of our AI Question
            Generator and MCQ Creator. Experience personalized, smarter study
            sessions designed just for you
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              margin: "50px 0px 50px 0px",
            }}
          >
            <Button
              sx={{ ...btnStyle, background: "#054BB4" }}
              variant="contained"
            >
              Get Started
            </Button>
            <div style={{ display: "flex", gap: "4px" }}>
              <img src={playBtn} alt="playBtn" height={20} width={20} />
              <span>See how it works?</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <AvatarGroup>
              <Avatar
                alt="avatar1"
                src={avatar1}
                sx={{ width: 38, height: 38 }}
              />
              <Avatar
                alt="avatar2"
                src={avatar2}
                sx={{ width: 38, height: 38 }}
              />
              <Avatar
                alt="avatar3"
                src={avatar3}
                sx={{ width: 38, height: 38 }}
              />
            </AvatarGroup>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                font: "normal 700 14px/normal 'Inter'",
                textAlign: "center",
                letterSpacing: "0.035px",
                alignItems: "flex-start",
              }}
            >
              <span>+10k</span>
              <span>Reviewers</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
            }}
          >
            <img src={image1} alt="image1" width={176.551} height={216.165} />
            <img src={image2} alt="image2" width={176.551} height={216.165} />
            <img src={image3} alt="image3" width={176.551} height={216.165} />
            <img src={image4} alt="image4" width={176.551} height={216.165} />
          </div>
        </Grid>
      </Grid>
      <Stack direction="row">
        <Grid item xs={4} sx={{ position: "relative" }}>
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
        <Grid item xs={4}>
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
        <Grid item xs={4}>
          <img src={AIimgage} alt="Ai_Image" />
        </Grid>
      </Stack>
    </div>
  );
};

export default MainComponent;
