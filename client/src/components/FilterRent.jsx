import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/FilterRent.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useApartments } from "../ApartmenContext";
import apart from "../apartments.json";

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
      const currentDate = new Date();
      const startDate = new Date(rentalData.startDate);
      startDate.setDate(currentDate.getDate())
      const endDate = new Date(rentalData.endDate);
      endDate.setDate(currentDate.getDate())
      if (!startDate || !endDate) {
        return false;
      }
      if(startDate < currentDate) {
        return false;
      }
      if(startDate > endDate) {
        return false;
      }
      if(endDate < currentDate) {
        return false;
      }
      setIsSubmitting(true);
      try {
        const idTokenClaims = await getIdTokenClaims();
        const idToken = idTokenClaims.__raw;
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
          }
        );
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
