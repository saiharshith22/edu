import { Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import ClientIcon from "../../assets/Images/clients-icon.svg";
import CountriesIcon from "../../assets/Images/countries-icon.svg";
import ExperienceIcon from "../../assets/Images/experience-icon.svg";

const Achievements = () => {
  const achievementsData = [
    {
      img: ClientIcon,
      totalNumber: "5K +",
      title: "Clients",
      subText: "We have 5 thousand and more clients around the world",
    },
    {
      img: CountriesIcon,
      totalNumber: "15+",
      title: "Countries",
      subText: "Our clients are spread over 15 countries around the world",
    },
    {
      img: ExperienceIcon,
      totalNumber: "5+",
      title: "Years of Experience",
      subText:
        "More than 5 years of experiences make sure you choose our services",
    },
  ];
  return (
    <Grid container sx={{ mt: "50px" }} rowGap={6}>
      <Grid size={{ xs: 12 }}>
        <Typography
          sx={{
            font: {
              xs: "normal 500 18px/normal 'InterBold'",
              sm: "normal 500 20px/normal 'InterBold'",
              md: "normal 500 28px/normal 'InterBold'",
              lg: "normal 500 33px/normal 'InterBold'",
            },
            color: "#000",
            letterSpacing: "0.083px",
            textAlign: "center",
          }}
        >
          Our Achievements
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }} container rowGap={3} justifyContent="center">
        {achievementsData.map((item) => (
          <Grid
            size={{ xs: 6, sm: 4 }}
            gap={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={item.img}
              alt={item.img}
              height="50px"
              width="50px"
            />
            <Typography
              sx={{
                font: {
                  xs: "normal 700 18px/normal 'Inter'",
                  sm: "normal 700 20px/normal 'Inter'",
                  md: "normal 700 28px/normal 'Inter'",
                  lg: "normal 700 33px/normal 'Inter'",
                },
              }}
            >
              {item.totalNumber}
            </Typography>
            <Typography
              sx={{
                font: {
                  xs: "normal 500 14px/normal 'InterBold'",
                  sm: "normal 500 16px/normal 'InterBold'",
                  md: "normal 500 18px/normal 'InterBold'",
                  lg: "normal 500 22px/normal 'InterBold'",
                },
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                maxWidth: "70%",
                font: {
                  xs: "normal 400 12px/normal 'Inter'",
                  sm: "normal 400 14px/normal 'Inter'",
                  md: "normal 400 16px/normal 'Inter'",
                  lg: "normal 400 16px/normal 'Inter'",
                },
                color: "#5A5C5F",
              }}
            >
              {item.subText}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Achievements;
