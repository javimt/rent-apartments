import { useAuth0 } from "@auth0/auth0-react";
import { TbAlertTriangleFilled } from "react-icons/tb";

function AlertComponent() {
  const { user } = useAuth0()
  
  return (
    <div className="absolute flex items-center gap-1 xl:right-[-100px] font-bold md:right-[-10px] right-[30px] text-red-500 -bottom-[30px] p-1 rounded-xl w-[200px]">
       <p>{user.email_verified ? null : <TbAlertTriangleFilled >cuenta sin verificar</TbAlertTriangleFilled> }</p>
    </div>
  );
}

export default AlertComponent;
