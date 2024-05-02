



import { GrFormDown, GrFormUp } from "react-icons/gr";
import useOpenClose from "../../../../hooks/OpenCloseMenu";
import useGetAllCities from '../../../../hooks/getAllCities'


function SelectOptionsSection({name, selectName, label, handle, options=[]}) {
   
    const { openStatus, toogleOpen} = useOpenClose()
    const {city} = useGetAllCities()

    return ( 
        <div className="flex flex-col mx-2 my-2">
            <label className="text-gray-400 text-[13px] mb-1">{label}</label>
            <div onClick={toogleOpen} className="cursor-pointer max-w-[170px] relative flex border-[1px] p-[3px] rounded-md ">
                <span className="text-gray-400 text-[13px]">{selectName}</span>
                {openStatus ? <GrFormUp/> :<GrFormDown/>}
                <div  className={`${openStatus ? 'absolute' : 'hidden'} rounded-sm z-100 bg-white w-full left-0 top-[25px] border`}>
                    {
                       options.length && options.map (opt => {
                        return <button onClick={(e)=> handle(e)} value={opt} name={name} className="p-1 hover:cursor-pointer w-full block hover:bg-gray-300 text-gray-400 text-[12px]">{opt}</button>
                       })
                    }
                </div>
            </div>
        </div>
     );
}

export default SelectOptionsSection;