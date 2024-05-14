import {MdDelete} from 'react-icons/md'
import { IoMdEye } from 'react-icons/io'

function UserCard({ user, findUser }) {

    const { lastName, image } = user
    

    return (
        <div className="flex justify-between text-gray-400 font-quicksand border p-1 rounded-lg items-center text-sm">
            <img className="size-[60px] rounded-lg"  src={user.image && user.image} />
            <div className="w-[200px]">
                <p>{lastName}</p>
            </div>
            <div className="flex gap-2">
                <div onClick={()=>findUser(user.email)} className=" size-[45px] flex flex-col justify-center border p-1 rounded-lg items-center hover:bg-black text-blue-500 hover:text-white transition-all delay-300 cursor-pointer">
                    <IoMdEye className="hover:text-white" />
                    <span className="text-gray-400 text-[10px]">View</span>
                </div>
                <div  className=" size-[45px] flex flex-col justify-center border p-1 rounded-lg items-center hover:bg-black text-red-500 hover:text-white transition-all delay-300 cursor-pointer">
                    <MdDelete className="hover:text-white" />
                    <span className="text-gray-400 text-[10px]">Delete</span>
                </div>
            </div>
        </div>
    );
}

export default UserCard;