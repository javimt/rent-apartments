import { useState } from "react";
import useAuth0GetData from "./auth0getinData";

function useGenerateRent(input, errors, validate) {
  //apartmentId, userId, startDate, endDate
  const { controledUser } = useAuth0GetData()
  const [inputRent, setInputRent] = useState({
    name: "",
    email: "",
    consult: "",
    startDate: "",
    endDate: "",
    id: "" //apartmentId
  })

  function setInput(input) {
    setInputRent(input)
  }

  function generateRent() {
    const parsedInput = {
      apartmentId: input.id,
      userId: input.email,
      startDate: input.startDate,
      endDate: input.endDate

    }
    if (!errors.endDate && !errors.startDate && errors.blocked == false) {
      fetch("https://api-rent-appartament.up.railway.app/rent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsedInput),
      })
        .then((response) => response.json())
        .then(response => { response.status < 300 ? alert('se ha generado una peticion de renta, sera evaluada en las proximas horas') : alert('la peticion de renta no se pudo realizar pongase en contacto con el administrador') })
        .catch(error => console.error(error));
    } else {
      alert("Please fill out all required fields before submitting your rent");
      validate(input)
    }
  }

  return {
    generateRent,
    setInputRent,
    setInput
  };
}

export default useGenerateRent;
