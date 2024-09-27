import { Grid, Typography } from "@mui/material";
import React from "react";
import Yellowimg from "../assets/Images/yellow.png";
import Greyimg from "../assets/Images/gray.png";
import Purple1 from "../assets/Images/purple1.png";
import Purple2 from "../assets/Images/purple2.png";
import Blueimg from "../assets/Images/blue.png";
import Violetimg from "../assets/Images/violet.png";

const About = () => {
  const typotext = {
    font: "normal 500 16px/normal 'Inter'",
    color: "#5A5C5F",
    letterSpacing: "0.024px",
    marginTop: "32px",
    marginBottom: "24px",
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <div>
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <img
              width={192}
              height={272}
              style={{ marginLeft: "12px" }}
              src={Yellowimg}
              alt="Yellowimg"
            />
            <img
              width={300}
              height={220}
              style={{ marginTop: "28px" }}
              src={Greyimg}
              alt="Greyimg"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <img
              width={109}
              height={194}
              style={{ marginTop: "12px", marginBottom: "12px" }}
              src={Purple1}
              alt="Purple1"
            />
            <img
              width={150}
              height={150}
              style={{ marginTop: "34px", marginBottom: "34px" }}
              src={Purple2}
              alt="Purple2"
            />
            <img width={222} height={333} src={Blueimg} alt="Blueimg" />
          </div>
          <div>
            <img width={270} height={180} src={Violetimg} alt="Violetimg" />
          </div>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <hr
            style={{
              background: "#000",
              width: "92px",
              height: "1px",
              margin: "0px",
            }}
          />
          <Typography
            sx={{
              font: "normal 500 33px/normal 'Inter'",
              color: "#5A5C5F",
              letterSpacing: "0.083px",
              margin: "0px",
            }}
          >
            ABOUT US
          </Typography>
        </div>
        <Typography
          sx={{
            font: "normal 500 47px/normal 'Inter'",
            color: "#000",
            marginTop: "16px",
          }}
        >
          Who We Are?
        </Typography>
        <Typography sx={typotext}>
          Welcome to EduTechAI, where innovation meets education. We are a
          dynamic team of educators, technologists, and AI enthusiasts dedicated
          to transforming the learning experience through cutting-edge
          artificial intelligence.
        </Typography>
        <Typography sx={typotext}>
          At EduTechAI, we believe in the power of technology to enhance
          education and make learning accessible, personalized, and engaging for
          everyone. Our mission is to equip educators and students with the
          tools they need to succeed in an ever-evolving academic landscape.
        </Typography>
        <Typography
          sx={{
            font: "normal 500 47px/normal 'Inter'",
            color: "#000",
            marginTop: "40px",
            marginBottom: "24px",
          }}
        >
          Our Vision
        </Typography>
        <Typography sx={typotext}>
          Our vision is to redefine education by harnessing the capabilities of
          AI to deliver intelligent, adaptive, and individualized learning
          experiences. We strive to bridge the gap between traditional
          educational methods and the limitless possibilities offered by modern
          technology.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
