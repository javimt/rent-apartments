import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillBuildingsFill } from "react-icons/bs";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { AiFillCloseCircle } from "react-icons/ai";
import image from "../assets/rent apt.jpeg";
import styles from "../styles/Navbar.module.css";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { isAuthenticated, user, logout } = useAuth0();
  const [isScrolled, setIsScrolled] = useState(false);
  const [infoUser, setInfoUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (user && isAuthenticated) {
      axios.get("/users").then((element) => {
        const userDb = element.data.find(
          (element) => element.email === user.email
        );
        if (!userDb) {
          const newUser = {
            name: user.name,
            lastname: user.family_name,
            email: user.email,
          };
          dispatch(createUser(newUser));
        } else {
          setInfoUser(userDb);
          return false;
        }
      });
    }
  }, [user]);

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
          {isAuthenticated && user ? (
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
