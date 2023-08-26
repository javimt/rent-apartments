import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import FilterRent from "./FilterRent";
import styles from "../styles/Card.module.css";

const Card = ({image, description, price, ubication, availability, id, updateApartmentAvailability}) => {
  const [showFilterRent, setShowFilterRent] = useState(false);
  const { isAuthenticated, loginWithPopup } = useAuth0();
  const cardRef = useRef(null);

  const handleShowFilterRent = () => {
    if (isAuthenticated) {
      setShowFilterRent(!showFilterRent);
    } else {
      loginWithPopup();
    }
  };

  const handleCardClick = (e) => {
    if (showFilterRent && cardRef.current && !cardRef.current.contains(e.target)) {
      setShowFilterRent(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCardClick);
    return () => {
      document.removeEventListener("mousedown", handleCardClick);
    };
  }, [showFilterRent]);

  const formatPrice = (price) => {
    return `$${price.toLocaleString()}us`;
  };

  return (
    <article className={styles.card} ref={cardRef}>
      <img src={image} alt="apartament furnished" className={styles.image} />
      <div className={styles.details}>
        <div className={styles.availability}>
          <button className={styles.ava}>
            {availability ? "Available" : "Not available"}
          </button>
          {showFilterRent && (
          <FilterRent 
            apartmentId={id} 
            onClose={() => setShowFilterRent()} 
            updateApartmentAvailability={updateApartmentAvailability}/>
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
        <div className={styles.info}>
          <p className={styles.price}>{formatPrice(price)}</p>
          <p className={styles.ubication}>{ubication}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <Link to={`/${id}/`} className={styles.link}>
        <button className={styles.det}>Details</button>
      </Link>
    </article>
  );
};

export default Card;
