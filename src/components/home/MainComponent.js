import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Grid2 as Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import AIimgage from "../../assets/Images/AIimage.png";
import Vector from "../../assets/Images/Frame.png";
import StartIcon from "../../assets/Images/Group.svg";
import playBtn from "../../assets/Images/Play icon.svg";
import Start1 from "../../assets/Images/Start1.svg";
import AciLearn from "../../assets/Images/aci_learning_logo.png.png";
import avatar1 from "../../assets/Images/avatar1.png";
import avatar2 from "../../assets/Images/avatar2.png";
import avatar3 from "../../assets/Images/avatar3.png";
import DelhiPub from "../../assets/Images/delhi_public_world_school_kotputli__kotputli_logo.png.png";
import GTSch from "../../assets/Images/gtschool_logo.png.png";
import image1 from "../../assets/Images/image1.png";
import image2 from "../../assets/Images/image2.png";
import image3 from "../../assets/Images/image3.png";
import image4 from "../../assets/Images/image4.png";
import laptopImg from "../../assets/Images/laptopImg.png";
import MindIcon from "../../assets/Images/mind_research_institute_logo.png.png";
import totalStu from "../../assets/Images/totalStu.png";

import AllenIcon from "../../assets/Images/allen_career_institute_logo.png.png";
import AnatomyIcon from "../../assets/Images/anatomy_guru_logo.png.png";
import Unanet from "../../assets/Images/menu.svg";
import ThinkTacIcon from "../../assets/Images/thinktac_logo.png.png";

const MainComponent = () => {
  const textBreakPoint = useMediaQuery(
    "(min-width:600px) and (max-width:670px)"
  );
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

  let images = [
    { src: GTSch, alt: "GTSch" },
    { src: DelhiPub, alt: "DelhiPub" },
    { src: MindIcon, alt: "MindIcon" },
    { src: AciLearn, alt: "AciLearn" },
    { src: Vector, alt: "Vector" },
    { src: AllenIcon, alt: "AllenIcon" },
    { src: AnatomyIcon, alt: "AnatomyIcon" },
    { src: ThinkTacIcon, alt: "ThinkTacIcon" },
    { src: Unanet, alt: "Unanet" },
  ];

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
                margin: { xs: "0px 0px 6px 0px", sm: "20px 0px 6px 0px" },
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
              sx={{
                ...btnStyle,
                background: "#054BB4",
                height: { xs: "35px", md: "50px" },
              }}
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
      <Grid container sx={{ mt: "2rem" }} spacing={2}>
        <Grid
          size={{ xs: 12, sm: 5, md: 4, lg: 4, xl: 3 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-start" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              maxWidth: { xs: "200px", sm: "200px", lg: "260px" },
            }}
          >
            <Box
              component="img"
              src={laptopImg}
              alt="laptopImage"
              sx={{ width: { xs: "200px", sm: "200px", lg: "260px" } }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#CBAC15",
                padding: "20px",
                borderRadius: "30px",
                width: { sm: "60px", md: "70px", lg: "109px" },
                height: "139px",
                position: "absolute",
                left: "100%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Box
                component="img"
                src={totalStu}
                alt="studentImage"
                width={72}
                height={72}
                sx={{
                  marginBottom: "20px",
                }}
              />
              <Box sx={{ color: "white" }}>10 K</Box>
              <Box
                sx={{
                  color: "white",
                  textAlign: "center",
                  fontSize: { xs: "12px", md: "14px" },
                }}
              >
                Total Students
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 7, md: 8, lg: 4, xl: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            px: { xl: "15px" },
            pl: `${textBreakPoint && "25px"}`,
          }}
        >
          <Box
            component="img"
            sx={{
              display: { xs: "none", md: "block" },
              maxHeight: "90px",
              maxWidth: "95px",
            }}
            src={StartIcon}
            alt="StarIcon"
          />
          <Typography
            sx={{
              font: {
                xs: "normal 400 12px/normal 'Inter'",
                sm: "normal 400 14px/normal 'Inter'",
                md: "normal 400 16px/normal 'Inter'",
                lg: "normal 400 16px/normal 'Inter'",
              },
            }}
          >
            Transform the way you study with our comprehensive suite tools and
            experience the ultimate AI-driven educational platform tailored to
            enhance your study efficiency and success.
          </Typography>
          <Typography
            sx={{
              font: {
                xs: "normal 400 12px/normal 'Inter'",
                sm: "normal 400 14px/normal 'Inter'",
                md: "normal 400 16px/normal 'Inter'",
                lg: "normal 400 16px/normal 'Inter'",
              },
            }}
          >
            Join a community of learners who are enhancing their educational
            experience through the power of AI. Start your journey towards
            smarter studying today.
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, lg: 4, xl: 3 }}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", lg: "flex-end" },
            alignItems: "center",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                maxWidth: "95px",
                maxHeight: "70px",
                font: "normal 500 10.061px/normal Inter",
                color: "#E7E6E6",
                textAlign: "center",
                letterSpacing: "0.04px",
                borderRadius: "8.384px",
                background: "#054BB4",
                p: { xs: "5px", sm: "20px 15px" },
                position: "absolute",
                bottom: 0,
                transform: { xs: "translate(-30px)", sm: "translate(-50px)" },
              }}
            >
              <Typography>100 +</Typography>
              <Typography>AI Books</Typography>
            </Box>
            <Box
              component="img"
              sx={{
                width: { xs: "250px", sm: "300px", lg: "25vw" },
                height: { sm: "190px", lg: "15vw" },
                maxWidth: "300px",
                maxHeight: "190px",
              }}
              src={AIimgage}
              alt="Ai_Image"
            />
          </Box>
        </Grid>
      </Grid>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          marginTop: "65px",
          marginBottom: "30px",
        }}
      >
        <Box>
          <Typography
            sx={{
              font: {
                xs: "normal 500 18px/normal 'Inter'",
                sm: "normal 500 20px/normal 'Inter'",
                md: "normal 500 28px/normal 'Inter'",
                lg: "normal 500 33px/normal 'Inter'",
              },
              color: "#595959",
              letterSpacing: "0.083px",
              textAlign: "center",
            }}
          >
            Trusted by 100+ Companies Worldwide
          </Typography>
        </Box>
        <Grid
          container
          direction="row"
          sx={{ justifyContent: "center", width: "100%" }}
          gap={{ xs: 1, sm: 2, lg: 4 }}
        >
          {images.map((image) => {
            return (
              <Grid
                key={image}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  style={{ alignSelf: "center" }}
                  src={image.src}
                  alt={image.alt}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Box>
  );
};

export default MainComponent;
