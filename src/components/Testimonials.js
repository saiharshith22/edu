import { Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import TestimonialImg from "../assets/Images/testimonial-img.svg";

const Testimonials = () => {
  return (
    <Box>
      <Grid container>
        <Grid
          size={{ xs: 12 }}
          sx={{
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
                xs: "normal 500 18px/normal 'Inter'",
                sm: "normal 500 20px/normal 'Inter'",
                md: "normal 500 28px/normal 'Inter'",
                lg: "normal 500 33px/normal 'Inter'",
              },
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
              width: "11%",
              height: "1px",
              margin: "0px",
            }}
          />
        </Grid>
        <Grid size={{ sm: 6 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box>
              <Typography
                sx={{
                  font: {
                    xs: "normal 500 12px/normal 'Inter'",
                    sm: "normal 500 12px/normal 'Inter'",
                    md: "normal 500 14px/normal 'Inter'",
                    lg: "normal 500 14px/normal 'Inter'",
                  },
                  color: "#5A5C5F",
                }}
              >
                1 day ago
              </Typography>
            </Box>
            <Typography
              sx={{
                font: {
                  xs: "italic 400 16px/normal 'Inter'",
                  sm: "italic 400 18px/normal 'Inter'",
                  md: "italic 400 26px/normal 'Inter'",
                  lg: "italic 400 30px/normal 'Inter'",
                },
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
            <Typography
              sx={{
                font: {
                  xs: "italic 400 14px/normal 'InterBold'",
                  sm: "italic 400 16px/normal 'InterBold'",
                  md: "italic 400 18px/normal 'InterBold'",
                  lg: "italic 400 22px/normal 'InterBold'",
                },
                color: "#000",
                letterSpacing: "0.035px",
              }}
            >
              JessicaL, Online Course Creator
            </Typography>
          </Box>
        </Grid>
        <Grid
          size={{ sm: 6 }}
          sx={{ display: "flex", alignItems: "flex-start" }}
        >
          <Box
            component="img"
            src={TestimonialImg}
            alt="testimonial-img"
            sx={{ maxWidth: "566px", width: "100%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimonials;
