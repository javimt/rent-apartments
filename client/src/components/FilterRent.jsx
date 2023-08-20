import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/FilterRent.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const FilterRent = ({ apartmentId }) => {
  const [rentalData, setRentalData] = useState({
    startDate: "",
    endDate: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apartmentPrice, setApartmentPrice] = useState(0);
  const [isAvailable, setIsAvailable] = useState(true);
  const { getIdTokenClaims } = useAuth0();

  useEffect(() => {
    const fetchApartment = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/apartment/${apartmentId}`);
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
      setIsSubmitting(true);
      try {
        const idTokenClaims = await getIdTokenClaims();
        const idToken = idTokenClaims.__raw;
  //console.log(idToken)
        const response = await axios.post(`http://localhost:3001/apartment/${apartmentId}/rent`, {
          startDate: rentalData.startDate,
          endDate: rentalData.endDate,
          status: "not available", 
          },
          {
            headers: {
              Authorization: `Bearer ${idToken}`,
            },
          }
        );
  console.log("lo que se envia",response.data);
        setRentalData({
          startDate: "",
          endDate: "",
        });
        setIsAvailable(false);
      } catch (error) {
        console.error({error: error.message}); 
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className={styles.filterRentContainer}>
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
    </div>
  );
};

export default FilterRent;
