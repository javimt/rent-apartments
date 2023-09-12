import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import FilterRent from "./FilterRent";
import styles from "../styles/Card.module.css";
import axios from "axios";

const Card = ({images, description, price, ubication, availability, id, updateApartmentAvailability}) => {
  const [showFilterRent, setShowFilterRent] = useState(false);
  const { user, isAuthenticated, loginWithPopup } = useAuth0();
  const [userHasPermission, setUserHasPermission] = useState(false);
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

  const handleDeleteApartment = async () => {
    try {
      await axios.delete(`https://deploy-ik5w.onrender.com/apartment/${id}`);
      updateApartmentAvailability()
    } catch (error) {
      console.error(`Error deleting apartment ${id}:`, error);
    }
  };

  const checkUserPermission = async () => {
    if (isAuthenticated) {
      try {
        const response = await axios.get(`https://deploy-ik5w.onrender.com/user/${user.email}`);
        const userRole = response.data.role;
        if (userRole === "admin" || userRole === "superAdmin") {
          setUserHasPermission(true);
        }
      } catch (error) {
        console.error("Error obteniendo el rol del usuario:", error);
      }
    }
  };

  useEffect(() => {
    checkUserPermission();
  }, [user, isAuthenticated]);

  const firsImage = Array.isArray(images) && images.length > 0 ? images[0] : null;

  return (
    <article className={styles.card} ref={cardRef}>
    {userHasPermission && (
      <button className={styles.deleteButton} onClick={handleDeleteApartment}>
        Delete
      </button>
    )}
      <img src={firsImage} alt="apartament furnished" className={styles.image} />
      <div className={styles.details}>
        <div className={styles.availability}>
          <button className={styles.ava}>
            {availability ? "Available" : "Not available"}
          </button>
          {showFilterRent && (
          <FilterRent 
            apartmentId={id} 
            onClose={() => setShowFilterRent()}/>
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
      <Link to={`/${id}/details`} className={styles.link}>
        <button className={styles.det}>Details</button>
      </Link>
    </article>
  );
};

export default Card;
