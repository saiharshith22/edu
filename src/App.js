import { Box } from "@mui/material";
import "./App.css";
import About from "./components/About";
import FeatureProduct from "./components/FeatureProduct";
import Header from "./components/header/Header";
import MainComponent from "./components/MainComponent";
import Testimonials from "./components/Testimonials";
import McqGenIntro from "./components/McqGenIntro";
import McqGenIntro2 from "./components/McqGenIntro2";
import McqWhoIsIt from "./components/McqWhoIsIt";

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
      {/* <MainComponent /> */}
      {/* <McqGenIntro></McqGenIntro>
      <McqGenIntro2></McqGenIntro2> */}
      <McqWhoIsIt></McqWhoIsIt>
      {/* <About />
      <FeatureProduct /> */}
      {/* <Testimonials /> */}
    </Box>
  );
}

export default App;
