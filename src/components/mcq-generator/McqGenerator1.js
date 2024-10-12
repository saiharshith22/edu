import {
  Box,
  Button,
  Grid2 as Grid,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React from "react";

const McqGenerator1 = () => {
  //Upload style
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    //height: 1,
    overflow: "hidden",
    position: "absolute",
    //bottom: 0,
    //left: 0,
    whiteSpace: "nowrap",
    //width: 1,
  });

  return (
    <div style={{ padding: "50px 0px 0px 0px" }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          //padding: "50px 0px 0px 0px",
        }}
      >
        <Grid
          size={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              font: {
                xs: "normal 600 14px/normal 'InterBold'",
                sm: "normal 600 16px/normal 'InterBold'",
                md: "normal 600 18px/normal 'InterBold'",
                lg: "normal 600 22px/normal 'InterBold'",
              },
              color: "#000",
              textAlign: "center",
              margin: "0px 0px 8px 0px",
            }}
          >
            MCQ Generator: Create, Customize, and Assess Knowledge Effortlessly
          </Typography>
          <Typography
            sx={{
              font: {
                xs: "normal 500 12px/normal 'Inter'",
                sm: "normal 500 14px/normal 'Inter'",
                md: "normal 500 16px/normal 'Inter'",
                lg: "normal 500 19px/normal 'Inter'",
              },
              color: "#5A5C5F",
              textAlign: "center",
              letterSpacing: "0.03px",
              margin: "0px 0px 32px 0px",
            }}
          >
            Generate Questions like MCQ, True or False, Fill in the blanks etc
            using AI
          </Typography>
          <Typography
            sx={{
              font: {
                xs: "normal 500 12px/normal 'Inter'",
                sm: "normal 500 14px/normal 'Inter'",
                md: "normal 500 16px/normal 'Inter'",
                lg: "normal 500 16px/normal 'Inter'",
              },
              color: "#5A5C5F",
              letterSpacing: "0.024px",
              margin: "0px 0px 14px 0px",
            }}
          >
            Free Plan: Support{" "}
            <span style={{ color: "#000", fontWeight: 600 }}>50 MCQs</span>{" "}
            count for{" "}
            <span style={{ color: "#000", fontWeight: 600 }}>30 days</span>
          </Typography>
          <Typography
            sx={{
              font: {
                xs: "normal 500 12px/normal 'Inter'",
                sm: "normal 500 14px/normal 'Inter'",
                md: "normal 500 16px/normal 'Inter'",
                lg: "normal 500 16px/normal 'Inter'",
              },
              color: "#5A5C5F",
              letterSpacing: "0.024px",
              margin: "0px 0px 14px 0px",
            }}
          >
            Upgrade to{" "}
            <span style={{ color: "#000", fontWeight: 600 }}>
              Subscription Package
            </span>{" "}
            to get high MCQ count!
          </Typography>
          <Typography
            sx={{
              font: {
                xs: "normal 500 12px/normal 'Inter'",
                sm: "normal 500 14px/normal 'Inter'",
                md: "normal 500 16px/normal 'Inter'",
                lg: "normal 500 16px/normal 'Inter'",
              },
              color: "#5A5C5F",
              letterSpacing: "0.024px",
              margin: "0px 0px 44px 0px",
            }}
          >
            Min word count for content:{" "}
            <span style={{ color: "#000", fontWeight: 600 }}>200</span>
          </Typography>
        </Grid>
        {/* upload, url */}
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Grid size={{ xs: "12", sm: "6", md: "5", lg: "5" }}>
            <Button
              component="label"
              role={undefined}
              variant="outlined"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
              sx={{
                textTransform: "none",
                font: "normal 400 14px/normal 'Inter'",
                color: "#000000",
                letterSpacing: "0.168px",
                borderRadius: "4px",
                border: "0.5px solid #5A5C5F",
                height: { md: "20px", lg: "28px" },
                width: { md: "150px", lg: "252px" },
              }}
            >
              Upload a file
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => console.log(event.target.files)}
                multiple
              />
            </Button>
          </Grid>
          <Grid size={{ xs: "12", sm: "2", md: "2", lg: "2" }}>
            <Typography
              sx={{
                font: {
                  xs: "normal 400 12px/normal 'Inter'",
                  sm: "normal 400 14px/normal 'Inter'",
                  md: "normal 400 16px/normal 'Inter'",
                  lg: "normal 400 16px/normal 'Inter'",
                },
                color: "#000",
                textAlign: "center",
                letterSpacing: "0.024px",
              }}
            >
              OR
            </Typography>
          </Grid>
          <Grid size={{ xs: "12", sm: "4", md: "5", lg: "5" }}>
            <Box
              sx={{
                display: "flex",
                //padding: "6px 10px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                border: "0.5px solid #5A5C5F",
                width: { md: "150px", lg: "252px" },
                height: { md: "20px", lg: "28px" },
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Enter the URL"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-input": {
                    textAlign: "center",
                    letterSpacing: "0.021px",
                    opacity: 1,
                  },
                  "& .MuiInputBase-input::placeholder": {
                    font: "normal 400 14px/normal 'Inter'",
                    color: "#5A5C5F",
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: 0,
                  },
                  width: "100%",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default McqGenerator1;
