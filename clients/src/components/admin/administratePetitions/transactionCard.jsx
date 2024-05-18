
import { LuAlertCircle } from "react-icons/lu";
import { GrStatusGood } from "react-icons/gr";
import { MdCloudDone, MdDeleteForever } from "react-icons/md";
import useAdminGetUser from "../../../hooks/admin/adminUserDetail";
import { useEffect } from "react";

function TransactionCard({ transaction, user }) {

    const { status } = transaction

    return (
        <div className="flex justify-between w-[500] items-center border p-2 rounded gap-2 font-quicksand">

            <div className={`size-[40px] rounded-full ${status.includes('pending') ? 'bg-yellow-500' : 'bg-green-500'} flex items-center justify-center `}>
                {status.includes('pending') ? <LuAlertCircle className="text-[100px] text-yellow-200"/> : <GrStatusGood className="text-[100px] text-green-200"/>}
            </div>

            <div className="flex flex-col items-center justify-center">
                <img className='rounded-full size-[40px]' src={user.email && user.image} alt="" />
                <span className="text-xs text-gray-400">{user.name}</span>
            </div>

            <PendingPanel/>
            

            <div>
                <p className={`text-gray-400 font-semibold  text-[14px] p-1 border-[1px] border-black rounded-lg`}>{status}</p>
            </div>
        </div>
    );
}

export default TransactionCard;


function PendingPanel(){
    return (
        <div className="flex gap-3">
                <button>{<MdCloudDone className="text-[30px] text-black hover:text-green-500 transition-all delay-200 cursor-pointer hover:scale-125"/>}</button>
                <button>{<MdDeleteForever className="text-[30px] text-black hover:text-red-500 transition-all delay-200 cursor-pointer hover:scale-125"/>}</button>
        </div>
    )
}