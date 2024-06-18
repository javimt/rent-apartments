import { useState } from "react";
import axios from 'axios'
import useAuth0GetData from "../custom/auth0getinData";
// pending
// observations

function useAnotations() {
    const [input, setInput] = useState({
        pending:'',
        observations:'',
        
    })

    const {controledUser} = useAuth0GetData()

    const VITE_API_APARTMENT_ANOTATIONS = import.meta.env.VITE_API_APARTMENT_ANOTATIONS

    function handleInputAnotation(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    

    function submitAnotations(apartmentId){
        return axios.post(`${VITE_API_APARTMENT_ANOTATIONS}?email=${controledUser.email}`, {...input, apartmentId:apartmentId})
        .then(response => response.data)
        .then(response => response.status < 300 && alert('anotacion creada'))
        .then(() => setInput({
            pending:'',
            observations:'',
        }))
        .catch(error => {
            console.error(error)
            alert('no se pudo crear la anotacion debido a un problema')
        })
    }




    

    return {
        handleInputAnotation,
        submitAnotations,
        input
    };
}

export default useAnotations;