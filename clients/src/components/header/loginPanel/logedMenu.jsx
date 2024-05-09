import { useAuth0 } from "@auth0/auth0-react";
import useOpenClose from "../../../hooks/custom/OpenCloseMenu";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { GrLocation, GrFormDown, GrFormUp } from "react-icons/gr";

function LogedMenu({ toogleOpen, openStatus }) {
  const { user } = useAuth0();

  return (
    <div
      onClick={toogleOpen}
      className="relative flex items-center text-gray-400 text-[13px] py-3 px-3 rounded-full shadow-xl focus:outline-none cursor-pointer border "
    >
      {/* <p className="flex flex-col text-center p-2">
        <div className="flex justify-center items-center gap-1">
          <span>Hi</span>
          <FaRegFaceSmileBeam />
        </div>
        <span className="ml-1">{user.nickname}</span>
      </p> */}
      <img
        width={40}
        src={user.picture}
        alt="furnished, amoblados, apartment, alquiler, rent"
        className=" object-cover rounded-full focus:outline-none cursor-pointer"
      />
      <div className="absolute rounded-full border p-1 left-[calc(0%-12px)] top-[calc(50%-12px)] bg-white shadow-lg">
        {!openStatus ? <GrFormDown /> : <GrFormUp />}
      </div>
    </div>
  );
}

export default LogedMenu;
