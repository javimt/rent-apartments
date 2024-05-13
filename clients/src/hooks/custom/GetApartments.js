import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApatments, filterSelectedCity, getAllRentApartments } from "../../redux/actions/apartmentActions";

function useGetApartments() {
  const [apartments, setApartments] = useState([]);
  const [slider, setSlider] = useState([])
  const [firstCharge, setFirstCharge] = useState(false)
  const dispatch = useDispatch();
  const allApartment = useSelector((state) => state.apartment.apartments);

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
  useEffect(() => {
    setApartments(allApartment);
    if(allApartment.length && !firstCharge){
      setSlider(allApartment)
      setFirstCharge(true)
    }

  }, [allApartment]);

  return {
    apartments,
    resetApartmentsList,
    length,
    filterByCity,
    slider,
    dispatchApartments
  };
}

export default useGetApartments;
