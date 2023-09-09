import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/Details.module.css";
import { useParams } from "react-router-dom";
import { useApartments } from "../ApartmenContext";
import FilterRent from "../components/FilterRent";
import { useAuth0 } from "@auth0/auth0-react";

const Details = () => {
  const { apartments } = useApartments();
  const { id } = useParams();
  const [showFilterRent, setShowFilterRent] = useState(false);
  const { isAuthenticated, loginWithPopup } = useAuth0();

  const handleShowFilterRent = () => {
    if (isAuthenticated) {
      setShowFilterRent(!showFilterRent);
    } else {
      loginWithPopup();
    }
  };

  const apartment = apartments.find((apartment) => apartment.id === id);
  if (!apartment) {
    return null;
  }
  const { bedrooms, bathrooms, apartmentNumber, images, price, availability, updateApartmentAvailability } =
    apartment || {};

  const formatPrice = (price) => {
    return `$${price.toLocaleString()}us`;
  };

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
          <div className={styles.availability}>
            <button className={styles.ava}>
              {availability ? "Available" : "Not available"}
            </button>
            {showFilterRent && (
              <FilterRent
                apartmentId={id}
                onClose={() => setShowFilterRent()}
                updateApartmentAvailability={updateApartmentAvailability}
              />
            )}
            {!showFilterRent && (
              <button
                className={styles.rent}
                onClick={() => handleShowFilterRent(!availability)}
                disabled={!availability}
              >
                Rent
              </button>
            )}
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.info}>
            <p className={styles.price}>{formatPrice(price)}</p>
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
