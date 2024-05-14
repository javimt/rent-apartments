import Transition from "../complements/transition";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { FaWhatsapp, FaHandsHelping } from "react-icons/fa";

function Footer() {
   
  return (
    <div className=" min-w-[400px] px-4 py-8 md:py-44 md:px-36 flex justify-around items-center bg-black font-quicksand">
      <div className="flex text-gray-400 gap-4 flex-col items-center justify-center">
        <a href="https://www.medellinfurnishedapartment.com">
          <p className=" text-white text-sm"> www.medellinfurnishedapartment.com </p>
        </a>
        <p className="text-xs flex flex-wrap text-center items-center justify-center"> Copyright © 2024. By Alliance Developers&nbsp; <FaHandsHelping />. All right reserved</p>
        
      </div>
      <div className="flex text-white gap-6 flex-col ">
        <a href="https://www.instagram.com/amobladosyventas?igsh=Mmtza200djk3OGhl">
          <TiSocialInstagram className="size-9 "/>
        </a>
        <a href="https://www.facebook.com/Furnishedapartmentsandsales?mibextid=ZbWKwL">
          <TiSocialFacebook className=" size-9"/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=+573024470241&text=hola">
          <FaWhatsapp className="size-9 "  />
        </a>
      </div>
    </div>
  );
}

export default Footer;
