import { actionTypes } from "../actions/actionTypes";

const initialState = {
  users: [],
  user:null // {status: 200, data: [{user}, boolean]} {user: user, registred: boolean}
};

function userReducer(state = initialState, action) {
  switch (action.type) {    
      case actionTypes.SET_AN_USER:
      return {
        ...state,
        user: {user:action.payload.data[0], registred:action.payload.data[1]},
      };
    default:
      return { ...state };
  }
}

export default userReducer;
