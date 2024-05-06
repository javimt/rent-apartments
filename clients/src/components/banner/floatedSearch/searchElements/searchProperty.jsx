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
        <p className="md:text-sm ">Filter Options</p>
        <p className="md:text-[10px] xl:text-xs ">Rent / Sale</p>
      </div>
      {openStatus ? <GrFormUp /> : <GrFormDown />}
      <div className={`${openStatus ? "absolute  z-[110]" : "hidden"} p-3 rounded-sm  bg-white w-full left-0 top-[60px] border `}>
        {openStatus && (
        <div>
          <div className="p-1 hover:cursor-pointer text-start hover:bg-gray-300 text-gray-400 text-[16px]">
            <button className="w-full text-left" onClick={handleRentClick}>Rent</button>
          </div>
          <div className="p-1 hover:cursor-pointer text-start hover:bg-gray-300 text-gray-400 text-[16px]">
            <button className="w-full text-left" onClick={handleSaleClick}>Sale</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default SearchProperty;
