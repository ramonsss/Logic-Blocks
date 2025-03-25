import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import styles from "./GameOver.module.css";

import WellDone from "../../assets/img/welldone.svg";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className={styles.gameover}>
      <h2>Fim de Jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length} perguntas
      </p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
