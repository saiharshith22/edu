import { Box } from "@mui/material";
import "./App.css";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Box
      sx={{
        padding: {
          xs: "0 15px 15px 15px",
          sm: "0 30px 30px 30px",
          md: "0px 50px 30px 50px",
          lg: "0 100px 30px 100px",
        },
      }}
    >
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </Box>
  );
}

export default App;
