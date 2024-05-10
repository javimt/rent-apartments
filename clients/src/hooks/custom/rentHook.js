import { useState } from "react";

function useGenerateRent() {
  const [date, setDate] = useState({ start: null, end: null });
  function dateHandler(e) {
    if (e.type == "start") {
      setDate({ ...date, start: e.date });
    } else {
      setDate({ ...date, end: e.date });
    }
  }

  function generateRent(rent) {
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rent),
    });
  }

  return {
    date,
    dateHandler,
    generateRent,
  };
}

export default useGenerateRent;
