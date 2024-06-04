import { useEffect, useState } from "react";

function useAdminApartments() {
  const [apartments, setApartments] = useState({
    rent: [],
    sale: [],
  });

  const [pending, setPending] = useState(true)
  const VITE_API_USER_APARTMENT = import.meta.env.VITE_API_USER_APARTMENT

  function resetData() {
    if(!pending){setPending(true)}
    fetch(VITE_API_USER_APARTMENT)
      .then((response) => response.json())
      .then((data) => {
        const saleList = [...data.data].filter((ap) => ap.status == "sale");
        const rentList = [...data.data].filter((ap) => ap.status == "rent");
        setApartments({ ...apartments, rent: rentList, sale: saleList });
      })
      .finally(()=> setPending(false))
  }

  function getApartments(){
    resetData();
  }

  return {
    apartments,
    resetData,
    getApartments,
    pending
  };
}

export default useAdminApartments;
