import React from "react";
import { useQuizContext } from "../context/QuizContext";

export default function Progress() {
  const { index, questionsCount, points, totalPoints, answer } =
    useQuizContext();
  
  return (
    <header className="progress">
      <progress max={questionsCount} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {questionsCount}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints} points
      </p>
    </header>
  );
}
