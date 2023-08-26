import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Details.module.css";

const Details = ({bedrooms, bathrooms, apartmenNumber, apartmentId}) => {
  const [apartment, setApartment] = useState(null);

  return (
    <article className={styles.det}>
      <div className={styles.container}>
        {/* {apartment && ( */}
          <div className={styles.details}>
            <div className={styles.images}>
              {/* {apartment.images.map((image, index) => (
                <img key={index} src={image} alt={`Apartment ${index}`} />
              ))} */}
            </div>
            <div className={styles.info}>
              <p className={styles.number}>Number: {apartmenNumber}</p>
              <p className={styles.bathrooms}>Bathrooms: {bathrooms}</p>
              <p className={styles.bedrooms}>Bedrooms: {bedrooms}</p>
            </div>
          </div>
        {/* )} */}
      </div>
    </article>
  );
};

export default Details;