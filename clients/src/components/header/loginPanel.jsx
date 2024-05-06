import { useAuth0 } from "@auth0/auth0-react";
import useAuth0GetData from "../../hooks/auth0getinData";
import LogoutButton from "../Auth0Buttons/LogoutButton";
import LoginButton from "../Auth0Buttons/LoginButton";
import { TbAlertTriangleFilled } from "react-icons/tb";
import useOpenClose from "../../hooks/OpenCloseMenu";

function LoginPanel({ showMessage }) {
  const { controledUser, isAuthenticated } = useAuth0GetData();
  const { openStatus, toogleOpen } = useOpenClose();
  const { user } = useAuth0();

  return (
    <div className="relative">
      <div className="flex justify-between items-center px-5 md:px-0 text-sm">
        {isAuthenticated ? (
          <>
          <div className="w-6 h-6 focus:outline-none cursor-pointer">
            <img
              src={user.picture}
              alt="furnished, amoblados, apartment, alquiler, rent"
              className="w-6 h-6 object-cover rounded-full focus:outline-none cursor-pointer"
              onClick={toogleOpen}
            />
            <p className="flex px-1">
              Hi!
              <span className="ml-1">{user.given_name || user.name}</span>
            </p>
          </div>
          </>
        ) : (
          <LoginButton />
        )}
      </div>
      {openStatus && (
        <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg w-48">
          {isAuthenticated ? (
            <>
              <div className="p-2 border-b">
                <LogoutButton
                  onClick={toogleOpen}
                  className="focus:outline-none text-red-500"
                />
              </div>
              {controledUser.email_verified ? null : (
                <div className="absolute flex items-center gap-1 xl:right-[-100px] font-bold md:right-[-10px] right-[30px] text-red-500 -bottom-[30px] p-1 rounded-xl w-[200px]">
                  <TbAlertTriangleFilled /> <p>cuenta sin verificar</p>
                </div>
              )}
            </>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default LoginPanel;
