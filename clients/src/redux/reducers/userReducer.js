import { actionTypes } from "../actions/actionTypes";

const initialState = {
  users: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case actionTypes.USER_ROLE:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return { ...state };
  }
}

export default userReducer;
