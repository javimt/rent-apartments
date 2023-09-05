import styles from "../styles/About.module.css";
import image from "../assets/foto dueño.jpg";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.ownerInfo}>
        <img
          src={image}
          alt="Dueño de la aplicación"
          className={styles.ownerImage}
        />
        <h2 className={styles.ownerName}>Henry Tabares</h2>
        <p className={styles.ownerDescription}>
          I am willing to help you rent or buy the property that you have always
          been looking for with the best advice and always at the best price.
        </p>
      </div>
      <div className={styles.aboutText}>
        <h1 className={styles.aboutTitle}>About us</h1>
        <div className={styles.missionVision}>
          <div className={styles.mission}>
            <h2>Mision</h2>
            <p>
              Our mission is to provide our customers with experiences
              unique and comfortable in high quality furnished apartments in
              Medellin. We strive to exceed the expectations of our
              guests and provide exceptional service.
            </p>
          </div>
          <div className={styles.vision}>
            <h2>Vision</h2>
            <p>
              To be recognized as the leading option in furnished accommodation in
              Medellin. We seek to expand our offer and reach more
              destinations, always maintaining our high quality standards
              and service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
