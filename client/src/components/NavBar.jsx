import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillBuildingsFill } from "react-icons/bs";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { AiFillCloseCircle } from "react-icons/ai";
import image from "../assets/rent apt.jpeg";
import styles from "../styles/Navbar.module.css";

const NavBar = ({ isAuthenticated, setIsAuthenticated  }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("apartments");
  };

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
          <Link to="apartments" className={styles.link}>
            For Rent
          </Link>
          {isAuthenticated ? (
            <button className={styles.link} onClick={handleLogout}>
              Logout <LuLogOut className={styles.login} />
            </button>
          ) : (
            <Link to="login" className={styles.link}>
              Login <LuLogIn className={styles.login} />
            </Link>
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
