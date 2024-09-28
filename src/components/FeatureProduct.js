import {
  Box,
  Button,
  Card,
  CardContent,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Product from "../assets/Product";

const FeatureProduct = () => {
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
          FEATURED PRODUCTS
        </Typography>
        <hr
          style={{
            background: "#000",
            width: "11%",
            height: "1px",
            margin: "0px",
          }}
        />
      </div>
      <Typography
        sx={{
          font: {
            xs: "normal 400 12px/normal 'Inter'",
            sm: "normal 400 14px/normal 'Inter'",
            md: "normal 400 16px/normal 'Inter'",
            lg: "normal 400 16px/normal 'Inter'",
          },
          color: "#000",
          letterSpacing: "0.024px",
        }}
      >
        Explore our suite of innovative AI-powered tools designed to enhance
        teaching and learning. Each product is crafted to provide educators and
        students with the resources they need to succeed in a dynamic
        educational landscape.
      </Typography>
      <Grid
        container
        gap={{ sm: 2, lg: 5 }}
        sx={{
          p: { md: "20px", lg: "35px 100px" },
          justifyContent: "center",
        }}
      >
        {Product.map((item) => {
          return (
            <Grid sx={{ pt: "15px" }}>
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
                <CardContent
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
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
                  <Box>
                    <Button
                      sx={{ p: 0, textTransform: "none" }}
                      endIcon={<img src={item.icon} alt="right arrow" />}
                    >
                      {item.learn}
                    </Button>
                    <Button></Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default FeatureProduct;
