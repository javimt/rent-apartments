import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "../styles/SaleCard.module.css";
import axios from "axios";
import { useApartments } from "../ApartmenContext";

const SaleCard = () => {
  const [showFilterBuy, setShowFilterBuy] = useState(false);
  const [userHasPermission, setUserHasPermission] = useState(false);
  const { user, isAuthenticated, loginWithPopup } = useAuth0();
  const { apartments, deleteApartment } = useApartments();
  const cardRef = useRef(null);

  const handleShowFilterBuy = () => {
    if (isAuthenticated) {
      setShowFilterBuy(!showFilterBuy);
    } else {
      loginWithPopup();
    }
  };

  const handleCardClick = (e) => {
    if (showFilterBuy && cardRef.current && !cardRef.current.contains(e.target)) {
      setShowFilterBuy(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCardClick);
    return () => {
      document.removeEventListener("mousedown", handleCardClick);
    };
  }, [showFilterBuy]);

  const formatPrice = (price) => {
    return `$${price.toLocaleString()}us`;
  };

  const handleDeleteApartment = async (apartmentId) => {
    try {
      await deleteApartment(apartmentId);
    } catch (error) {
      console.error(`Error deleting apartment ${apartmentId}:`, error);
    }
  };

  const apartment = apartments.find((apartment) => apartment.status === "sale");
  if (!apartment) {
    return null;
  }

  const { images, description, price, ubication, id } = apartment;

  return (
    <article className={styles.salesCard} ref={cardRef}>
      <div className={styles.card}>
      {userHasPermission && (
        <button className={styles.deleteButton} onClick={() => handleDeleteApartment(id)}>
          Delete
        </button>
      )}
      <img src={images[0]} alt="apartment furnished" className={styles.image} />
      <div className={styles.details}>
        <div className={styles.availability}>
            <button className={styles.rent} onClick={handleShowFilterBuy}>
              Buy
            </button>
        </div>

        <div className={styles.info}>
          <p className={styles.price}>{formatPrice(price)}</p>
          <p className={styles.ubication}>{ubication}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <Link to={`/${id}/details`} className={styles.link}>
        <button className={styles.det}>Details</button>
      </Link>
      </div>
    </article>
  );
};

export default SaleCard;
