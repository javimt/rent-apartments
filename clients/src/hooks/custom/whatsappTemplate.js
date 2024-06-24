import { useEffect, useState } from "react";

function formatDate(date) {
  // Obtener día, mes y año
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export function useWhatsapp(input) {
  const [link, setLink] = useState(null);
  console.log(input)
  useEffect(() => {
    let template = `::::::RENT-APARTMENTS-MEDELLIN::::::%0A`;
    template += `client: ${input.name}%0A`;
    template += `email: ${input.email}%0A`;
    template += `apartment id: ${input.id}%0A`;
    template += `urbanizacion: ${input.urbanizacion}%0A`;
    template += `start date: ${
      input.startDate ? formatDate(input.startDate) : ""
    }   end date: ${input.endDate ? formatDate(input.endDate) : ""}%0A`;
    template += `----------------------%0A`;
    template += `consult:%0A0A ${input.consult}%0A%0A`;
    template += `----------------------%0A`;
    setLink(
      `${'https://api.whatsapp.com/send?phone='+import.meta.env.VITE_WHATSAPP_PHONE+'&text='}${template}`
    );
  }, [input]);

  return {
    link,
  };
}

export default useWhatsapp;
