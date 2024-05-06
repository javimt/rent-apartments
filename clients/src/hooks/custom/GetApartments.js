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

  useEffect(() => {
    dispatch(getApatments());
  }, []);

  useEffect(() => {
    setApartments(allApartment.data);
    if(allApartment.data && !firstCharge){
      setSlider(allApartment.data)
      setFirstCharge(true)
    }

  }, [allApartment]);


  return {
    apartments,
    resetApartmentsList,
    length,
    filterByCity,
    slider,
  };
}

export default useGetApartments;
