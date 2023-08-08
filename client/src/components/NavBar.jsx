import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillBuildingsFill } from "react-icons/bs";
import { LuLogIn } from "react-icons/lu";
import { AiFillCloseCircle } from "react-icons/ai";
import image from "../assets/rent apt.jpeg";
import styles from "../styles/Navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, logout, user } = useAuth0();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled && styles.scrolled}`}>
      <div className={styles.img}>
        <img src={image} alt="furnished apartament" className={styles.image} />
      </div>

      <nav className={styles.navbar}>
        <div className={`${styles.links} ${showMenu && styles.show}`}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="about" className={styles.link}>
            About Us
          </Link>
          <Link to="apartaments" className={styles.link}>
            For Rent
          </Link>
          {isAuthenticated ? (
            <button onClick={() => logout()}>Logout</button>
          ) : (
            <LoginButton />
          )}
          {isAuthenticated && (
            <div>
              <p>hi, {user.name}!</p>
              <img src={user.picture} alt="Profile" />
            </div>
          )}
        </div>

        <div className={styles.menuIcon}>
          {showMenu ? (
            <AiFillCloseCircle
              className={styles.closeIcon}
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <BsFillBuildingsFill onClick={() => setShowMenu(true)} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
