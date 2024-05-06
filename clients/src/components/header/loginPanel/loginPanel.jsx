import { useAuth0 } from "@auth0/auth0-react";
import useAuth0GetData from "../../../hooks/custom/auth0getinData";
import LogoutButton from "../../Auth0Buttons/LogoutButton";
import LoginButton from "../../Auth0Buttons/LoginButton";
import useOpenClose from "../../../hooks/custom/OpenCloseMenu";
import AlertComponent from "./alertComponent";
import LogedMenu from "./logedMenu";

function LoginPanel({ showMessage }) {
  const { controledUser, isAuthenticated } = useAuth0GetData();
  const { openStatus, toogleOpen } = useOpenClose();


  return (
    <div className="relative">
      <div className="flex justify-between items-center px-5 md:px-0 text-sm">
        {isAuthenticated ? (
          <LogedMenu toogleOpen={toogleOpen} openStatus={openStatus}/>
        ) : (
          <LoginButton />
        )}
      </div>
      {openStatus && (
        <div className="absolute min-w-[200px] z-[100] right-0 top-full mt-2 bg-white shadow-lg rounded-lg ">
          {isAuthenticated ? (
            <>
              <div className="p-2 ">
                <LogoutButton
                  onClick={toogleOpen}
                  className="focus:outline-none text-red-500"
                />
              </div>
              {controledUser.email_verified ? null : (
                <AlertComponent/>
              )}
            </>
          ) : null}
        </div>
      )}
      
    </div>
  );
}

export default LoginPanel;
