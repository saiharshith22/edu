import React, { createContext, useState } from "react";
import McqGenerator1 from "./McqGenerator1";
import McqGenerator2ShowCase from "./McqGenerator2ShowCase";
import McqGeneratorSelectOp from "./McqGeneratorSelectOp";
import McqGeneratorButton from "./McqGeneratorButton";

export const McqGeneratorContext = createContext(null);
const Index = () => {
  const [text, setText] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [wikiUrl, setWikiUrl] = useState("");

  const [mcqType, setMcqType] = useState("mcq");
  const [mcqCount, setMcqCount] = useState(10);
  const [mcqLevel, setMcqLevel] = useState("easy");

  const [mcqInputDisabled, setMcqInputDisabled] = useState({
    text: false,
    uploadedFile: false,
    wikiUrl: false,
  });

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
        wikiUrl,
        setWikiUrl,
        mcqInputDisabled,
        setMcqInputDisabled,
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
