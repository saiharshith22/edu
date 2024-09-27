import {
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
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
            font: "normal 500 33px/normal 'Inter'",
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
            width: "112px",
            height: "1px",
            margin: "0px",
          }}
        />
      </div>
      <Typography
        sx={{
          font: "normal 400 16px/normal 'Inter'",
          color: "#000",
          letterSpacing: "0.024px",
        }}
      >
        Explore our suite of innovative AI-powered tools designed to enhance
        teaching and learning. Each product is crafted to provide educators and
        students with the resources they need to succeed in a dynamic
        educational landscape.
      </Typography>
      <div
        style={{
          marginTop: "32px",
          marginBottom: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
        }}
      >
        {Product.map((item) => {
          return (
            <Card sx={{ maxWidth: 345 }}>
              {/* <CardMedia>{item.image} </CardMedia> */}
              <img src={item.image} alt="" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.text}
                </Typography>
              </CardContent>
              <CardActions>
                <div style={{ display: "flex" }}>
                  <Button>{item.learn}</Button>
                  <Button>
                    <img src={item.icon} alt="" />
                  </Button>
                </div>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureProduct;
