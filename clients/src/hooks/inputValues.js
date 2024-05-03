import { useState, useEffect } from "react";

function useHandleInput() {
  const [error, setError] = useState({});
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
    cityId: "",
  });

  function verifyInputValidation(input) {
    const errorTypes = {
      LENGTH: "LENGTH",
      COMPOSE: "COMPOSE",
    };
    const errors = {};
    const responseError = (type, message) => {
      return { type, message };
    };

    if (!input.images)
      errors.image = responseError(
        errorTypes.LENGTH,
        "debe ingresar al menos una imagen la primera sera portada"
      );
    if (!input.price)
      errors.price = responseError(
        errorTypes.LENGTH,
        "debes ingresar un monto"
      );
    if (!input.description)
      error.description = responseError(
        errorTypes.LENGTH,
        "debes ingresar una descripcion"
      );
    if (!input.size)
      error.size = responseError(errorTypes.LENGTH, "debes ingresar un tamaño");
    if (!input.urbanizacion)
      error.urbanizacion = responseError(
        errorTypes.LENGTH,
        "debes ingresar una urbanizacion"
      );
    if (!input.lat)
      error.lat = responseError(
        errorTypes.LENGTH,
        "si no ingresas una latitud el mapa no mostrara la propiedad"
      );
    if (!input.lon)
      error.lon = responseError(
        errorTypes.LENGTH,
        "si no ingresas una longitud el mapa no mostrara la propiedad"
      );
    if (!input.cityId)
      error.city = responseError(errorTypes.LENGTH, "debes agregar una ciudad");

    return error;
  }

  function deleteImage(e) {
    setInput({
      ...input,
      images: input.images.filter((url) => url != e),
    });
  }

  function submit() {}

  function addImages(e) {
    if (!input.images.includes(e.current.value)) {
      if (e.current.value) {
        setInput({
          ...input,
          images: [...input.images, e.current.value],
        });
      }
    }
  }

  function handleInputs(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  }

  return {
    input,
    handleInputs,
    addImages,
    deleteImage,
  };
}

export default useHandleInput;
