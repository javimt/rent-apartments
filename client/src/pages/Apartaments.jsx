import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import image from "../assets/apartament.jpg";
import styles from "../styles/Apartaments.module.css";

const Apartaments = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await axios.get("http://localhost:3001/apartment");
        setApartments(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApartments();
  }, []);

  return (
    <section className={styles.container}>
      {apartments.map((apartment) => (
        <Card
          key={apartment.id}
          id={apartment.id}
          image={apartment.image}
          rent="Rent"
          availability={apartment.availability}
          price={apartment.price}
          ubication={apartment.ubication}
          description={apartment.description}
        />
      ))}
    </section>
  );
};

export default Apartaments;
