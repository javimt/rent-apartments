import { useEffect, useState } from "react";

function useAdminApartments() {
  const [apartments, setApartments] = useState({
    rent: [],
    sale: [],
  });

  function resetData() {
    fetch("https://api-rent-appartament.up.railway.app/apartment")
      .then((response) => response.json())
      .then((data) => {
        const saleList = [...data.data].filter((ap) => ap.status == "sale");
        const rentList = [...data.data].filter((ap) => ap.status == "rent");
        setApartments({ ...apartments, rent: rentList, sale: saleList });
      });
  }

  useEffect(() => {
    resetData();
  }, []);

  return {
    apartments,
    resetData,
  };
}

export default useAdminApartments;
