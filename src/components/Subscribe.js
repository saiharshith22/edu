import {
  Box,
  Button,
  Grid2 as Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SubscribeImg from "../assets/Images/subscribe.png";

const Subscribe = () => {
  return (
    <Grid container spacing={3} sx={{ marginTop: "50px" }}>
      <Grid size={{ sm: 6 }} sx={{ display: "flex", alignItems: "flex-end" }}>
        <Box
          component="img"
          src={SubscribeImg}
          alt="testimonial-img"
          sx={{
            maxWidth: "566px",
            width: "100%",
            maxHeight: { xs: "40vh", sm: "100%" },
          }}
        />
      </Grid>
      <Grid size={{ sm: 6 }} display="flex" alignItems="center">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box>
            <Typography
              sx={{
                font: {
                  xs: "normal 700 16px/normal 'Inter'",
                  sm: "normal 700 22px/normal 'Inter'",
                  md: "normal 700 26px/normal 'Inter'",
                  lg: "normal 700 38px/normal 'Inter'",
                },
                color: "#000",
                letterSpacing: "0.095px",
                mb: "20px",
              }}
            >
              Subscribe to our news letter to get updates to our latest
              collections
            </Typography>
            <Typography
              sx={{
                font: {
                  xs: "normal 400 12px/normal 'Inter'",
                  sm: "normal 400 14px/normal 'Inter'",
                  md: "normal 400 18px/normal 'Inter'",
                  lg: "normal 400 25px/normal 'Inter'",
                },
                color: "#5A5C5F",
              }}
            >
              Get 20% off on our featured products just by subscribing to our
              newsletter
            </Typography>
            <Box
              sx={{
                marginTop: "25px",
                borderRadius: "100px",
                border: "1px solid #D6D6D6",
                background: "#FFFEFE",
                height: "50px",
                display: "flex",
                alignItems: "center",
                padding: "0 25px",
                position: "relative",
                maxWidth: "400px",
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Enter your mail"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-input::placeholder": {
                    font: "normal 500 16px/normal 'Inter'",
                    color: "#534D4D",
                    letterSpacing: "0.024px",
                    opacity: 1,
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: 0,
                  },
                  width: "calc(100% - 80px)",
                }}
              />
              <Button
                variant="contained"
                sx={{
                  borderRadius: "100px",
                  border: "1px solid #054BB4",
                  background: "#054BB4",
                  position: "absolute",
                  right: 0,
                  height: "100%",
                  textTransform: "none",
                  width: "100px",
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Subscribe;
