import React from "react";
import McqGenIntro from "../components/McqGenIntro";
import McqGenIntro2 from "../components/McqGenIntro2";
import McqWhoIsIt from "../components/McqWhoIsIt";
import McqWorks from "../components/McqWorks";
import McqMade from "../components/McqMade";
import McqForm from "../components/McqForm";
import McqHoware from "../components/McqHoware";
import McqHoware2ndBox from "../components/McqHoware2ndBox";
const McqGenerator = () => {
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

export default McqGenerator;
