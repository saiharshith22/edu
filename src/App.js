import { Box } from "@mui/material";
import "./App.css";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import McqWhoIsIt from "./components/McqWhoIsIt";

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
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mcq-about" element={<McqWhoIsIt />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
