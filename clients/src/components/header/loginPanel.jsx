import { useAuth0 } from "@auth0/auth0-react";
import useAuth0GetData from "../../hooks/auth0getinData";
import LogoutButton from "../Auth0Buttons/LogoutButton";
import LoginButton from "../Auth0Buttons/LoginButton";
import { TbAlertTriangleFilled } from "react-icons/tb";



function LoginPanel({showMessage}) {
    const { controledUser, isAuthenticated } = useAuth0GetData()

    console.log(controledUser.email_verified)

    return (
        <div>
            {isAuthenticated ? 
                <>
                    <LogoutButton />
                    { controledUser.email_verified ? '' :<div className="absolute flex items-center gap-1 xl:right-[-100px] font-bold md:right-[-10px] right-[30px] text-red-500 -bottom-[30px] p-1 rounded-xl w-[200px]"><TbAlertTriangleFilled/> <p >cuenta sin verificar</p></div>}
                </>

             :
                <LoginButton />
            }
        </div>
    );
}

export default LoginPanel;