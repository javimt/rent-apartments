import { IoLogoWhatsapp } from "react-icons/io";
import styles from "../styles/Contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.container}>
      <a href="https://api.whatsapp.com/send?phone=573114617436&text=hola">
        <IoLogoWhatsapp className={styles.icon} />
      </a>
    </div>
  )
}

export default Contacts
