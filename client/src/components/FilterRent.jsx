import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/FilterRent.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const FilterRent = ({ apartmentId, onClose, updateApartmentAvailability }) => {
  const [rentalData, setRentalData] = useState({
    startDate: "",
    endDate: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apartmentPrice, setApartmentPrice] = useState(0);
  const [isAvailable, setIsAvailable] = useState(true);
  const { getIdTokenClaims, user } = useAuth0();
  
  useEffect(() => {
    const fetchApartment = async () => {
      try {
        const response = await axios.get(`https://deploy-ik5w.onrender.com/apartment/${apartmentId}`);
        setApartmentPrice(response.data.price);
        setIsAvailable(response.data.availability);
      } catch (error) {
        console.error(error);
      }
    };
    fetchApartment();
  }, [apartmentId]);
  
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
        const response = await axios.post(`https://deploy-ik5w.onrender.com/apartment/${apartmentId}/rent`, {
          startDate: rentalData.startDate,
          endDate: rentalData.endDate,
          userId: user.email,
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
        console.error(error); 
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
