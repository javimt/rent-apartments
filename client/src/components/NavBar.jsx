import { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillBuildingsFill } from "react-icons/bs";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { AiFillCloseCircle } from "react-icons/ai";
import image from "../assets/rent apt.jpeg";
import styles from "../styles/Navbar.module.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { isAuthenticated, user } = useAuth0();
  const [isScrolled, setIsScrolled] = useState(false);
  const [infoUser, setInfoUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (user && isAuthenticated) {
  //console.log(user, isAuthenticated)
      axios.get("http://localhost:3001/user").then((e) => {
        const userDb = e.data.find((e) => e.email === user.email);
        if (!userDb) {
          const newUser = {
            name: user.given_name,
            lastName: user.family_name,
            email: user.email,
            image: user.picture
          };
    console.log(newUser, isAuthenticated)
          axios.post("http://localhost:3001/user", newUser)
          .then((response) => {
    console.log("User saved to the database:", response.data);
            setInfoUser(newUser);
          })
          .catch((error) => {
            console.error("Error saving user to the database:", error);
          });
        } else {
          setInfoUser(userDb);
        }
      });
    }
  }, [user, isAuthenticated, infoUser]);

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
          <Link to="apartments" className={styles.link}>
            For Rent
          </Link>
          {user && isAuthenticated ? (
            <LogoutButton />
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
