import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCties } from "../../redux/actions/apartmentActions";

function useGetAllCities() {
  const [city, setCities] = useState([]);
  const dispatch = useDispatch();

  const citiesByRedux = useSelector((store) => store.apartment.cities);

  function getOneCity(cityId) {
    const city = citiesByRedux.find((ct) => ct.id.includes(cityId));
    if (city) {
      return city;
    }
    return {};
  }
  function dispatchCities(){
    setTimeout(()=>{
      dispatch(getAllCties());
    },100)
  }

  useEffect(() => {
    setCities(citiesByRedux);
  }, [citiesByRedux]);

  return {
    city,
    getOneCity,
    dispatchCities
  };
}

export default useGetAllCities;
