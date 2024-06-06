import useGetApartments from "../../../../hooks/custom/GetApartments";
import Transition from "../../../complements/transition";
import CardApartAdmin from "../cardApartmentAdmin";

function SaleSection({ apartments, getDetail, deleteApartment, resetData }) {

  return (
    <Transition className="h-full">
      <div className=" md:h-[70%] shadow-xl p-3 overflow-x-scroll">
        <div>
          <p className="text-gray-400 text-center p-2">Sale Apartment List</p>
        </div>
        {apartments &&
          apartments.map((ap) => {
            return (
              <CardApartAdmin
                key={ap.id}
                type={'sale'}
                resetData={resetData}
                deleteApartment={deleteApartment}
                getDetail={getDetail}
                apartment={ap}
              />
            );
          })}
      </div>
    </Transition>
  );
}

export default SaleSection;
