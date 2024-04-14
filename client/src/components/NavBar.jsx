import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillBuildingsFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdLightbulbCircle } from "react-icons/md";
import image from "../assets/rent apt.jpeg";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import styles from "../styles/NavBar.module.css";
import { useTheme } from "./ThemeProvider";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [infoUser, setInfoUser] = useState({});
  const { isAuthenticated, user } = useAuth0();
  const { toggleTheme, theme } = useTheme();

  useEffect(() => {
    if (user && isAuthenticated) {
      axios
        .get("http://localhost:3001/user")
        .then((response) => {
          const userDb = response.data.find((e) => e.email === user.email);
          if (!userDb) {
            const newUser = {
              name: user.given_name,
              lastName: user.family_name,
              email: user.email,
              image: user.picture,
            };
            axios
              .post("http://localhost:3001/user", newUser)
              .then((response) => {
                console.log("User saved to the database:");
                setInfoUser(newUser);
              })
              .catch((error) => {
                console.error("Error saving user to the database:", error);
              });
          } else {
            setInfoUser(userDb);
          }
        })
        .catch((error) => {
          console.error("Error retrieving user from the database:", error);
        });
    }
  }, [user, isAuthenticated]);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setShowMenu(false);
  };

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  return (
    <header
      className={`app ${theme === "dark" ? "dark" : "light"} ${styles.header} ${
        isScrolled && styles.scrolled
      }`}
    >
      <div className={styles.title}>
        <h3>The best website to rent furnished apartments</h3>
        <MdLightbulbCircle
          onClick={toggleTheme}
          style={{ cursor: "pointer", padding: "2px", fontSize: "40px" }}
        ></MdLightbulbCircle>
      </div>
      <nav className={styles.navbar}>
        <div
          className={`${styles.overlay} ${showMenu && styles.show}`}
          onClick={closeMenu}
        ></div>
        <div className={styles.img}>
          <img
            src={image}
            alt="furnished apartament"
            className={styles.image}
          />
        </div>
        <div className={`${styles.links} ${showMenu && styles.show}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="about" onClick={closeMenu}>
            About Us
          </Link>
          <Link to="apartments/rent" onClick={closeMenu}>
            For Rent
          </Link>
          <Link to="apartments/sale" onClick={closeMenu}>
            For Sale
          </Link>
          {isAuthenticated ? (
            <>
              <img
                src={user.picture}
                alt="Profile"
                className={styles.userImage}
                onClick={toggleUserMenu}
              />
              {userMenuOpen && (
                <div className={styles.userMenu}>
                  <div className={styles.userName}>Hi! {user.nickname}</div>
                  {(infoUser.role === "admin" ||
                    infoUser.role === "superAdmin") && (
                    <Link to={`admin`} onClick={closeMenu}>
                      <button className={styles.adminButton}>Dashboard</button>
                    </Link>
                  )}
                  <LogoutButton />
                </div>
              )}
            </>
          ) : (
            <LoginButton />
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
