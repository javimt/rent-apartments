import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApatments } from "../redux/actions/apartmentActions";




function useGetApartments() {
    const [apartments, setApartments] = useState([])
    const dispatch = useDispatch()

    const allApartment = useSelector(state => state.apartment.apartments)

    function resetApartmentsList(){
        dispatch(getApatments())
    }
    const length = apartments ? apartments.length : 8
    
    useEffect(()=>{
        !allApartment.length && dispatch(getApatments())
    }, [])
    
    useEffect(()=>{
        setApartments(allApartment.data)
    },[allApartment])
    
    return{
        apartments,
        resetApartmentsList,
        length
    };
}

export default useGetApartments;