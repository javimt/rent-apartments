import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRole } from "../../redux/actions/userActions";

function useAuth0GetData() {
  const [controledUser, setControledUser] = useState({}); //logear o regstrar
  const users = useSelector((state) => state.user.users);
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
    fetch("https://api-rent-appartament.up.railway.app/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
    users
  };
}

export default useAuth0GetData;
