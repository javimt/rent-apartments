import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useLocation } from "react-router-dom";
import styles from "../styles/Details.module.css";

const Details = () => {
  const location = useLocation();
  const { bedrooms, bathrooms, apartmentNumber, images } = location.state;

  return (
    <article className={styles.det}>
      <div className={styles.container}>
        <div className={styles.carousel}>
          <Carousel 
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={true}
            style={{ width: "100%", height: "100%" }}
            >
            {images.map((image, index) => (
              <div key={index} className={styles.imageContainer}>
                <img src={image} alt={`Apartment ${index}`} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className={styles.details}>
          <div className={styles.info}>
            <p className={styles.number}>Number: {apartmentNumber}</p>
            <p className={styles.bathrooms}>Bathrooms: {bathrooms}</p>
            <p className={styles.bedrooms}>Bedrooms: {bedrooms}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Details;
