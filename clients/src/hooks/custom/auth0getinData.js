import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setAnUser } from "../../redux/actions/userActions";

function useAuth0GetData() {
  const [controledUser, setControledUser] = useState({}); //logear o regstrar
  const logedUser = useSelector((state) => state.user.user);
  const dispatch = useDispatch()

  const {
    user,
    isAuthenticated,
    getAccessTokenSilently,
    isLoading,
    logout,
    error,
    loginWithPopup,
    loginWithRedirect,
  } = useAuth0();

  function loginOrRegisterUser(user) {
    fetch("https://api-rent-appartament.up.railway.app/user", { //
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {dispatch(setAnUser(data)) ;return data})
      .then( data => { console.log(data, 'estoy aca'); return data})
      .catch((error) => console.log(error));
  }

  function updateUser(user) {
    fetch("https://api-rent-appartament.up.railway.app/user", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

 
  useEffect(() => {
    if (user) {
      const adaptedUser = {
        email: user.email,
        name: user.name, 
        lastName: user.nickname, 
        image: user.picture,
      };
      setControledUser(adaptedUser);
    }
  }, [user, isAuthenticated]);

  return {
    controledUser,
    isAuthenticated,
    getAccessTokenSilently,
    isLoading,
    logout,
    error,
    loginWithPopup,
    loginWithRedirect,
    loginOrRegisterUser,
    logedUser,
    updateUser,
  };
}

export default useAuth0GetData;
