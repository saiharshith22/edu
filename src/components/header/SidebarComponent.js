import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import BellIcon from "../../assets/Images/bell icon.svg";
import UserIcon from "../../assets/Images/User.svg";
import McqGenerator from "../../pages/McqGenerator";
import SidebarContent from "./SidebarContent";

const drawerWidth = 300;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const btnStyle = {
    background: "#042960",
    color: "#FFFFFF",
    borderRadius: "30px",
    textTransform: "none",
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#ffffff",
          padding: { xs: "20px", sm: "40px" },
        }}
        elevation={1}
      >
        <Toolbar
          sx={{
            marginLeft: { xs: "none", sm: "auto" },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#054BB4" }}
          >
            <MenuIcon />
          </IconButton>
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
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#4A91FA",
            },
          }}
        >
          <SidebarContent />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#4A91FA",
            },
          }}
          open
        >
          <SidebarContent />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar sx={{ display: { xs: "none", sm: "block" } }} />
        <Toolbar />
        <McqGenerator />
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
