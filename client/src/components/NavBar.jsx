import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { BsBuildings } from "react-icons/bs";
import image from "../assets/rent apt.jpeg";
import styles from "../styles/Navbar.module.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const onScroll = useCallback(() => {
    setScrollPos(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <header className={styles.header}>
    <div className={`${styles.img} ${scrollPos > 50 ? styles.hide : ""}`}>
      <img
        src={image}
        alt="furnished apartament"
        className={styles.image}
      />
    </div>
    
      <nav className={styles.navbar}>
        <div className={`${styles.links} ${showMenu && styles.show}`}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="about" className={styles.link}>
            About me
          </Link>
          <Link to="apartaments" className={styles.link}>
            Aparaments
          </Link>
          <Link to="login" className={styles.link}>
            Login
          </Link>
        </div>

        <div className={styles.menuIcon}>
          {showMenu ? (
            <h1 className={styles.closeIcon} onClick={() => setShowMenu(false)}>
              X
            </h1>
          ) : (
            <BsBuildings onClick={() => setShowMenu(true)} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
