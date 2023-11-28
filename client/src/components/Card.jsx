import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import FilterRent from "./FilterRent";
import styles from "../styles/Card.module.css";
import axios from "axios";

const Card = ({images, description, price, ubication, availability, id, deleteApartment}) => {
  const [showFilterRent, setShowFilterRent] = useState(false);
  const { user, isAuthenticated, loginWithPopup } = useAuth0();
  const [userHasPermission, setUserHasPermission] = useState(false);
  const cardRef = useRef(null);

  const handleShowFilterRent = () => {
    if (isAuthenticated) {
      setShowFilterRent(!showFilterRent);
      //if (isAuthenticated) {
      //  window.open("https://api.whatsapp.com/send?phone=NUMERODEWHATSAPP&text=Hola,%20me%20interesa%20alquilar%20este%20apartamento.", "_blank");
      //}
    } else {
      loginWithPopup();
    }
  };

  const handleCardClick = (e) => {
    if (showFilterRent && cardRef.current && !cardRef.current.contains(e.target)) {
      setShowFilterRent(false);
    }
  };

  /* const handleConfirmPayment = async ({date, total, userId, apartmentId, status}) => {
    try {
      const response = await axios.post(`https://deploy-ik5w.onrender.com/payment`,{date, total, userId: user.email, apartmentId, status});
  console.log(response.data)
      window.location.href = "https://furnishedapartmentsmedellin.netlify.app/apartments";
    } catch (error) {
      console.error('Error al confirmar el pago:', error);
    }
  }; */

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
      await deleteApartment(id);
    } catch (error) {
      console.error(`Error deleting apartment ${id}:`, error);
    }
  };

  const checkUserPermission = async () => {
    if (isAuthenticated) {
      try {
        const response = await axios.get(`https://deploy-ik5w.onrender.com/user/${user.email}`);
        if (response.data && response.data.redirectUrl) {
          const redirectUrl = response.data.redirectUrl;
          if (redirectUrl.includes("/admin") || redirectUrl.includes("/superAdmin")) {
            setUserHasPermission(true);
          } else {
            console.log("Usuario no tiene permisos de administrador ni superadministrador.");
          }
        } else {
          console.log("No se encontraron datos para el usuario.");
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
