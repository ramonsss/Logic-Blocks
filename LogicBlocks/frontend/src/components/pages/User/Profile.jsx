import { useState, useEffect } from "react";

import styles from "./Profile.module.css";
// import formStyles from '../../form/Form.module.css'

import Input from "../../form/Input";

// icons
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Profile = () => {
  const [user, setUser] = useState({})

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
          <form className={styles["update-user-form"]}>
            <h2 className={styles.title}>Update</h2>
            <div className={styles["input-field"]}>
              <Input
                text="Imagem"
                type="file"
                name="image"
                handleOnChange={onFileChange}
              />
            </div>
            <div className={styles["input-field"]}>
              <IoIosMail />
              <Input
                text="E-mail"
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                handleOnChange={handleChange}
                value={user.email || ""}
              />
            </div>
            <div className={styles["input-field"]}>
            <FaUser />
              <Input
                text="Nome"
                type="text"
                name="name"
                placeholder="Digite seu nome"
                handleOnChange={handleChange}
                value={user.name || ""}
              />
            </div>
            <div className={styles["input-field"]}>
              <FaLock />
              <Input
                text="Senha"
                type="password"
                name="password"
                placeholder="Digite sua senha"
                handleOnChange={handleChange}
              />
            </div>
            <div className={styles["input-field"]}>
              <FaLock />
              <Input
                text="Senha"
                type="password"
                name="confirmpassword"
                placeholder="Confirme sua senha"
                handleOnChange={handleChange}
              />
            </div>
            <input type="submit" value="Editar" className={`${styles.btn} ${styles.solid}`} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
