import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import styles from "../styles/Contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.container}>
      <a href="https://www.facebook.com/Furnishedapartmentsandsales">
        <FaFacebook className={styles.face} />
      </a>
      <a href="https://www.instagram.com/amobladosyventas/">
        <RiInstagramFill className={styles.insta} />
      </a>
      <a href="https://api.whatsapp.com/send?phone=570000&text=hola">
        <IoLogoWhatsapp className={styles.wts} />
      </a>
    </div>
  );
};

export default Contacts;
