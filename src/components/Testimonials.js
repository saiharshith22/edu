import { Typography } from "@mui/material";
import React from "react";
import Star2 from "../assets/Images/Frame 261.png";
import Rectangle1 from "../assets/Images/Rectangle1.png";
import Rectangle2 from "../assets/Images/Rectangle2.png";
import Rectangle3 from "../assets/Images/Rectangle3.png";

const Testimonials = () => {
  return (
    <div>
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
            font: "normal 500 33px/normal 'Inter'",
            color: "#5A5C5F",
            letterSpacing: "0.083px",
            margin: "0px",
          }}
        >
          TESTIMONIALS
        </Typography>
        <hr
          style={{
            background: "#000",
            width: "132px",
            height: "1px",
            margin: "0px",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <div>
            <img src={Star2} alt="" />
          </div>
          <div>
            <Typography
              sx={{
                font: "italic 400 30px/normal 'Inter'",
                color: "#5A5C5F",
                letterSpacing: "0.075px",
              }}
            >
              “The AI- powered education tools have streamlined the content
              creation processfor my online courses. The ability to generate
              diverse and accurate questions instantly has not only saved me
              time but also improved the quality of my courses. My students
              appreciate the detailed feedback and explanations provided by the
              AI”
            </Typography>
          </div>
          <div>
            <Typography
              style={{
                font: "italic 400 23px/normal 'Inter'",
                color: "#000",
                letterSpacing: "0.035px",
              }}
            >
              JessicaL, Online Course Creator
            </Typography>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", width: "50%" }}>
          <img src={Rectangle1} alt="Rectangle1" />
          <img src={Rectangle2} alt="Rectangle2" />
          <img src={Rectangle3} alt="Rectangle3" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
