import { useState } from "react";
import { parseInput } from "../../utils/parseInput";

function useAdeminApartDetail() {
  const [detail, setDetail] = useState(null);

  const VITE_API_USER_APARTMENT = import.meta.env.VITE_API_USER_APARTMENT
  function getDetail(id) {
    fetch(`${VITE_API_USER_APARTMENT}${id}`)
      .then((response) => response.json())
      .then((data) => setDetail(data.data));
  }

  function deleteApartment(id) {
    fetch(`${VITE_API_USER_APARTMENT}${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(
        (response) => response.status < 300 && alert("apartamento eliminado")
      )
      .catch((error) => console.error(error));
  }

  function updateApartment(input, id) {
    const parsedInput = parseInput(input);
    fetch(`${VITE_API_USER_APARTMENT}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsedInput),
    })
      .then((response) => response.json())
      .then(
        (response) =>
          response.status < 300 && alert("apartamento actualizado con exito")
      )
      .catch((error) => console.error(error));
  }

  function resetDetail() {
    setDetail(null);
  }

  return {
    detail,
    resetDetail,
    getDetail,
    updateApartment,
    deleteApartment,
  };
}

export default useAdeminApartDetail;
