import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function filterData(data, filtersList) {
  if (!filtersList.length) {
    return;
  }

  return;
}

function useFilterApartments(allAppartments) {
  const [aparts, setAparts] = useState([]);
  const filterList = useSelector((store) => store.apartment.filter);

  useEffect(() => {
    if (filterList) {
      setAparts();
    } else {
    }
  }, [filterList]);

  return {};
}

export default useFilterApartments; // falata terminar dedaesarrollar el hook
