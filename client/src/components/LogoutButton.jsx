import { useAuth0 } from "@auth0/auth0-react";
import { LuLogOut } from "react-icons/lu";
import styles from "../styles/LogoutButton.module.css";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = (e) => {
    e.preventDefault(); 
    logout(); 
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className={styles.logout}>
          Log Out
          <LuLogOut className={styles.icon} />
      </button>
    </div>
  );
};

export default LogoutButton;
