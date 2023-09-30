import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.by}>
        <p className={styles.p}> Copyright © 2023. </p>
        <a href="http://www.furnishedapartmentsmedellin.com" className={styles.a}>
          <p className={styles.p}> www.furnishedapartmentmedellin.com</p>
        </a>
        <p className={styles.p}> All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
