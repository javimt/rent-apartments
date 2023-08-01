import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.by}>
        <p className={styles.p}> Copyright © 2023. </p>
        <p className={styles.p}> www.furnishedapartmentmedellin.com</p>
        <p className={styles.p}> All right reserved</p>
      </div>
    </div>
  )
}

export default Footer;
