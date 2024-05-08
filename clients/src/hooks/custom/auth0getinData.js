import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

function useAuth0GetData() {
  const [controledUser, setControledUser] = useState({});

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

  useEffect(() => {
    if (user) {
      const adaptedUser = {
        email: user.email,
        name: user.name, 
        lastName: user.nickname, 
        image: user.picture,
      };
      setControledUser(adaptedUser);
      if (isAuthenticated) {
        loginOrRegisterUser(adaptedUser);
      }
  //console.log(adaptedUser)
    }
  }, [user, isAuthenticated]);

  function loginOrRegisterUser(user) {
    fetch("http://localhost:3001/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

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
  };
}

export default useAuth0GetData;
