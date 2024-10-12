import React from "react";
import {
  Grid2 as Grid,
  Typography,
  IconButton,
  Link,
  Box,
  Divider,
  Stack,
} from "@mui/material";
import FacebookIcon from "../../assets/Images/facebook.svg";
import TwitterIcon from "../../assets/Images/twitter.svg";
import LinkedInIcon from "../../assets/Images/linkedin.svg";
import InstagramIcon from "../../assets/Images/instagram.svg";
import { Email, Phone } from "@mui/icons-material";

let footerItems = [
  {
    title: "Company",
    items: ["About Us", "Services", "Community", "Testimonial"],
  },
  {
    title: "Support",
    items: ["Help Center", "Tweet @ Us", "Webinars", "FAQ"],
  },
  {
    title: "Links",
    items: [
      "AI Question Generator",
      "AI MCQ Generator",
      "AI Interview",
      "AI Featured Products",
    ],
  },
];

const Footer = () => {
  return (
    <Box component="footer">
      <Divider sx={{ my: "50px" }} />
      <Grid container spacing={{ xs: 6, sm: 3 }} justifyContent="space-between">
        {/* EduTechAI Brand Section */}
        <Grid size={{ xs: 6, sm: 3, md: 2 }}>
          <Stack direction="row">
            <Typography
              sx={{
                color: "#4a4b4c",
                font: {
                  xs: "normal 700 18px/normal 'MontserratBold'",
                  sm: "normal 700 20px/normal 'MontserratBold'",
                  md: "normal 700 28px/normal 'MontserratBold'",
                  lg: "normal 700 33px/normal 'MontserratBold'",
                },
              }}
            >
              EduTech
            </Typography>
            <Typography
              sx={{
                color: "#19467e",
                font: {
                  xs: "normal 700 18px/normal 'MontserratBold'",
                  sm: "normal 700 20px/normal 'MontserratBold'",
                  md: "normal 700 28px/normal 'MontserratBold'",
                  lg: "normal 700 33px/normal 'MontserratBold'",
                },
              }}
            >
              AI
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              mt: 2,
              font: {
                xs: "normal 400 12px/normal 'Inter'",
                sm: "normal 400 14px/normal 'Inter'",
                md: "normal 400 16px/normal 'Inter'",
                lg: "normal 400 16px/normal 'Inter'",
              },
              color: "#5A5C5F",
              maxWidth: "190px",
            }}
          >
            Unlock your potential with AI-Driven Learning
          </Typography>
          <Box sx={{ mt: 3 }}>
            <IconButton href="#" color="primary">
              <img src={FacebookIcon} alt="Facebook icon" />
            </IconButton>
            <IconButton href="#" color="primary">
              <img src={TwitterIcon} alt="Twitter icon" />
            </IconButton>
            <IconButton href="#" color="primary">
              <img src={LinkedInIcon} alt="LinkedIn icon" />
            </IconButton>
            <IconButton href="#" color="primary">
              <img src={InstagramIcon} alt="Instagram icon" />
            </IconButton>
          </Box>
        </Grid>

        {footerItems.map((footerItem, i) => {
          return (
            <Grid size={{ xs: 6, sm: 3, md: 2 }} key={footerItem.title + i}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  font: {
                    xs: "normal 500 14px/normal 'InterBold'",
                    sm: "normal 500 16px/normal 'InterBold'",
                    md: "normal 500 18px/normal 'InterBold'",
                    lg: "normal 500 22px/normal 'InterBold'",
                  },
                  mb: "15px",
                }}
              >
                {footerItem.title}
              </Typography>
              {footerItem.items.map((item, i) => {
                return (
                  <Link
                    key={footerItem.title + i}
                    href="#"
                    underline="none"
                    sx={{
                      display: "block",
                      mt: 1,
                      font: {
                        xs: "normal 500 12px/normal 'Inter'",
                        sm: "normal 500 14px/normal 'Inter'",
                        md: "normal 500 16px/normal 'Inter'",
                        lg: "normal 500 19px/normal 'Inter'",
                      },
                      color: "#5A5C5F",
                    }}
                  >
                    {item}
                  </Link>
                );
              })}
            </Grid>
          );
        })}

        {/* Contact Us Section */}
        <Grid item xs={6} md={3}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              font: {
                xs: "normal 500 14px/normal 'InterBold'",
                sm: "normal 500 16px/normal 'InterBold'",
                md: "normal 500 18px/normal 'InterBold'",
                lg: "normal 500 22px/normal 'InterBold'",
              },
            }}
          >
            Contact Us
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Phone fontSize="small" sx={{ mr: 1, color: "#054BB4" }} />
            <Typography
              sx={{
                font: {
                  xs: "normal 500 12px/normal 'Inter'",
                  sm: "normal 500 14px/normal 'Inter'",
                  md: "normal 500 16px/normal 'Inter'",
                  lg: "normal 500 19px/normal 'Inter'",
                },
                color: "#5A5C5F",
              }}
            >
              (91) 98763 52690
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Email fontSize="small" sx={{ mr: 1, color: "#054BB4" }} />
            <Typography
              sx={{
                font: {
                  xs: "normal 500 12px/normal 'Inter'",
                  sm: "normal 500 14px/normal 'Inter'",
                  md: "normal 500 16px/normal 'Inter'",
                  lg: "normal 500 19px/normal 'Inter'",
                },
                color: "#5A5C5F",
              }}
            >
              support@gmail.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Stack
        direction="row"
        sx={{ mt: "40px", display: "flex", justifyContent: "space-between" }}
      >
        <Typography
          sx={{
            font: {
              xs: "normal 500 12px/normal 'Inter'",
              sm: "normal 500 12px/normal 'Inter'",
              md: "normal 500 14px/normal 'Inter'",
              lg: "normal 500 14px/normal 'Inter'",
            },
            color: "#5A5C5F",
            letterSpacing: "0.021px",
          }}
        >
          Copyright @ EduTechAI
        </Typography>
        <Stack direction="row" gap={2}>
          <Typography
            sx={{
              font: {
                xs: "normal 500 12px/normal 'Inter'",
                sm: "normal 500 12px/normal 'Inter'",
                md: "normal 500 14px/normal 'Inter'",
                lg: "normal 500 14px/normal 'Inter'",
              },
              color: "#5A5C5F",
              letterSpacing: "0.021px",
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            sx={{
              font: {
                xs: "normal 500 12px/normal 'Inter'",
                sm: "normal 500 12px/normal 'Inter'",
                md: "normal 500 14px/normal 'Inter'",
                lg: "normal 500 14px/normal 'Inter'",
              },
              color: "#5A5C5F",
              letterSpacing: "0.021px",
            }}
          >
            Terms of Use
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
