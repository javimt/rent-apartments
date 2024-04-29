import { Link } from "react-router-dom";
import useOpenClose from "../../hooks/OpenCloseMenu";
import NavBar from "./navbar";
import image from "/rent apt.jpeg";
import { RiMenuFoldFill } from "react-icons/ri";
import { BsTelephoneForward } from "react-icons/bs";
import LoginButton from "../Auth0Buttons/LoginButton";
import LogoutButton from "../Auth0Buttons/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPanel from "./loginPanel";

function Header() {
  const { openStatus, toogleOpen } = useOpenClose();
  const { isAuthenticated, user } = useAuth0();

  return (
    <div className="container min-w-[400px] xl:px-0 px-5 mx-auto realtive z-[100]  font-quicksand">
      <div className="flex justify-between items-center px-5 md:px-0 text-sm">
        <Link to={"/"} className="flex justify-center items-center relative z-[110]">
          <img
            src={image}
            alt="furnished apartments medellin"
            className="w-20 py-1 flex justify-center items-center rounded-full"
          />
        </Link>
        <RiMenuFoldFill
          className="block text-2xl md:hidden cursor-pointer hover:text-red-300"
          onClick={toogleOpen}
        />
        <NavBar openStatus={openStatus} />
        <div className="flex items-center gap-2 md:gap-5 relative">
         <LoginPanel/>
        </div>
      </div>
    </div>
  );
}

export default Header;
