import { TbAlertTriangleFilled } from "react-icons/tb";


function AlertComponent() {
    return (
        <div className="absolute flex items-center gap-1 xl:right-[-100px] font-bold md:right-[-10px] right-[30px] text-red-500 -bottom-[30px] p-1 rounded-xl w-[200px]">
            <TbAlertTriangleFilled /> <p>cuenta sin verificar</p>
        </div>
    );
}

export default AlertComponent;