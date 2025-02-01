import Input from "../../form/Input";

import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../../form/Form.module.css";

// icons
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Register = () => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = (e) => {};

  const handleRegisterClick = () => {
    setIsActive(true); // Adiciona a classe active ao clicar em "Cadastre-se"
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles["bg-animate2"]}></span>

        <div className={`${styles["form-box"]} ${styles.register}`}>
          <h1>Registrar</h1>
          <form>
            <div className={styles["input-box"]}>
              <Input
                text="Nome"
                type="text"
                name="name"
                // placeholder="Digite seu nome"
                handleOnChange={handleChange}
              />
              <label htmlFor="name">Nome</label>
              <FaUser className={`${styles["react-icon"]}`} />
            </div>
            <div className={styles["input-box"]}>
              <Input
                text="E-mail"
                type="email"
                name="email"
                // placeholder="Digite seu e-mail"
                handleOnChange={handleChange}
              />
              <label htmlFor="email">E-mail</label>
              <IoIosMail className={`${styles["react-icon"]}`} />
            </div>
            <div className={styles["input-box"]}>
              <Input
                text="Senha"
                type="password"
                name="password"
                // placeholder="Digite sua senha"
                handleOnChange={handleChange}
              />
              <label htmlFor="password">Senha</label>
              <FaLock className={`${styles["react-icon"]}`} />
            </div>
            <div className={styles["input-box"]}>
              <Input
                text="Confirmação de senha"
                type="password"
                name="confirmpassword"
                // placeholder="Confirme sua senha"
                handleOnChange={handleChange}
              />
              <label htmlFor="confirmpassword">Confirme sua senha</label>
              <FaLock className={`${styles["react-icon"]}`} />
            </div>
            <input type="submit" value="Cadastrar" className={styles.btn} />
            <div className={styles["logred-link"]}>
              <p>
                Já possui uma conta? <Link to="/login" onClick={handleRegisterClick}>Entrar</Link>{" "}
              </p>
            </div>
          </form>
        </div>

        <div className={`${styles["info-text"]} ${styles.register}`}>
          <h2>Bem vindo de volta</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            necessitatibus labore repre
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
