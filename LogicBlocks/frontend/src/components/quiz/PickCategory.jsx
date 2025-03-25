import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import Category from "../../assets/img/category.svg";

import styles from "./PickCategory.module.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const chooseCategoryAndReorderQuestions = (category) => {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  };

  return (
    <div className={styles.category}>
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
      <div>
        {quizState.questions.map((question) => (
          <button
            onClick={() => chooseCategoryAndReorderQuestions(question.category)}
            key={question.category}
          >
            {question.category}
          </button>
        ))}
      </div>
      <img src={Category} alt="Categorias do Quiz" />
    </div>
  );
};

export default PickCategory;
