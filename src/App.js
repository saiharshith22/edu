import { Box } from "@mui/material";
import "./App.css";
import About from "./components/About";
import FeatureProduct from "./components/FeatureProduct";
import Header from "./components/header/Header";
import MainComponent from "./components/MainComponent";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <Box
      sx={{
        padding: {
          xs: "0 15px 15px 15px",
          md: "0px 30px 30px 30px",
          lg: "0 50px 50px 50px",
        },
      }}
    >
      <Header />
      <MainComponent />
      {/* <About />
      <FeatureProduct /> */}
      {/* <Testimonials /> */}
    </Box>
  );
}

export default App;
