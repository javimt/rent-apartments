import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApatments, filterSelectedCity, getAllRentApartments } from "../../redux/actions/apartmentActions";

function useGetApartments() {
  const [apartments, setApartments] = useState([]);
  const dispatch = useDispatch();
  const allApartment = useSelector((state) => state.apartment.apartments);

  useEffect(()=>{
    setApartments(allApartment)
  },[allApartment])

  function resetApartmentsList() {
    dispatch(getApatments());
  }
  const length = apartments ? apartments.length : 8;

  function filterByCity(cityId) {
    dispatch(filterSelectedCity(cityId))
  }

  function filterByRent(){
    dispatch(getAllRentApartments())
  }

  function dispatchApartments(){
    dispatch(getApatments())
  }

  //slider
  function getapartmentsToSlider(){
    return fetch(import.meta.env.VITE_API_USER_APARTMENT)
    .then(response => response.json())
    .then(response => response.status < 300 && response.data)
    
  }
  

  return {
    apartments,
    resetApartmentsList,
    length,
    filterByCity,
    dispatchApartments,
    getapartmentsToSlider
  };
}

export default useGetApartments;
