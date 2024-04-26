import { Link } from "react-router-dom";
import useOpenClose from "../../hooks/OpenCloseMenu";
import NavBar from "./navbar";
import image from "/rent apt.jpeg";
import { RiMenuFoldFill } from "react-icons/ri";
import { BsTelephoneForward } from "react-icons/bs";
function Header() {
  const { openStatus, toogleOpen } = useOpenClose();

  return (
    <div className="container min-w-[400px] xl:px-0 px-5 mx-auto font-quicksand">
      <div className="flex justify-between items-center px-5 md:px-0 text-sm">
        <Link to={"/"} className="flex justify-center items-center">
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
        <div className="flex items-center gap-2 md:gap-5">
          <Link
            to={"tel:1125420570"}
            className="flex items-center gap-4 cursor-pointer"
          >
            <BsTelephoneForward />
          </Link>
          <Link className="bg-secondary px-3 py-2 rounded-lg hover:bg-black text-white">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
