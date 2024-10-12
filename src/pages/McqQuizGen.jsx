import React from "react";
import McqGenerator1 from "../components/mcq-generator/McqGenerator1";
import McqGenerator2ShowCase from "../components/mcq-generator/McqGenerator2ShowCase";
import McqGeneratorButton from "../components/mcq-generator/McqGeneratorButton";
import McqGeneratorSelectOp from "../components/mcq-generator/McqGeneratorSelectOp";

const McqQuizGen = () => {
  return (
    <>
      <McqGenerator1 />
      <McqGenerator2ShowCase />
      <McqGeneratorSelectOp />
      <McqGeneratorButton />
    </>
  );
};

export default McqQuizGen;
