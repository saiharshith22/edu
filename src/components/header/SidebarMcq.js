import {
  Box,
  Stack,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { SidebarElements, FooterElements } from "./SidebarElements";
import BellIcon from "../../assets/Images/bell icon.svg";
import FireIcon from "../../assets/Images/Fire icon.svg";
import { styled } from "@mui/material/styles";
import McqGenerator from "../../pages/McqGenerator";
import TakeQuiz from "../takeQuiz";

const drawerWidth = 300;

const SidebarMcq = () => {
  const [open, setOpen] = useState(true);
  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme }) => ({
      flexGrow: 1,
      // padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      variants: [
        {
          props: ({ open }) => open,
          style: {
            transition: theme.transitions.create("margin", {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
          },
        },
      ],
    })
  );
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const textStyle = {
    font: "normal 500 19px/normal 'Inter'",
    color: "#FFF",
    lineHeight: "normal",
    textAlign: "center",
  };

  const btnStyle = {
    background: "#054BB4",
    color: "#FFFFFF",
    borderRadius: "30px",
    textTransform: "none",
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="persistent"
        onClick={handleDrawerClose}
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#4A91FA",
            padding: "20px",
          },
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

        <Box
          sx={{
            background: "#80CAFF",
            borderRadius: "24px",
            width: "230px",
            padding: "20px 0px 20px 0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Typography sx={textStyle}>Uprade pro</Typography>
            <Box component="img" src={FireIcon} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "3px",
            }}
          >
            <Typography
              sx={{ ...textStyle, fontSize: "12px", letterSpacing: "0.018px" }}
            >
              Get access to High MCQ counts
            </Typography>
            <Typography
              sx={{ ...textStyle, fontSize: "12px", letterSpacing: "0.018px" }}
            >
              and all other features & contents
            </Typography>
          </Box>
          <Button sx={{ ...btnStyle, width: "83px", height: "28px" }}>
            Upgrade
          </Button>
        </Box>
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
      </Drawer>
      <Main open={open}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            // paddingBottom: "16px",
            padding: "50px 120px",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={[{ color: "#054BB4" }, open && { display: "none" }]}
          >
            <MenuIcon sx={{ fontSize: "40px" }} />
          </IconButton>

          <div style={{ marginLeft: "auto" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: "4px", sm: "10px", md: "20px" },
              }}
            >
              <Button
                sx={{
                  ...btnStyle,

                  width: { xs: "80px", sm: "100px", md: "120px", lg: "122px" },
                  height: { xs: "35px", sm: "40px", md: "54px", lg: "60px" },
                }}
                variant="contained"
              >
                Upgrade
              </Button>
              <Box
                component="img"
                src={BellIcon}
                sx={{
                  maxWidth: { xs: "35px", sm: "40px", md: "60px" },
                  maxHeight: { xs: "35px", sm: "40px", md: "60px" },
                }}
              />
            </Box>
          </div>
        </Box>
        <Divider sx={{ backgroundColor: "#E2E0E0", height: "1px" }} />

        <TakeQuiz />
      </Main>
    </Box>
  );
};

export default SidebarMcq;
