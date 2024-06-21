import { useState, useEffect } from "react";
import axios from "axios";
import { parseInput } from "../../utils/parseInput";

function useHandleInput() {
  const [error, setError] = useState({ submit: true });
  const [input, setInput] = useState({
    images: [],
    price: 0,
    description: "",
    bedrooms: 1,
    size: 0,
    rating: 3,
    bathrooms: 1,
    urbanizacion: "",
    lat: "",
    lon: "",
    status: "rent",
    CityId: "",
  });

  function editApartment(input) {
    setInput(input);
  }

  function verifyInputValidation(input) {
    const errorTypes = {
      LENGTH: "LENGTH",
      COMPOSE: "COMPOSE",
    };
    let errors = { submit: false };
    const responseError = (type, message) => {
      return { type, message };
    };

    if (input.images.length == 0)
      errors.images = responseError(
        errorTypes.LENGTH,
        "debe ingresar al menos una imagen la primera sera portada"
      );
    if (!input.price)
      errors.price = responseError(
        errorTypes.LENGTH,
        "debes ingresar un monto"
      );
    if (!input.description)
      errors.description = responseError(
        errorTypes.LENGTH,
        "debes ingresar una descripcion"
      );
    if (!input.size)
      errors.size = responseError(
        errorTypes.LENGTH,
        "debes ingresar un tamaño"
      );
    if (!input.urbanizacion)
      errors.urbanizacion = responseError(
        errorTypes.LENGTH,
        "debes ingresar una urbanizacion"
      );
    if (!input.lat)
      errors.lat = responseError(
        errorTypes.LENGTH,
        "si no ingresas una latitud el mapa no mostrara la propiedad"
      );
    if (!input.lon)
      errors.lon = responseError(
        errorTypes.LENGTH,
        "si no ingresas una longitud el mapa no mostrara la propiedad"
      );
    if (!input.CityId)
      errors.city = responseError(
        errorTypes.LENGTH,
        "debes agregar una ciudad"
      );

    setError(errors);
  }

  function deleteImage(e) {
    setInput({
      ...input,
      images: input.images.filter((url) => url != e),
    });
    verifyInputValidation({
      ...input,
      images: input.images.filter((url) => url != e),
    });
  }

  function submit() {
    if (!error.submit) {
      if (Object.keys(error).length == 1) {
        axios
          .post(
            import.meta.env.VITE_API_USER_APARTMENT,
            parseInput(input)
          )
          .then((response) => {
            alert("se ha creado con exito");
            setInput({
              images: [],
              price: 0,
              description: "",
              bedrooms: 1,
              size: 0,
              rating: 3,
              bathrooms: 1,
              urbanizacion: "",
              lat: "",
              lon: "",
              status: "rent",
              CityId: "",
            });
          })
          .catch((error) => console.error(error));
      }
    } else {
      alert("los campos deben esta completos");
      verifyInputValidation(input);
    }
  }

  function addUrl(url){
    setInput({
      ...input,
      images: [...input.images, url],
    });
    verifyInputValidation({
      ...input,
      images: [...input.images, url],
    });
  }

  function addImages(e) {
    if (!input.images.includes(e)) {
      if (e) {
        setInput({
          ...input,
          images: [...input.images, e],
        });
        verifyInputValidation({
          ...input,
          images: [...input.images, e],
        });
      }
    }
  }

  function handleInputs(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    verifyInputValidation({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return {
    input,
    handleInputs,
    addImages,
    deleteImage,
    error,
    submit,
    editApartment,
    addUrl
  };
}

export default useHandleInput;
