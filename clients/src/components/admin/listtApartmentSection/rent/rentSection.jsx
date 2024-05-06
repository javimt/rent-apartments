import useGetApartments from "../../../../hooks/custom/GetApartments";
import Transition from "../../../complements/transition";
import CardApartAdmin from "../cardApartmentAdmin";




function RentSection({ apartments }) {
    

    return (
        <Transition className='h-full'>
            <div className=" md:h-[70%] shadow-xl p-3 overflow-y-scroll">
                <div>
                    <p className="text-gray-400 text-center p-2">Rents Apartment List</p>
                </div>
                {apartments && apartments.map(ap => {
                    return <CardApartAdmin apartment={ap} />
                })}
            </div>
        </Transition>

    );
}

export default RentSection;