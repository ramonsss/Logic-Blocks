import { Link } from "react-router-dom";

import styles from "./Home.module.css";

import imgQuiz from "../../assets/img/quizz.png";
import imgClassroom from "../../assets/img/aula.png";
import imgCircuits from "../../assets/img/circuits.webp";
import imgEmBreve from "../../assets/img/embreve.png";

const Home = () => {
  return (
    <div className={`${styles["container"]}`}>
      <div className={`${styles["container-box"]}`}>
        <h3>Explore seu limite</h3>
        <h1>Logic Blocks Edição Limitada</h1>
        <p>
          Lorem ipsum dolor sit, <br />
          voluptatum perspiciatis beatae <br />
          quam debitis praesentium quod, <br />
          repellendus veniam vitae quaerat.
        </p>
      </div>

      <div>
        <div className={`${styles["sections-container"]}`}>
          <div className={`${styles["sections-container-box"]}`}>
            <Link to="/quiz001">
              <img src={imgQuiz} alt="Quiz" />
              Quiz
            </Link>
          </div>
          <div
            className={`${styles["sections-container-box"]} ${styles.breve}`}
          >
            <img src={imgClassroom} alt="Quiz" />
            <p>Video Aulas</p>
            <img className={styles.breve} src={imgEmBreve} alt="Quiz" />
          </div>
          <div className={`${styles["sections-container-box"]}`}>
            <Link to="/logicgates">
              <img src={imgCircuits} alt="Quiz" />
              Faça seus proprios circuitos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
