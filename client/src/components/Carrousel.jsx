import styles from "../styles/Carrousel.module.css";

function Carrousel({images}) {

if (!images || images.length === 0) {
  return null;
}

  return (
    <div className={styles.container1}>
      <div className={styles.slider}>
        <div className={styles.slide_track}>
          {images.map((image, index) => (
            <div className={styles.con} key={image.key}>
              <div className={styles.slide} id={styles[`img${index + 1}`]}>
                <img src={image.url} alt={`slide ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Carrousel;