import Card from "../components/Card";
import styles from "../styles/Apartments.module.css";
import { useApartments } from "../ApartmenContext";
import SearchBar from "../components/SearchBar";
import FilterPrice from "../components/FilterPrice";

const Apartments = () => {
  const { apartments, updateApartmentAvailability, deleteApartment } = useApartments();

  return (
    <section className={styles.container}>
    <SearchBar />
    <FilterPrice />
      {apartments.map((apartment) => (
        apartment.status === "rent" &&
        <Card
          key={apartment.id}
          id={apartment.id}
          images={apartment.images}
          availability={apartment.availability}
          price={apartment.price}
          ubication={apartment.ubication}
          description={apartment.description}
          bedrooms={apartment.bedrooms} 
          status={apartment.status}
          bathrooms={apartment.bathrooms} 
          apartmentNumber={apartment.apartmentNumber} 
          updateApartmentAvailability={updateApartmentAvailability}
          deleteApartment={deleteApartment}
        /> 
      ))}
    </section>
  );
};
export default Apartments;
