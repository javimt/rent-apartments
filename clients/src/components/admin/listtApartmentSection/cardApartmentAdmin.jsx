import { MdDelete, MdEditSquare } from "react-icons/md";


function CardApartAdmin({ apartment, getDetail, deleteApartment, resetData }) {
    const { images, urbanizacion, description, status, id } = apartment

    function deleteApart(){
        deleteApartment(id)

        setTimeout(()=>{
            resetData()
        }, 500)
    }
    return (
        <div className=" w-full justify-between flex items-center font-quicksand text-gray-400 gap-2 border mt-2 p-1 rounded-lg">
            <img src={images && images[0]} alt="" className="h-[50px] w-[80px] object-cover bg-center rounded-lg " />
            <div className="flex justify-between w-[180px] items-center">
                <p className="text-xs">{urbanizacion}</p>
                <span className={`border p-1 rounded-lg text-xs ${status.includes('rent')? 'bg-green-500' : 'bg-red-500'}  text-white`}>{status}</span>
            </div>
            <div className="flex gap-2">
                <div onClick={()=>getDetail(id)} className=" w-[40px] flex flex-col justify-center border p-1 rounded-lg items-center hover:bg-black text-blue-500 hover:text-white transition-all delay-300 cursor-pointer">
                    <MdEditSquare className="hover:text-white" />
                    <span className="text-gray-400 text-[10px]">Edit</span>
                </div>
                <div onClick={deleteApart} className=" w-[40px] flex flex-col justify-center border p-1 rounded-lg items-center hover:bg-black text-red-500 hover:text-white transition-all delay-300 cursor-pointer">
                    <MdDelete className="hover:text-white" />
                    <span className="text-gray-400 text-[10px]">Delete</span>
                </div>
            </div>
        </div>
    );
}

export default CardApartAdmin;