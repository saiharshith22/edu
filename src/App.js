import { Box } from "@mui/material";
import "./App.css";

import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutMcqGenerator from "./pages/AboutMcqGenerator";
import Home from "./pages/Home";
import TakeQuiz from "./components/takeQuiz";
import { useSelector } from "react-redux";
import LoadingOverlay from "./components/Loaders";
import SidebarComponent from "./components/header/SidebarComponent";


function App() {
  const loading = useSelector((store) => store.generateMcqs.loading);
  const location = useLocation();
  const currentPage = location.pathname;
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
      {/* <Router> */}
      {currentPage !== "/mcq-generator" && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mcq-about" element={<AboutMcqGenerator />} />
          <Route path="/mcq-generator" element={<SidebarComponent />} />
          <Route path="/take-quiz" element={<TakeQuiz />} />
        </Routes>
        {currentPage !== "/mcq-generator" && <Footer />}
      {/* </Router> */}

      <LoadingOverlay open={loading} />
    </Box>
  );
}

export default App;
