import React from "react";
import QuizSetter from "./view/quizUI";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const TakeQuiz = () => {
  const navigate = useNavigate();
  const questionArray = useSelector((store) => store.generateMcqs.mcqs);
  return (
    <div style={{ border: "1px sold red" }}>
      <QuizSetter
        closeFunction={() => navigate("/mcq-generator")}
        questionArray={questionArray}
      />
    </div>
  );
};

export default TakeQuiz;
