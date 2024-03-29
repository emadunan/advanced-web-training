import React from "react";
import { useQuizContext } from "../context/QuizContext";

export default function NextButton({ children }) {
  const { dispatch, answer } = useQuizContext();
  
  if (answer == null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      {children}
    </button>
  );
}
