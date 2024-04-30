import { actionTypes } from "../actions/actionTypes";


const initialState = {
    apartments: [],
    filters: [],
    cities: []
}



function apartmentReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_APARTMENTS:

            return {
                ...state,
                apartments: action.payload
            };
        case actionTypes.GET_ALL_CITIES:

            return {
                ...state,
                cities: action.payload.data
            };
        default:
            return { ...state };
    }
}


export default apartmentReducer