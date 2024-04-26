import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAnAppatment } from "../redux/actions/apartmentActions";



function useGetAnApartment(id) {
    
    const [apartment, setApartment] = useState({})
    const dispatch = useDispatch()


    function research (){
        setApartment(getAnAppatment(id))
    }

    useEffect(()=>{
        getAnAppatment(id)
        .then(response => setApartment(response))
    }, [])

    return {
        apartment,
        research
    }
}

export default useGetAnApartment;