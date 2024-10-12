import { Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import Product from "../../utils/Product";
import CustomCard from "../customComponents/CustomCard";

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
            <Grid sx={{ pt: "15px" }} key={item.title}>
              <CustomCard item={item} showLearnMore={true} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default FeatureProduct;
