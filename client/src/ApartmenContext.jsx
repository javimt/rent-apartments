import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ApartmentContext = createContext();

export function useApartments() {
  return useContext(ApartmentContext);
}

export function ApartmentProvider({ children }) {
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

  const updateApartmentAvailability = (apartmentId) => {
    const updatedApartments = apartments.map((apartment) =>
      apartment.id === apartmentId
        ? { ...apartment, availability: false }
        : apartment
    );

    setApartments(updatedApartments); 
  };

  return (
    <ApartmentContext.Provider value={{apartments, updateApartmentAvailability}}>
      {children}
    </ApartmentContext.Provider>
  );
}
