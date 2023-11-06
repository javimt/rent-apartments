import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "../styles/SaleCard.module.css";
import { useApartments } from "../ApartmenContext";
import axios from "axios";

const SaleCard = () => {
  const [userHasPermission, setUserHasPermission] = useState(false);
  const { user, isAuthenticated, loginWithPopup } = useAuth0();
  const { apartments, deleteApartment, markApartmentAsSold  } = useApartments();
  const cardRef = useRef(null);

  const handleBuyApartment = (apartmentId) => {
    if (isAuthenticated) {
      markApartmentAsSold(apartmentId); 
    } else {
      loginWithPopup();
    }
  };

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

  return (
    <div className={styles.container}>
      {apartments.map((apartment) => (
        apartment.status === "sale" && (
          <article key={apartment.id} className={styles.card} ref={cardRef}>
              {userHasPermission && (
                <button className={styles.deleteButton} onClick={() => handleDeleteApartment(apartment.id)}>
                  Delete
                </button>
              )}
              <img src={apartment.images[0]} alt="apartment furnished" className={styles.image} />
              <div className={styles.details}>
                <div className={styles.availability}>
                  <button className={styles.buy} onClick={() => handleBuyApartment(apartment.id)}>
                    Buy
                  </button>
                </div>
                <div className={styles.info}>
                  <p className={styles.price}>{formatPrice(apartment.price)}</p>
                  <p className={styles.ubication}>{apartment.ubication}</p>
                  <p className={styles.description}>{apartment.description}</p>
                </div>
              </div>
              <Link to={`/${apartment.id}/details`} className={styles.link}>
                <button className={styles.det}>Details</button>
              </Link>
          </article>
        )
      ))}
    </div>
  );
};

export default SaleCard;
