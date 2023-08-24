import { useAuth0 } from "@auth0/auth0-react";
import { LuLogOut } from "react-icons/lu";
import styles from "../styles/LogoutButton.module.css";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div>
      <button
        onClick={() => logout()}
        className={styles.logout}>
        Log Out <LuLogOut className={styles.icon} />
      </button>
    </div>
  );
};

export default LogoutButton;
