import useAdminApartments from "../../../hooks/admin/adminApartments";
import RentSection from "./rent/rentSection";
import SaleSection from "./sale/saleSection";
import Transition from '../../complements/transition'


function ListApartmentSection() {

    const { apartments} = useAdminApartments()

    console.log(apartments)
    return (
            <dir className="grid h-[60%] md:grid-cols-1 xl:grid-cols-2 gap-2  ">
                <RentSection apartments={apartments.rent} />
                <SaleSection apartments={apartments.sale} />
            </dir>
    );
}

export default ListApartmentSection;