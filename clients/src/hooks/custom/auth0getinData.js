import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRole } from "../../redux/actions/userActions";

function useAuth0GetData() {
  const VITE_API_USER = import.meta.env.VITE_API_USER
  const [controledUser, setControledUser] = useState({}); //logear o regstrar
  const role = useSelector((state) => state.user.role);
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
    getIdTokenClaims
  } = useAuth0();

  function loginOrRegisterUser(user) {
    fetch(VITE_API_USER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {dispatch(userRole(data.data[0].role))})
      .catch((error) => console.error(error));
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
    role
  };
}

export default useAuth0GetData;
