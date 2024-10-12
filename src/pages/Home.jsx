import React from "react";
import MainComponent from "../components/home/MainComponent";
import About from "../components/home/About";
import FeatureProduct from "../components/home/FeatureProduct";
import Testimonials from "../components/home/Testimonials";
import Achievements from "../components/home/Achievements";
import LatestNews from "../components/home/LatestNews";
import Subscribe from "../components/home/Subscribe";

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
