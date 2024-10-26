import { Box } from "@mui/material";
import "./App.css";

import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingOverlay from "./components/Loaders";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SidebarComponent from "./components/header/SidebarComponent";
import TakeQuiz from "./components/takeQuiz";
import AboutMcqGenerator from "./pages/AboutMcqGenerator";
import Home from "./pages/Home";

function App() {
  const loading = useSelector((store) => store.generateMcqs.loading);
  const { pathname } = useLocation();

  const isMcqGeneratorPage = pathname === "/mcq-generator";
  const paddingStyles = isMcqGeneratorPage
    ? "0"
    : {
        xs: "0 15px 15px 15px",
        sm: "0 30px 30px 30px",
        md: "0px 50px 30px 50px",
        lg: "0 100px 30px 100px",
      };

  return (
    <Box sx={{ padding: paddingStyles }}>
      {!isMcqGeneratorPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mcq-about" element={<AboutMcqGenerator />} />
        <Route path="/mcq-generator" element={<SidebarComponent />} />
        <Route path="/take-quiz" element={<TakeQuiz />} />
      </Routes>
      {!isMcqGeneratorPage && <Footer />}
      <LoadingOverlay open={loading} />
    </Box>
  );
}

export default App;
