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

export function getOneUser(email) {
  return async(dispatch) => {
    try {
      const data = await fetch(`https://api-rent-appartament.up.railway.app/user/email/?email=${email}`);
      const result = await data.response.json();
      dispatch({ type: actionTypes.GET_ONE_USER_DETAIL, payload: result });
    } catch (error) {
      console.error(error);
    }
  }
}

export function loginOrRegisterUser(user) {
  try {
    const response = fetch("https://api-rent-appartament.up.railway.app/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const parseResponse = response.json();
    return parseResponse;
  } catch (error) {
    console.error(error);
    return error;
  } 
}