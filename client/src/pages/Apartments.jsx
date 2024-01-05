import Card from "../components/Card";
import styles from "../styles/Apartments.module.css";
import { useApartments } from "../ApartmenContext";
import SearchBar from "../components/SearchBar";
import FilterPrice from "../components/FilterPrice";
import { useState, useEffect } from "react";

const Apartments = () => {
  const { apartments, updateApartmentAvailability, deleteApartment } = useApartments();
  const [filteredApartments, setFilteredApartments] = useState(apartments);

  const updateFilteredApartments = (filtered) => {
    setFilteredApartments(filtered);
  };

  return (
    <section className={styles.container}>
    <SearchBar />
    <FilterPrice apartments={apartments} updateFilteredApartments={updateFilteredApartments} />
      {filteredApartments.map((apartment) => (
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
