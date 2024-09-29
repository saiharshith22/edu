import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid2 as Grid,
  Typography,
} from "@mui/material";

const CustomCard = (props) => {
  const { item, showLearnMore } = props;
  return (
    <Card
      sx={{
        maxWidth: "280px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "none",
        border: "1px solid #E2E0E0",
        height: "100%",
      }}
    >
      <Box
        component="img"
        src={item.image}
        alt=""
        sx={{ maxWidth: { xs: "90px", lg: "180px" }, mt: "20px" }}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography
          gutterBottom
          sx={{
            font: {
              xs: "normal 500 14px/normal 'InterBold'",
              sm: "normal 500 16px/normal 'InterBold'",
              md: "normal 500 18px/normal 'InterBold'",
              lg: "normal 500 22px/normal 'InterBold'",
            },
            textAlign: "center",
            color: "#000",
          }}
        >
          {item.title}
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
          {item.text}
        </Typography>
        {showLearnMore && (
          <Box>
            <Button
              sx={{ p: 0, textTransform: "none" }}
              endIcon={<img src={item.icon} alt="right arrow" />}
            >
              {item.learn}
            </Button>
            <Button></Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
