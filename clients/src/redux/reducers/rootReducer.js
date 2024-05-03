import { combineReducers } from "redux";
import userReducer from "./userReducer";
import apartmentReducer from "./apartmentReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  apartment: apartmentReducer,
});
