import React, { createContext, useState } from "react";
import McqGenerator1 from "./McqGenerator1";
import McqGenerator2ShowCase from "./McqGenerator2ShowCase";
import McqGeneratorSelectOp from "./McqGeneratorSelectOp";
import McqGeneratorButton from "./McqGeneratorButton";

export const McqGeneratorContext = createContext(null);
const Index = () => {
  const [text, setText] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const [mcqType, setMcqType] = React.useState("mcq");
  const [mcqCount, setMcqCount] = React.useState(10);
  const [mcqLevel, setMcqLevel] = React.useState("easy");

  return (
    <McqGeneratorContext.Provider
      value={{
        text,
        setText,
        uploadedFile,
        setUploadedFile,
        mcqType,
        setMcqType,
        mcqCount,
        setMcqCount,
        mcqLevel,
        setMcqLevel,
      }}
    >
      <McqGenerator1 />
      <McqGenerator2ShowCase />
      <McqGeneratorSelectOp />
      <McqGeneratorButton />
    </McqGeneratorContext.Provider>
  );
};

export default Index;
