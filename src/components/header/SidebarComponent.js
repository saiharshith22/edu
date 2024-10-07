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
import UserIcon from "../../assets/Images/User.svg";
import PersonIcon from "../../assets/Images/PersonPic.png";
import { styled } from "@mui/material/styles";
import McqGenerator1 from "../McqGenerator1";
import McqGenerator2ShowCase from "../McqGenerator2ShowCase";
import McqGeneratorSelectOp from "../McqGeneratorSelectOp";
import McqGeneratorButton from "../McqGeneratorButton";

const drawerWidth = 300;

const SidebarComponent = () => {
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
            <Typography
              sx={{ ...textStyle, fontSize: "20px", color: "#828282" }}
            >
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
                  background: "#054BB4",
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
          </div>
        </Box>

        <Divider sx={{ backgroundColor: "#E2E0E0", height: "1px" }} />

        <McqGenerator1 />
        <McqGenerator2ShowCase />
        <McqGeneratorSelectOp />
        <McqGeneratorButton />
      </Main>
    </Box>
  );
};

export default SidebarComponent;
