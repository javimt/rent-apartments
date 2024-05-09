import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useAuth0GetData() {
  const [controledUser, setControledUser] = useState({});
  const users = useSelector((state) => state.user.users);

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
    fetch("https://api-rent-appartament.up.railway.app/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  function updateUser(user) {
    fetch("http://localhost:3001/user", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
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
    updateUser
  };
}

export default useAuth0GetData;
