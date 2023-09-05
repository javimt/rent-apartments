import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/Details.module.css";
import { useParams } from "react-router-dom";
import { useApartments } from "../ApartmenContext";

const Details = () => {
  const {apartments} = useApartments();
  const { id } = useParams();
  
  const apartment = apartments.find((apartment) => apartment.id === id);;
  if (!apartment) {
    return null; 
  }
  const { bedrooms, bathrooms, apartmentNumber, images } = apartment || {};

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
            {images?.map((image, index) => (
              <div key={index} className={styles.imageContainer}>
                <img src={image} alt={`Apartment ${index}`} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className={styles.details}>
          <div className={styles.info}>
            <p className={styles.number}>{apartmentNumber}</p>
            <p className={styles.bathrooms}>Bathrooms: {bathrooms}</p>
            <p className={styles.bedrooms}>Bedrooms: {bedrooms}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Details;
