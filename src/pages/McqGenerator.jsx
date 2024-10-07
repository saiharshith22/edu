import React from "react";
import McqGenIntro from "../components/McqGenIntro";
import McqGenIntro2 from "../components/McqGenIntro2";
import McqWhoIsIt from "../components/McqWhoIsIt";
import McqWorks from "../components/McqWorks";
import McqMade from "../components/McqMade";
import McqForm from "../components/McqForm";
import McqHoware from "../components/McqHoware";
import McqHoware2ndBox from "../components/McqHoware2ndBox";
import McqGenerator1 from "../components/McqGenerator1";
import McqGenerator2ShowCase from "../components/McqGenerator2ShowCase";
import McqGeneratorSelectOp from "../components/McqGeneratorSelectOp";
import McqGeneratorButton from "../components/McqGeneratorButton";

const McqGenerator = () => {
  return (
    <>
      <McqGenIntro />
      <McqGenIntro2 />
      <McqWhoIsIt />
      <McqWorks />
      {/* another components */}
      <McqHoware />
      <McqMade />
      <McqHoware2ndBox />
      <McqForm />
       <McqGenerator1/>
       <McqGenerator2ShowCase/>
       <McqGeneratorSelectOp/>
       <McqGeneratorButton/>
    </>
  );
};

export default McqGenerator;
