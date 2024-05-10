import Transition from "../complements/transition";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className=" min-w-[400px] px-4 py-8 md:py-44 md:px-36 flex items-center bg-black font-quicksand">
      <div className="flex text-gray-400 gap-4 flex-col items-center justify-center">
        <p className="text-xs"> Copyright © 2023. </p>
        <a href="http://www.medellinfurnishedapartment.com">
          <p className=" text-white text-sm"> www.medellinfurnishedapartment.com</p>
        </a>
        <p className=" text-xs"> All right reserved</p>
      </div>
      <div className="flex justify-around text-white gap-6 flex-col">
        <a href="https://www.instagram.com/amobladosyventas?igsh=Mmtza200djk3OGhl">
          <TiSocialInstagram className="size-9 "/>
        </a>
        <a href="https://www.facebook.com/Furnishedapartmentsandsales?mibextid=ZbWKwL">
          <TiSocialFacebook className=" size-9"/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=+573024470241&text=hola">
          <FaWhatsapp className="size-9"  />
        </a>
      </div>
    </div>
  );
}

export default Footer;
