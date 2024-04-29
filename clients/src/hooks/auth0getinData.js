import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";



function useAuth0GetData() {
    const [controledUser, setControledUser ] = useState({})


    const {user, isAuthenticated} = useAuth0()
  
    useEffect(()=>{

        if(user){
            setControledUser(user)
        }


    },[user, isAuthenticated])


    
    return ( {
        controledUser,
        isAuthenticated
    } );
}

export default useAuth0GetData;