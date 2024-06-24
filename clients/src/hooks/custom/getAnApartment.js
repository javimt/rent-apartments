import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllRentApartments, getAnAppatment } from "../../redux/actions/apartmentActions";

function useGetAnApartment() {
  const [apartment, setApartment] = useState({});
  const dispatch = useDispatch();

  function research() {
    setApartment(getAnAppatment(id));
  }

  

  function getApartment(id) {
    return fetch(`${import.meta.env.VITE_API_USER_APARTMENT}${id}`)
    .then(response => response.json())
    .then(response => response.data)
    .catch(error => console.error(error))
    
  }

  return {
    apartment,
    research,
    getApartment
  };
}

export default useGetAnApartment;
