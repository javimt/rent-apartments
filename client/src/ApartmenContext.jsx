import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ApartmentContext = createContext();

export function useApartments() {
  return useContext(ApartmentContext);
}

export function ApartmentProvider({ children }) {
  const [apartments, setApartments] = useState([]);
  const [filteredApartments, setFilteredApartments] = useState([]);

  const fetchApartments = async () => {
    try {
      const response = await axios.get("http://localhost:3001/apartment");
      setApartments(response.data.data);
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
      await axios.delete(`http://localhost:3001/apartment/${apartmentId}`);
      const updatedApartments = await apartments.filter((apartment) => apartment.id !== apartmentId/*  && apartment.status === "sold" */);
  console.log(updatedApartments)
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
      await axios.put(`http://localhost:3001/apartment/${apartmentId}`, {
        status: 'sold'
      });
    } catch (error) {
      console.error(`Error marking apartment ${apartmentId} as sold:`, error);
    }
  };

  const filterApartmentsByLocation = (location) => {
    const filtered = apartments.filter(
      (apartment) =>
        apartment.ubication.toLowerCase().includes(location.toLowerCase()) || 
        apartment.apartmentNumber.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredApartments(filtered);
  };

  return (
    <ApartmentContext.Provider value={{apartments: filteredApartments.length > 0 ? filteredApartments : apartments,
      updateApartmentAvailability,
      deleteApartment, 
      addApartment, 
      markApartmentAsSold,
      filterApartmentsByLocation,
    }}>
      {children}
    </ApartmentContext.Provider>
  );
}
