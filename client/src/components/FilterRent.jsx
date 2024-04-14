import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/FilterRent.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useApartments } from "../ApartmenContext";

const FilterRent = ({ apartmentId, onClose }) => {
  const [rentalData, setRentalData] = useState({
    startDate: "",
    endDate: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apartmentPrice, setApartmentPrice] = useState(0);
  const [isAvailable, setIsAvailable] = useState(true);
  const { getIdTokenClaims, user } = useAuth0();
  const { apartments, updateApartmentAvailability } = useApartments();

  useEffect(() => {
    const apartment = apartments.find(apartment => apartment.id === apartmentId);
    if (apartment) {
      setApartmentPrice(apartment.price);
      setIsAvailable(apartment.availability);
    }
  }, [apartmentId, apartments]);

  const handleRent = async () => {
    if (rentalData.startDate && rentalData.endDate && !isSubmitting) {
      setIsSubmitting(true);
      try {
        const idTokenClaims = await getIdTokenClaims();
        const idToken = idTokenClaims.__raw;
        
        // Verificar si el usuario tiene rol de administrador o superadmin
        const userId = user.email;
        const response = await axios.get(`http://localhost:3001/user/${userId}`);
        const userData = response.data;

        if (userData.isAdmin || userData.isSuperAdmin) {
          const response = await axios.post(`http://localhost:3001/apartment/${apartmentId}/rent`, {
            startDate: rentalData.startDate,
            endDate: rentalData.endDate,
            userId: user.email,
            totalPrice: apartmentPrice,
            status: "not available", 
          },
          {
            headers: {
              Authorization: `Bearer ${idToken}`,
            },
          });

        } else {
          const apart = await axios.get(`http://localhost:3001/apartment/${apartmentId}/rent`);
          const whatsappLink = `https://wa.me/3114617436?text=Hola, me gustaría rentar el apartamento ${apart.data.apartmentNumber} desde el ${rentalData.startDate} hasta el ${rentalData.endDate} que tiene un precio de ${apartmentPrice}.`;
          window.open(whatsappLink, '_blank');
        }
        setRentalData({
          startDate: "",
          endDate: "",
        });
        setIsAvailable(false);
        onClose();
        updateApartmentAvailability(apartmentId);
      } catch (error) {
        console.error('Error confirming payment:', error); 
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className={styles.filterRentContainer}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Start Date:</label>
        <input
          type="date"
          className={styles.input}
          value={rentalData.startDate}
          onChange={(e) => setRentalData({ ...rentalData, startDate: e.target.value })}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>End Date:</label>
        <input
          type="date"
          className={styles.input}
          value={rentalData.endDate}
          onChange={(e) => setRentalData({ ...rentalData, endDate: e.target.value })}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Total Price:</label>
        <input
          type="number"
          className={styles.input}
          value={apartmentPrice}
          readOnly
        />
      </div>
      <button
        className={styles.rentButton}
        onClick={handleRent}
        disabled={isSubmitting || !isAvailable}
      >
        {isSubmitting ? "Renting..." : "Rent"}
      </button>
    </section>
  );
};

export default FilterRent;
