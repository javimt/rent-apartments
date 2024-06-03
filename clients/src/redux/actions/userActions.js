import { actionTypes } from "./actionTypes";

export function getAllUser() {
  return async(dispatch) => {
    try {
      const data = await fetch(import.meta.env.VITE_API_USER);
      const result = await data.response.json();
      dispatch({ type: actionTypes.GET_ALL_USERS, payload: result });
    } catch (error) {
      console.error(error);
    }
  }
}

export function getOneUser(email) {
  return (dispatch) => {
      fetch(`${import.meta.env.VITE_API_USER}email?email=${email}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: actionTypes.GET_ONE_USER_DETAIL, payload: data }))
      .then((info) => console.log(info))
      .catch(error => console.error(error));
  }
}

export function userRole(role) {
  return {
    type: actionTypes.USER_ROLE,
    payload: role
  }
}
