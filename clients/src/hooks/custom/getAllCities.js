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
  useEffect(() => {
    setTimeout(()=>{

      dispatch(getAllCties());
    },500)
  }, []);

  useEffect(() => {
    setCities(citiesByRedux);
  }, [citiesByRedux]);

  return {
    city,
    getOneCity,
  };
}

export default useGetAllCities;
