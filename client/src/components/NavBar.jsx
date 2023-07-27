import { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu, GiCrossedBones } from "react-icons/gi";
import image from "../assets/rent apt.jpeg";
import styles from "../styles/Navbar.module.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${showMenu ? styles.showMenu : ""}`}>
        <img src={image} alt="amoblados" className={styles.image} />
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="apartaments" className={styles.link}>
            Apartaments
          </Link>
          <Link to="about" className={styles.link}>
            About Us
          </Link>
          <div className={styles.login}>Login</div>
          {showMenu ? (
          <GiCrossedBones className={styles.closeIcon} onClick={handleMenu} />
        ) : (
          <GiHamburgerMenu className={styles.menuIcon} onClick={handleMenu} />
        )}
      </nav>
    </header>
  );
};

export default NavBar;
