import { useAuth0 } from "@auth0/auth0-react";
import { LuLogIn } from "react-icons/lu";
import styles from "../styles/LoginButton.module.css";

const LoginButton = () => {
  const {loginWithPopup} = useAuth0();
  
  return (
    <div>
      <button onClick={() => loginWithPopup()} className={styles.login} >Login <LuLogIn className={styles.icon}/></button>
    </div>
  )
}

export default LoginButton;

