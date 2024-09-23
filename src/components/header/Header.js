import React from "react";
import "./header.css";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Stack } from "@mui/material";

const Header = () => {
  const btnStyle = {
    textTransform: "none",
    font: "normal 500 14px/normal 'Inter'",
    color: "19467E",
    letterSpacing: "0.168px",
    borderRadius: "30px",
    border: "1px solid #19467E",
    height: "56px",
    width: "124px",
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    // <nav className="header">
    //   <Stack direction="row" className="logo">
    //     <span className="logo_edutech">EduTech</span>
    //     <span className="logo_ai">AI</span>
    //   </Stack>
    //   <Stack className="header_items" direction="row">
    //     <span className="item_text">Home</span>
    //     <span className="item_text">Product</span>
    //     <span className="item_text">Pricing</span>
    //     <span className="item_text">AI Books Store</span>
    //     <span className="item_text">Resources</span>
    //   </Stack>
    //   <Stack direction="row" sx={{ gap: "1rem" }}>
    //     <Button sx={{ ...btnStyle, background: "#FCFCFC" }} variant="outlined">
    //       Log in
    //     </Button>
    //     <Button sx={{ ...btnStyle, background: "#054BB4" }} variant="contained">
    //       Sign up
    //     </Button>
    //   </Stack>
    // </nav>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack
            direction="row"
            className="logo"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <span className="logo_edutech">EduTech</span>
            <span className="logo_ai">AI</span>
          </Stack>
          {/* 
          xs, extra-small: 0px 
          sm, small: 600px 
          md, medium: 900px 
          lg, large: 1200px 
          xl, extra-large: 1536px 
          */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: "center" }}>Home</Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: "center" }}>Product</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: "center" }}>Pricing</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: "center" }}>
                  AI Books Store
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: "center" }}>Resources</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Stack
            direction="row"
            className="logo"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <span className="logo_edutech">EduTech</span>
            <span className="logo_ai">AI</span>
          </Stack>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Product
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Pricing
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              AI Books Store
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Resources
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
