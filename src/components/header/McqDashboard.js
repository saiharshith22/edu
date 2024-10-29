import {
  Box,
  Button,
  Grid2 as Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import CalendarIcon from "../../assets/Images/299092_calendar_icon 1.svg";
import BellIcon from "../../assets/Images/bell icon.svg";
import FrameIcon from "../../assets/Images/Frame 634.svg";
import searchIcon from "../../assets/Images/ic_outline-search icon.svg";
import UserIcon from "../../assets/Images/User.svg";
const McqDashboard = () => {
    //not using now
  return (
    <div style={{ margin: "50px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "4rem", sm: "10rem", md: "12rem", lg: "14rem" },
        }}
      >
        <TextField
          type="search"
          sx={{
            font: {
              xs: "normal 400 12px/normal 'Inter'",
              sm: "normal 400 14px/normal 'Inter'",
              md: "normal 400 16px/normal 'Inter'",
              lg: "normal 400 16px/normal 'Inter'",
            },
            letterSpacing: "0.04px",
            backgroundColor: "rgba(238, 238, 238, 0.75)",
            borderRadius: "32px",
            "& .MuiInputBase-root": {
              border: "none !important",
              boxShadow: "none !important",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiInputBase-input": {
              padding: { xs: "8px", sm: "12px", md: "16px" },
            },
            "& .MuiInput-underline:before": {
              borderBottom: "none !important",
            },
            "& .MuiInput-underline:after": {
              borderBottom: "none !important",
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#5A5C5F",
            },
          }}
          placeholder="Search for document"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={searchIcon} alt="searchIcon" />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: { xs: "4px", sm: "10px", md: "20px" },
          }}
        >
          <Box
            component="img"
            src={BellIcon}
            sx={{
              maxWidth: { xs: "35px", sm: "40px", md: "60px" },
              maxHeight: { xs: "35px", sm: "40px", md: "60px" },
            }}
          />
          <Box
            component="img"
            src={UserIcon}
            sx={{
              backgroundColor: "#054BB4",
              borderRadius: "100px",
              padding: { xs: "0px", sm: "0px", md: "6px", lg: "6px" },
              maxWidth: { xs: "30px", sm: "35px", md: "50px", lg: "60px" },
              maxHeight: { xs: "30px", sm: "40px", md: "50px", lg: "60px" },
            }}
          />
        </Box>
      </Box>
      <hr />
      <Typography
        sx={{
          font: {
            xs: "normal 500 16px/normal 'Inter'",
            sm: "normal 500 20px/normal 'Inter'",
            md: "normal 500 28px/normal 'Inter'",
            lg: "normal 500 33px/normal 'Inter'",
          },
          color: "#5A5C5F",
          letterSpacing: "0.083px",
          margin: "10px",
        }}
      >
        User Dashboard
      </Typography>
      <Typography
        sx={{
          font: {
            xs: "normal 500 22px/normal 'InterBold'",
            sm: "normal 500 28px/normal 'InterBold'",
            md: "normal 500 35px/normal 'InterBold'",
            lg: "normal 500 47px/normal 'InterBold'",
          },
          color: "#000",
          marginTop: "8px",
        }}
      >
        Welcome, Bijay
      </Typography>
      <Grid container>
        <Grid
          size={8}
          sx={{
            border: "5px solid black",
            background: "#F4F5F7",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <Grid container>
            <Grid
              sx={{
                border: "5px solid red",
                background: "#F4F5F7",
                borderRadius: "20px",
                padding: "20px",
              }}
              size={6}
            >
              <Typography
                sx={{
                  font: {
                    xs: "normal 500 15px/normal 'Inter'",
                    sm: "normal 500 17px/normal 'Inter'",
                    md: "normal 500 19px/normal 'Inter'",
                    lg: "normal 500 23px/normal 'Inter'",
                  },
                }}
              >
                Your Plan
              </Typography>
              <Typography
                sx={{
                  font: {
                    xs: "normal 400 12px/normal 'Inter'",
                    sm: "normal 400 14px/normal 'Inter'",
                    md: "normal 400 16px/normal 'Inter'",
                    lg: "normal 400 16px/normal 'Inter'",
                  },
                  color: "#5A5C5F",
                }}
              >
                You have no subscription at the moment. Please select a
                subscription plan
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
                }}
              >
                Free Trial: <span style={{ color: "#000" }}>20 days</span> left
              </Typography>
              <Button
                sx={{
                  textTransform: "none",
                  font: "normal 500 14px/normal 'Inter'",
                  color: "#FFFFFF",
                  letterSpacing: "0.175px",
                  borderRadius: "30px",
                  border: "1px solid #19467E",
                  height: { md: "40px", lg: "56px" },
                  width: { md: "90px", lg: "124px" },
                  background: "#054BB4",
                }}
                variant="outlined"
              >
                Select a Plan
              </Button>
            </Grid>
            <Grid size={6} sx={{ border: "1px solid yellow" }}>
              <Box
                component="img"
                src={FrameIcon}
                sx={{
                  maxWidth: { xs: "35px", sm: "40px", md: "300px" },
                  maxHeight: { xs: "35px", sm: "40px", md: "300px" },
                }}
              />
              <Typography
                sx={{
                  font: {
                    xs: "normal 500 16px/normal 'Inter'",
                    sm: "normal 500 20px/normal 'Inter'",
                    md: "normal 500 28px/normal 'Inter'",
                    lg: "normal 500 33px/normal 'Inter'",
                  },
                  color: "#000",
                  letterSpacing: "0.083px",
                  margin: "0px",
                }}
              >
                20 days
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={4} sx={{
            border: "5px solid blue",
            background: "#F4F5F7",
            borderRadius: "20px",
            padding: "20px",
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <Box
              component="img"
              src={CalendarIcon}
              sx={{
                maxWidth: { xs: "18px", sm: "24px", md: "24px" },
                maxHeight: { xs: "18px", sm: "24px", md: "24px" },
              }}
            />
            <Typography
              sx={{
                font: {
                  xs: "normal 500 15px/normal 'Inter'",
                  sm: "normal 500 17px/normal 'Inter'",
                  md: "normal 500 19px/normal 'Inter'",
                  lg: "normal 500 23px/normal 'Inter'",
                },
              }}
            >
              Upcoming Event
            </Typography>
          </div>
          <hr/>
        </Grid>
      </Grid>
    </div>
  );
};

export default McqDashboard;
