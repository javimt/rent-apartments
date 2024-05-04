import { GrFormDown, GrFormUp } from "react-icons/gr";
import { MdApartment } from "react-icons/md";
import useOpenClose from "../../../../hooks/OpenCloseMenu";
import { getAllRentApartments, getAllSaleApartments } from "../../../../redux/actions/apartmentActions";
import { useDispatch } from "react-redux";

function SearchProperty() {
  const { toogleOpen, openStatus } = useOpenClose();

  const dispatch = useDispatch();

  const handleRentClick = () => {
    dispatch(getAllRentApartments());
  };

  const handleSaleClick = () => {
    dispatch(getAllSaleApartments());
  };

  return (
    <div
      onClick={toogleOpen}
      className=" font-quicksand relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer"
    >
      <MdApartment />
      <div>
        <p>Filter Options</p>
        <p className="md:text-[10px] xl:text-xs ">Rent / Sale</p>
      </div>
      <div>{openStatus ? <GrFormUp /> : <GrFormDown />}</div>
      {openStatus && (
        <div className="absolute top-[60px] py-3 px-4  bg-white shadow-light w-full left-0 z-[50]">
          <div>
            <button onClick={handleRentClick}>Rent</button>
          </div>
          
          <button onClick={handleSaleClick}>Sale</button>
        </div>
      )}
    </div>
  );
}

export default SearchProperty;
