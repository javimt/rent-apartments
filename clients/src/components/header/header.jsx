import { Link } from "react-router-dom";
import NavBar from "./navbar";
import image from "/rent apt.jpeg";
import { RiMenuFoldFill } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPanel from "./loginPanel/loginPanel";
import useOpenClose from "../../hooks/custom/OpenCloseMenu";
import useGetApartments from "../../hooks/custom/GetApartments";

function Header({main = true}) {
  const { openStatus, toogleOpen } = useOpenClose();
  const { isAuthenticated, user } = useAuth0();
  const {resetApartmentsList} = useGetApartments()
  return (
    <div className="container min-w-[400px] xl:px-5 2xl-px-0  mx-auto realtive z-[100]  font-quicksand">
      <div className="flex justify-between items-center px-5 md:px-0 text-sm">
        <Link to={"/"} onClick={resetApartmentsList} className="flex justify-center items-center relative z-[110]">
          <img
            src={image}
            alt="furnished apartments medellin"
            className="w-20 h-20 py-2 px-[6px]   flex justify-center items-center rounded-full"
          />
        </Link>
        <RiMenuFoldFill
          className="block text-2xl md:hidden cursor-pointer hover:text-red-300"
          onClick={toogleOpen}
        />
        <NavBar main={main} openStatus={openStatus} />
        <div className="flex items-center gap-2 md:gap-5 relative">
         <LoginPanel/>
        </div>
      </div>
    </div>
  );
}

export default Header;
