import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LuLogIn } from "react-icons/lu";
import styles from "../styles/LoginButton.module.css";

const LoginButton = () => {
  const { loginWithPopup, isAuthenticated, user, isLoading } = useAuth0();

  const handleLogin = async() => {
    await loginWithPopup();
  };

  return (
    <div>
        <button onClick={handleLogin} className={styles.login}>
          Login <LuLogIn className={styles.icon} />
        </button>
      {/* )} */}
    </div>
  );
};

export default LoginButton;
