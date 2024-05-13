import { actionTypes } from "./actionTypes";

const productionHandler = {
  urlProduction: "https://api-rent-appartament.up.railway.app/apartment",
  urlDevelopment: "http://localhost:3000/apartment",
};

export function getApatments() {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/apartment", { //https://api-rent-appartament.up.railway.app/apartment
        headers:{
          'Content-Type':"application/json"
        }
      })
      const parsed = await response.json()
      dispatch({ type: actionTypes.GET_ALL_APARTMENTS, payload: parsed.data })
    } catch (error) {
      console.error(error)
    }
    
  };
}

export async function createAnApartment(apartment) {
  try {
    const response = await fetch(
      "https://api-rent-appartament.up.railway.app/apartment",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apartment),
      }
    );
    const parseResponse = await response.json();
    return parseResponse;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getAnAppatment(id) {
  try {
    const response = await fetch(
      `https://api-rent-appartament.up.railway.app/apartment/${id}`
    );
    const apartment = await response.json();
    return apartment;
  } catch (error) {
    console.error(error);
  }
}

export function getAllCties() {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://api-rent-appartament.up.railway.app/city"
      );
      const data = await response.json();
      dispatch({ type: actionTypes.GET_ALL_CITIES, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
}

export function filterSelectedCity(cityId) {
  return function (dispatch) {
    fetch(
      `https://api-rent-appartament.up.railway.app/apartment/city/${cityId}`
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: actionTypes.SET_SELECTED_CITY, payload: data })
      )
      .catch((error) => console.error(error));
  };
}

export function getAllRentApartments() {
  return (dispatch) => {
    fetch("https://api-rent-appartament.up.railway.app/apartment/rent")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: actionTypes.GET_ALL_RENT_APARTMENTS, payload: data })
      )
      .catch((error) => console.error(error));
  };
}

export function getAllSaleApartments() {
  return (dispatch) => {
    fetch("https://api-rent-appartament.up.railway.app/apartment/sale")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: actionTypes.GET_ALL_SALE_APARTMENTS, payload: data })
      )
      .catch((error) => console.error(error));
  };
}

export function getApartmentsByPrice(minPrice, maxPrice) {
  return (dispatch) => {
    fetch(`https://api-rent-appartament.up.railway.app/apartment/range?minPrice=${minPrice}&maxPrice=${maxPrice}`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: actionTypes.GET_APARTMENTS_BY_PRICE_RANGE,
          payload: data,
        })
      )
      .catch((error) => console.error(error));
  };
}

export function setFilters(filters) {
  return {
    type: actionTypes.SET_FILTERS,
    payload: filters,
  };
}

export function getRatings(rating) { 
  return (dispatch) => {
    fetch(`https://api-rent-appartament.up.railway.app/apartment/rating/?rating=${rating}`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: actionTypes.GET_RATINGS, payload: data })
      )
      .catch((error) => console.error(error));
  };
}

export function updateRating(id, rating) {
  return (dispatch) => {
    fetch("https://api-rent-appartament.up.railway.app/apartment/rating", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, rating }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
}
