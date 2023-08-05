import { useState } from "react";
import axios from "axios";
import styles from "../styles/Card.module.css";
import { Details } from "../pages";

const Card = ({ image, description, price, ubication, availability, rent }) => {
  const [isRenting, setIsRenting] = useState(false);
  const [isAvailable, setIsAvailable] = useState(availability);

  const handleRent = async () => {
    if (!isRenting) {
      try {
        // Realizar solicitud POST al backend para rentar el apartamento
        const response = await axios.post(`http://localhost:3001/apartment/${id}/rent`);
        setIsRenting(true);
        setIsAvailable(!isAvailable);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const formatPrice = (price) => {
    return `$${price.toLocaleString()}us`;
  };

  return (
    <article className={styles.card}>
      <img src={image} alt="apartament furnished" className={styles.image} />
      <div className={styles.details}>
        <button className={styles.ava}>
          {isAvailable ? "Available" : "Not available"}
        </button>
        <button
          className={styles.rent}
          onClick={handleRent}
          disabled={isRenting}
        >
          {isRenting ? "Renting..." : rent}
        </button>
        <p className={styles.price}>{formatPrice(price)}</p>
        <p className={styles.ubication}>{ubication}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};

export default Card;
