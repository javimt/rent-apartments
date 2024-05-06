import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApatments, filterSelectedCity } from "../redux/actions/apartmentActions";

function useGetApartments() {
  const [apartments, setApartments] = useState([]);
  const dispatch = useDispatch();
  const allApartment = useSelector((state) => state.apartment.apartments);

  function resetApartmentsList() {
    dispatch(getApatments());
  }
  const length = apartments ? apartments.length : 8;

  function filterByCity(cityId) {
    dispatch(filterSelectedCity(cityId))
  }

  useEffect(() => {
    !allApartment.length && dispatch(getApatments());
  }, []);

  useEffect(() => {
    setApartments(allApartment.data);
  }, [allApartment]);

  return {
    apartments,
    resetApartmentsList,
    length,
    filterByCity,
  };
}

export default useGetApartments;
