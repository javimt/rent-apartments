import { actionTypes } from "./actionTypes"





export function getApatments(){
    return (dispatch)=>{
        fetch('http://localhost:3000/apartment')
        .then(response => response.json())
        .then(data => dispatch({type: actionTypes.GET_ALL_APARTMENTS, payload: data}))
        .catch(error => console.error(error))
    }
} 

export async function createAnApartment(apartment){
    try {
        const response = await fetch('http://localhost:3000/apartment', {
            method:'POST', 
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(apartment)
    }) 
        const parseResponse = await response.json()
        return parseResponse
    } catch (error) {
        console.error(error)
        return error
    }
    
  
}
