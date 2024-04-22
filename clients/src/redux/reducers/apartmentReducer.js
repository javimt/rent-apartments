import { actionTypes } from "../actions/actionTypes";


const initialState = {
    apartments:[]
}



function apartmentReducer(state = initialState, action){
    switch (action.type) {
        case actionTypes.GET_ALL_APARTMENTS:
            
            return {...state,
                apartments: action.payload
            };
    
        default:
            return {...state};
    }
}


export default apartmentReducer