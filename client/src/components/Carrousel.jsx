import styles from "../styles/Carrousel.module.css";
import { imagesPF } from "./Images";

function Carrousel() {
  const imageKeys = Object.keys(imagesPF);
  /* const imagKeys = Object.keys(imagesPI); */

  return (
    <div className={styles.container1}>
      <div className={styles.slider}>
        <div className={styles.slide_track}>
          {imageKeys.map((key, index) => (
            <div className={styles.con} key={index}>
              <div className={styles.slide} id={styles[`img${index + 1}`]}>
                <img src={imagesPF[key]} alt={`slide ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Carrousel;