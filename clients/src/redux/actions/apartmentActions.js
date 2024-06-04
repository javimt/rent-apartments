import { actionTypes } from "./actionTypes";

const VITE_API_USER_CITIES = import.meta.env.VITE_API_USER_CITIES
const VITE_API_USER_APARTMENT = import.meta.env.VITE_API_USER_APARTMENT
const VITE_API_RENT = import.meta.env.VITE_API_RENT
const productionHandler = {
  urlProduction: VITE_API_USER_APARTMENT,
  urlDevelopment: "http://localhost:3000/apartment",
};

export function getApatments() {
  return async (dispatch) => {
    try {
      const response = await fetch(productionHandler.urlProduction, { 
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
      productionHandler.urlProduction,
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
      productionHandler.urlProduction + id
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
        VITE_API_USER_CITIES
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
      `${VITE_API_USER_APARTMENT}/city/${cityId}`
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
    fetch(VITE_API_RENT)
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: actionTypes.GET_ALL_RENT_APARTMENTS, payload: data })
      )
      .catch((error) => console.error(error));
  };
}

export function getAllSaleApartments() {
  return (dispatch) => {
    fetch(VITE_API_USER_APARTMENT+"sale")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: actionTypes.GET_ALL_SALE_APARTMENTS, payload: data })
      )
      .catch((error) => console.error(error));
  };
}

export function getApartmentsByPrice(minPrice, maxPrice) {
  return (dispatch) => {
    fetch(`${VITE_API_USER_APARTMENT}range?minPrice=${minPrice}&maxPrice=${maxPrice}`)
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
    fetch(`${VITE_API_USER_APARTMENT}rating/?rating=${rating}`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: actionTypes.GET_RATINGS, payload: data })
      )
      .catch((error) => console.error(error));
  };
}

export function updateRating(id, rating) {
  return (dispatch) => {
    fetch(VITE_API_USER_APARTMENT+"rating", {
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
