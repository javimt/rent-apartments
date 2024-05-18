import { useEffect, useState } from "react";

function useAdminApartments() {
  const [apartments, setApartments] = useState({
    rent: [],
    sale: [],
  });

  const [pending, setPending] = useState(true)

  function resetData() {
    if(!pending){setPending(true)}
    fetch("https://api-rent-appartament.up.railway.app/apartment")
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
