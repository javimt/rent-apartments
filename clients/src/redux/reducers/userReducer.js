import { actionTypes } from "../actions/actionTypes";

const initialState = {
  role: null,
  user:null // {status: 200, data: [{user}, boolean]} {user: user, registred: boolean}
};

function userReducer(state = initialState, action) {
  switch (action.type) {    
      case actionTypes.SET_AN_USER:
      return {
        ...state,
        users: action.payload,
      };
    case actionTypes.USER_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    default:
      return { ...state };
  }
}

export default userReducer;
