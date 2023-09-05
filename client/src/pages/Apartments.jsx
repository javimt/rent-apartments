import Card from "../components/Card";
import styles from "../styles/Apartments.module.css";
import { useApartments } from "../ApartmenContext";

const Apartments = () => {
  const { apartments, updateApartmentAvailability } = useApartments();
  
  return (
    <section className={styles.container}>
      {apartments.map((apartment) => (
        <Card
          key={apartment.id}
          id={apartment.id}
          images={apartment.images}
          availability={apartment.availability}
          price={apartment.price}
          ubication={apartment.ubication}
          description={apartment.description}
          bedrooms={apartment.bedrooms} 
          bathrooms={apartment.bathrooms} 
          apartmentNumber={apartment.apartmentNumber} 
          updateApartmentAvailability={updateApartmentAvailability}
        />
      ))}
    </section>
  );
};
export default Apartments;
