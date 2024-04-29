import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";



function useAuth0GetData() {
    const [controledUser, setControledUser ] = useState({})


    const {user, isAuthenticated,getAccessTokenSilently, isLoading, logout, error, loginWithPopup, loginWithRedirect} = useAuth0()
  
    useEffect(()=>{

        if(user){
            setControledUser(user)
        }


    },[user, isAuthenticated,getAccessTokenSilently, isLoading, logout, error, loginWithPopup, loginWithRedirect])


    
    return ( {
        controledUser,
        isAuthenticated,
        getAccessTokenSilently,
        isLoading,
        logout,
        error,
        loginWithPopup,
        loginWithRedirect
    } );
}

export default useAuth0GetData;