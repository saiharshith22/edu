import React from "react";
import McqGenIntro from "../components/about-mcq-generator/McqGenIntro";
import McqGenIntro2 from "../components/about-mcq-generator/McqGenIntro2";
import McqWhoIsIt from "../components/about-mcq-generator/McqWhoIsIt";
import McqWorks from "../components/about-mcq-generator/McqWorks";
import McqMade from "../components/about-mcq-generator/McqMade";
import McqForm from "../components/about-mcq-generator/McqForm";
import McqHoware from "../components/about-mcq-generator/McqHoware";
import McqHoware2ndBox from "../components/about-mcq-generator/McqHoware2ndBox";

const AboutMcqGenerator = () => {
  return (
    <>
      <McqGenIntro />
      <McqGenIntro2 />
      <McqWhoIsIt />
      <McqWorks />
      <McqHoware />
      <McqMade />
      <McqHoware2ndBox />
      <McqForm />
    </>
  );
};

export default AboutMcqGenerator;
