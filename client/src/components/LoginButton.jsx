import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LuLogIn } from "react-icons/lu";
import styles from "../styles/LoginButton.module.css";
import axios from "axios";

const LoginButton = () => {
  const { loginWithPopup, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await loginWithPopup();
  };

  useEffect(() => {
    if (isAuthenticated) {
      const checkAdminStatus = async () => {
        try {
          const userId = user.sub;
          const response = await axios.get(`http://localhost:3001/user/${userId}/`);
      console.log("response from server:", response.data)
          if (response.data.isAdmin) {
      console.log("redirecting to admin dashboard...")
            navigate(`user/${userId}/admin`);
          } else {
            console.error("Acces denied");
          }
        } catch (error) {
          console.error("Error to take user:", error);
        }
      }; 
      checkAdminStatus();
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <div>
      <button onClick={handleLogin} className={styles.login}>
        Login <LuLogIn className={styles.icon} />
      </button>
    </div>
  );
};

export default LoginButton;
