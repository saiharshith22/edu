import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import PersonIcon from "../../assets/Images/PersonPic.png";
import { FooterElements, SidebarElements } from "./SidebarElements";

const SidebarContent = () => {
  const textStyle = {
    font: "normal 500 20px/normal 'Inter'",
    color: "#000",
    lineHeight: "1.5",
    textAlign: "center",
  };

  const btnStyle = {
    background: "#042960",
    color: "#FFFFFF",
    borderRadius: "30px",
    textTransform: "none",
  };
  return (
    <Box
      sx={{
        padding: "32px",
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Typography
          sx={{
            color: "#FFFFFF",
            fontWeight: 700,
            fontSize: "33px",
            fontFamily: '"MontserratBold"',
          }}
        >
          EduTech
        </Typography>
        <Typography
          sx={{
            color: "#19467E",
            fontWeight: 700,
            fontSize: "33px",
            fontFamily: '"MontserratBold"',
          }}
        >
          AI
        </Typography>
      </Stack>
      <List>
        {SidebarElements.map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon>
              <Box component="img" src={item.icon} alt={item.text} />
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ color: "#FFFFFF" }} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ background: "#E2E0E0", height: "1px" }} />
      <Box sx={{ position: "relative", display: "inline-block", left: "6%" }}>
        <Box
          component="img"
          src={PersonIcon}
          alt="personImg"
          sx={{ width: "149px", height: "149px" }}
        />
        <Button
          sx={{
            ...btnStyle,
            position: "absolute",
            bottom: 0,
            left: "33%",
            width: "84px",
            height: "29px",
          }}
        >
          Free Trial
        </Button>
      </Box>
      <Box
        sx={{
          background: "#E2E0E0",
          borderRadius: "24px",
          width: "214px",
          padding: "48px 8px 0px 8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          marginBottom: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "baseline",
          }}
        >
          <Typography sx={{ ...textStyle, fontSize: "32px" }}>23</Typography>
          <Typography sx={{ ...textStyle, fontSize: "20px", color: "#828282" }}>
            /30 days
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={textStyle}>Subscribe to</Typography>
          <Typography sx={textStyle}>unlock all features</Typography>
        </Box>
        <Button sx={{ ...btnStyle, width: "198px", height: "49px" }}>
          Upgrade Plan
        </Button>
      </Box>
      <Divider sx={{ background: "#E2E0E0", height: "1px" }} />
      <List>
        {FooterElements.map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon>
              <Box component="img" src={item.icon} alt={item.text} />
            </ListItemIcon>
            <ListItemText primary={item.text} sx={{ color: "#FFFFFF" }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SidebarContent;
