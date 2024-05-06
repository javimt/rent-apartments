import Transition from "../../../complements/transition";
import CardApartAdmin from "../cardApartmentAdmin";



function SaleSection({ apartments }) {
    return (
        <Transition className='h-full'>
            <div className="md:h-[70%]  shadow-xl p-3 overflow-x-scroll">
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

export default SaleSection;