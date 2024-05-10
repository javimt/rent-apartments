import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import {  setAnUser } from "../../redux/actions/userActions";
=======
import { userRole } from "../../redux/actions/userActions";
>>>>>>> refs/remotes/origin/main

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
<<<<<<< HEAD
    fetch("https://api-rent-appartament.up.railway.app/user", { //
=======
    fetch("http://localhost:3001/user/", {
>>>>>>> refs/remotes/origin/main
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {dispatch(userRole(data.data[0].role))})
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
<<<<<<< HEAD
    logedUser,
    updateUser,
=======
    users
>>>>>>> refs/remotes/origin/main
  };
}

export default useAuth0GetData;
