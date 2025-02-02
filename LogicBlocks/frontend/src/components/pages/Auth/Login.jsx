import Input from "../../form/Input";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import styles from "../../form/Form.module.css";

// context
import { Context } from "../../../context/UserContext";

// icons
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState({})
  const {register} = useContext(Context);
  const {login} = useContext(Context);

  // const [isAnimating, setIsAnimating] = useState(false);
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // send the user to the bank
    register(user);
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    
    login(user);
  }

  // const handleRegisterClick = () => {
  //   setIsActive(isAnimating);
  //   setIsAnimating(true); 
  //   setTimeout(() => {
  //     navigate('#'); 
  //   }, 3500); 
  // };
  
  return (
      <div className={styles.container}>
        <div className={`${styles.wrapper} ${isActive ? styles.active : ''}`}>
        <span className={styles["bg-animate"]}></span>
        <span className={styles["bg-animate2"]}></span>

          <div className={`${styles["form-box"]} ${styles.login}`}>
          <h1 className={styles.animation} style={{ '--i': 0, '--j': 21 }}>Entrar</h1>
            <form onSubmit={handleSubmitLogin}>
              <div className={`${styles["input-box"]} ${styles.animation}`} style={{ '--i': 1, '--j': 22 }}>
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
              <div className={`${styles["input-box"]} ${styles.animation}`} style={{ '--i': 2, '--j': 23 }}>
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
              <input type="submit" value="Entrar" className={`${styles["btn"]} ${styles.animation}`} style={{ '--i': 3, '--j': 24 }} />
              <div className={`${styles["logred-link"]} ${styles.animation}`} style={{ '--i': 4, '--j': 25 }}>
                <p>
                  Não possui uma conta? <Link onClick={ () => setIsActive(true)}>Cadastre-se</Link>
                </p>
              </div>
            </form>
          </div>
          <div className={`${styles["info-text"]} ${styles.login}`}>
            <h2 className={styles.animation} style={{ '--i': 0, '--j': 20 }}>Bem vindo de volta</h2>
            <p className={styles.animation} style={{ '--i': 1, '--j': 21 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              necessitatibus labore repre
            </p>
          </div>



          <div className={`${styles["form-box"]} ${styles.register}`}>
          <h1 className={styles.animation} style={{ '--i': 17, '--j': 0 }}>Registrar</h1>
          <form onSubmit={handleSubmit}>
            <div className={`${styles["input-box"]} ${styles.animation}` } style={{ '--i': 18, '--j': 1 }}>
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
            <div className={`${styles["input-box"]} ${styles.animation}`} style={{ '--i': 19, '--j': 2 }}>
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
            <div className={`${styles["input-box"]} ${styles.animation}`} style={{ '--i': 20, '--j': 3 }}>
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
            <div className={`${styles["input-box"]} ${styles.animation}`} style={{ '--i': 21, '--j': 4 }}>
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
            <input type="submit" value="Cadastrar" className={`${styles.btn} ${styles.animation}`} style={{ '--i': 22, '--j': 5 }} />
            <div className={`${styles["logred-link"]} ${styles.animation}`} style={{ '--i': 23, '--j': 6 }}>
              <p>
                Já possui uma conta? <Link to="/login" onClick={ () => setIsActive(false)}>Entrar</Link>
              </p>
            </div>
          </form>
        </div>

        <div className={`${styles["info-text"]} ${styles.register}`}>
          <h2 className={styles.animation} style={{ '--i': 17, '--j': 0 }}>Bem vindo de volta</h2>
          <p className={styles.animation} style={{ '--i': 18, '--j': 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            necessitatibus labore repre
          </p>
        </div>

        </div>
      </div>
  );
};

export default Login;
