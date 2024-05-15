import { MdOutlineMailOutline, MdVerifiedUser } from "react-icons/md";
import { FaRegUser, FaUserShield } from "react-icons/fa";
import { FaUserSlash } from "react-icons/fa6";

function UserRenderSection({ user }) {
    return (
        <div className='shadow-2xl flex font-quicksand flex-col w-full p-4'>
            <div>
                <p className="text-gray-400 font-semibold text-center pt-2 pb-4">Preview User</p>
            </div>
            <div className="flex flex-col gap-2 w-full justify-center items-center">
                <img src={user.image} alt="" className="size-[100px] rounded-lg" />
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 border rounded-lg p-1">
                        <FaRegUser />
                        <p className="text-gray-400 text-xs">{user.name}</p>
                    </div>
                    <div className="flex gap-2 border rounded-lg p-1 ">
                        <MdOutlineMailOutline />
                        <p className="text-gray-400 text-xs">{user.email}</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex gap-2 border rounded-lg p-1 flex-grow ">
                            <FaUserSlash />
                            {
                                !user.baned ? <p className="text-green-400 text-xs">Active</p> : <p className="text-red-400 text-xs">Baned</p>
                            }
                        </div>
                        <div className="flex gap-2 border rounded-lg p-1 flex-grow">
                            <FaUserShield />
                            <p className="text-gray-400 text-xs">{user.role}</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default UserRenderSection;