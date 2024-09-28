import React from "react";
import { McqUniList1, McqUniList2 } from "../assets/McqUniList";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid2 as Grid,
  Stack,
} from "@mui/material";

const McqWhoIsIt = () => {
  return (
    <Grid
      container
      sx={{
        paddingTop: "50px",
        paddingBottom: "50px",
        gap: "24px",
      }}
    >
      <Grid
        size={12}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            font: {
              xs: "normal 500 18px/normal 'Inter'",
              sm: "normal 500 20px/normal 'Inter'",
              md: "normal 500 25px/normal 'Inter'",
              lg: "normal 500 33px/normal 'Inter'",
            },
            color: "#5A5C5F",
            letterSpacing: "0.083px",
            paddingLeft: "10px",
          }}
        >
          WHO IS IT FOR?
        </Typography>
        <hr
          style={{
            background: "#000",
            width: "92px",
            height: "1px",
            margin: "0px",
          }}
        />
      </Grid>

      <Grid>
        <Typography
          sx={{
            font: {
              xs: "normal 400 15px/normal 'Inter'",
              sm: "normal 400 17px/normal 'Inter'",
              md: "normal 400 19px/normal 'Inter'",
              lg: "normal 400 23px/normal 'Inter'",
            },
            color: "#000",
            paddingLeft: "10px",
            paddingBottom: "50px",
          }}
        >
          The EduTech AI MCQ Generator is designed for
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={{
          justifyContent: "center",
        }}
        container
        spacing={3}
      >
        {McqUniList1.map((item) => {
          return (
            <Grid display="flex" size={{ md: 4 }} sx={{ padding: "50px" }}>
              <Card
                sx={{
                  //maxWidth: 345,
                  maxWidth: "270px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                {/* <CardMedia>{item.image} </CardMedia> */}
                <img
                  style={{
                    maxWidth: "180px",
                    maxHeight: "180px",
                    padding: "0px 0px 20px 0px",
                  }}
                  src={item.image}
                  alt=""
                />
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography
                  sx={{ p: "15px", textAlign: "center" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {item.text}
                </Typography>
              </Card>
            </Grid>
          );
        })}
        {McqUniList2.map((item) => {
          return (
            <Grid display="flex" size={{ md: 4 }} padding={"0px 50px 0px 50px"}>
              <Card
                sx={{
                  maxWidth: "270px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                {/* <CardMedia>{item.image} </CardMedia> */}
                <img
                  style={{
                    maxWidth: "180px",
                    maxHeight: "180px",
                    padding: "0px 0px 20px 0px",
                  }}
                  src={item.image}
                  alt=""
                />
                <CardContent>
                  <Typography
                    sx={{ textAlign: "center" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{ p: "15px", textAlign: "center" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default McqWhoIsIt;
