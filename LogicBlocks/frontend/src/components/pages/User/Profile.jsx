import { useState, useEffect } from "react";

import styles from "./Profile.module.css";
import img from "../../../assets/img/img.svg";

import Input from "../../form/Input";

// icons
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Profile = () => {
  const [user, setUser] = useState({});

  const onFileChange = () => {};

  const handleChange = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.profile_header}>
        <h1>Perfil</h1>
        <p>Preview Imagem</p>
      </div>
      <div className={styles["form-container"]}>
        <div className={styles["update-user"]}>
          <form className={`${styles["update-user-form"]} ${styles.form}`}>
            <h2 className={styles.title}>Update</h2>
            <div>
              <Input
                text="Imagem"
                type="file"
                name="image"
                handleOnChange={onFileChange}
              />
            </div>
            <div className={styles["input-field"]}>
              <IoIosMail className={`${styles["react-icon"]}`} />
              <Input
                text="E-mail"
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                handleOnChange={handleChange}
                value={user.email || ""}
                className={styles.input}
              />
            </div>
            <div className={styles["input-field"]}>
              <FaUser className={`${styles["react-icon"]}`} />
              <Input
                text="Nome"
                type="text"
                name="name"
                placeholder="Digite seu nome"
                handleOnChange={handleChange}
                value={user.name || ""}
                className={styles.input}
              />
            </div>
            <div className={styles["input-field"]}>
              <FaLock className={`${styles["react-icon"]}`} />
              <Input
                text="Senha"
                type="password"
                name="password"
                placeholder="Digite sua senha"
                handleOnChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles["input-field"]}>
              <FaLock className={`${styles["react-icon"]}`} />
              <Input
                text="Senha"
                type="password"
                name="confirmpassword"
                placeholder="Confirme sua senha"
                handleOnChange={handleChange}
                className={styles.input}
              />
            </div>
            <input
              type="submit"
              value="Editar"
              className={`${styles.btn} ${styles.solid}`}
            />
          </form>
        </div>
      </div>

      <div className={styles["panels-container"]}>
        <div className={styles.panel}>
          <div className={styles.content}>
            <h3>Edite suas informações aqui.</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              dicta quasi dolores suscipit?
            </p>
          </div>
          <img src={img} alt="imagem" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
