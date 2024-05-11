import { useState } from "react";

function useGenerateRent() {
  const [dates, setDates] = useState({ start: null, end: null });

  function dateHandler(type, date) {
    setDates({ ...dates, [type]: date });
  }

  function generateRent(apartmentId, userId) {
    const rentData = {
      apartmentId,
      userId,
      startDate: dates.start,
      endDate: dates.end,
    };

    fetch("http://localhost:3001/rent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rentData),
    })
    .then((response) => response.json())
    .then((info) => console.log(info))
    .catch(error => console.error(error));
  } 

  return {
    dates,
    dateHandler,
    generateRent,
  };
}

export default useGenerateRent;
