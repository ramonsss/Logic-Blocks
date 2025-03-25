import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import styles from "./Option.module.css";

const Option = ({ option, selectOption, answer, hide }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div
      className={`${styles.option} 
    ${quizState.answerSelected && option === answer ? styles.correct : ""} 
    ${quizState.answerSelected && option !== answer ? styles.wrong : ""} 
    ${hide ? styles.hide : ""}`} // Corrigido para aplicar a classe corretamente
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>  
  );
};

export default Option;
