import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import FilterRent from "./FilterRent";
import styles from "../styles/Card.module.css";

const Card = ({
  image,
  description,
  price,
  ubication,
  availability,
  id,
}) => {
  const [showFilterRent, setShowFilterRent] = useState(false);
  const { isAuthenticated } = useAuth0();

  const handleShowFilterRent = () => {
    if (isAuthenticated) {
      setShowFilterRent(!showFilterRent);
    }
  };

  const formatPrice = (price) => {
    return `$${price.toLocaleString()}us`;
  };

  return (
    <article className={styles.card}>
      <img src={image} alt="apartament furnished" className={styles.image} />
      <div className={styles.details}>
        <div className={styles.availability}>
          <button className={styles.ava}>
            {availability ? "Available" : "Not available"}
          </button>
          {showFilterRent && <FilterRent apartmentId={id} />}
          {!showFilterRent && (
            <button
              className={styles.rent}
              onClick={handleShowFilterRent}
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
    </article>
  );
};

export default Card;
