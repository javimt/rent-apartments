import { actionTypes } from "../actions/actionTypes";

const initialState = {
  apartments: [],
  filters: [],
  cities: [],
};

function apartmentReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_APARTMENTS:
      return {
        ...state,
        apartments: action.payload,
      };
    case actionTypes.GET_ALL_CITIES:
      return {
        ...state,
        cities: action.payload.data,
      };
    case actionTypes.SET_SELECTED_CITY:
      return {
        ...state,
        apartments: action.payload
      };
      case actionTypes.GET_ALL_RENT_APARTMENTS:
      return {
        ...state,
        apartments: action.payload,
      };
    case actionTypes.GET_ALL_SALE_APARTMENTS:
      return {
        ...state,
        apartments: action.payload,
      };
    case actionTypes.GET_APARTMENTS_BY_PRICE_RANGE:
      return {
        ...state,
        apartments: action.payload
      }
    default:
      return { ...state };
  }
}

export default apartmentReducer;
