import { actionTypes } from "./actionTypes";

export function getAllUser() {
  return async(dispatch) => {
    try {
      const data = await fetch("https://api-rent-appartament.up.railway.app/user");
      const result = await data.response.json();
      dispatch({ type: actionTypes.GET_ALL_USERS, payload: result });
    } catch (error) {
      console.error(error);
    }
  }
}

export function setAnUser(user){
  return {
    type: actionTypes.SET_AN_USER,
    payload:user
  }
}
