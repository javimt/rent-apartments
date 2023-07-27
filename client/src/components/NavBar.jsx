
import { Link } from "react-scroll";
import { GiHamburgerMenu, GiCrossedBones } from "react-icons/gi";
import image from "../assets/rent apt.jpeg";
import styles from "../styles/Navbar.module.css";

const NavBar = () => {
  

  return (
    <nav className={styles.nav}>
      <img src={image} alt="amoblados" className={styles.image} />
      <Link to="/" className={styles.link}>
        <div className={styles.home}>Home</div>
      </Link>
      <Link to="apartaments" className={styles.link}>
        <div className={styles.apartaments}>Apartaments</div>
      </Link>
      <Link to="about" className={styles.link}>
        <div className={styles.about}>About Us</div>
      </Link>
      <div className={styles.login}>Login</div>
    </nav>
  );
};

export default NavBar;
