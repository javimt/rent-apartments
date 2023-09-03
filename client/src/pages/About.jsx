import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.ownerInfo}>
        <img src="" alt="Dueño de la aplicación" className={styles.ownerImage} />
        <h2 className={styles.ownerName}>Nombre del Dueño</h2>
        <p className={styles.ownerDescription}>
          Descripción sobre el dueño de la aplicación.
        </p>
      </div>
      <div className={styles.aboutText}>
        <h1 className={styles.aboutTitle}>Sobre Nosotros</h1>
        <div className={styles.missionVision}>
          <div className={styles.mission}>
            <h2>Misión</h2>
            <p>
              Nuestra misión es proporcionar a nuestros clientes experiencias
              únicas y confortables en apartamentos amoblados de alta calidad en
              Medellín. Nos esforzamos por superar las expectativas de nuestros
              huéspedes y brindar un servicio excepcional.
            </p>
          </div>
          <div className={styles.vision}>
            <h2>Visión</h2>
            <p>
              Ser reconocidos como la opción líder en alojamiento amoblado en
              Medellín. Buscamos expandir nuestra oferta y llegar a más
              destinos, manteniendo siempre nuestros altos estándares de
              calidad y servicio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
