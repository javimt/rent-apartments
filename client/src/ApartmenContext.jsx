import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ApartmentContext = createContext();

export function useApartments() {
  return useContext(ApartmentContext);
}

export function ApartmentProvider({ children }) {
  const [apartments, setApartments] = useState([]);

  const fetchApartments = async () => {
    try {
      const response = await axios.get("https://deploy-ik5w.onrender.com/apartment");
      setApartments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
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

  const addApartment = (newApartment) => {
    setApartments([...apartments, newApartment]);
  };

  const deleteApartment = async (apartmentId) => {
    try {
      await axios.delete(`https://deploy-ik5w.onrender.com/apartment/${apartmentId}`);
      const updatedApartments = await apartments.filter((apartment) => apartment.id !== apartmentId);
      setApartments(updatedApartments);
    } catch (error) {
      console.error(`Error deleting apartment ${apartmentId}:`, error);
    }
  };

  const markApartmentAsSold = async (apartmentId) => {
    try {
      const updatedApartments = apartments.map((apartment) =>
        apartment.id === apartmentId
          ? { ...apartment, status: 'sold' }
          : apartment
      );
      setApartments(updatedApartments);
      await axios.put(`https://deploy-ik5w.onrender.com/apartment/${apartmentId}`, {
        status: 'sold'
      });
    } catch (error) {
      console.error(`Error marking apartment ${apartmentId} as sold:`, error);
    }
  };

  return (
    <ApartmentContext.Provider value={{apartments, updateApartmentAvailability, deleteApartment, addApartment, markApartmentAsSold}}>
      {children}
    </ApartmentContext.Provider>
  );
}
