import React from "react";

import Welcome from "./Welcome";
import PickCategory from "./PickCategory";
import Question from "./Question";
import GameOver from "./GameOver";

import styles from "./Quiz.module.css"

import { useContext, useEffect } from "react";
import { QuizContext } from "../../context/quiz";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className={styles.container}>
      <h1>Logic Blocks</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
};

export default Quiz;
