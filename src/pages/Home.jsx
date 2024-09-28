import React from "react";
import MainComponent from "../components/MainComponent";
import About from "../components/About";
import FeatureProduct from "../components/FeatureProduct";
import Testimonials from "../components/Testimonials";
import Achievements from "../components/Achievements";
import LatestNews from "../components/LatestNews";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <>
      <MainComponent />
      <About />
      <FeatureProduct />
      <Testimonials />
      <Achievements />
      <LatestNews />
      <Subscribe />
    </>
  );
};

export default Home;
