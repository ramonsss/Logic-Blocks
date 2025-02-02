import { Link } from "react-router-dom";
import { useContext } from "react";

import styles from "./Navbar.module.css";

import Logo from "../../assets/img/logo(1).png";

// context
import { Context } from "../../context/UserContext";

const Navbar = () => {
  const { authenticated, logout } = useContext(Context);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <img src={Logo} alt="Logic Blocks" />
        <h2>Logic Blocks</h2>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {authenticated ? (
          <>
            <li>
              <Link to="/user/profile">Perfil</Link>
            </li>
            <li onClick={logout}>Sair</li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Entrar/Registrar</Link>
            </li>
            {/* <li>
              <Link to="/register">Cadastre-se</Link>
            </li> */}
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
