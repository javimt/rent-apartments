import { GrFormDown, GrFormUp } from "react-icons/gr";
import { MdApartment } from "react-icons/md";
import useOpenClose from "../../../../hooks/custom/OpenCloseMenu";
import { getAllRentApartments, getAllSaleApartments } from "../../../../redux/actions/apartmentActions";
import { useDispatch } from "react-redux";
import { GiHouseKeys } from "react-icons/gi";


function SearchProperty() {
  const { toogleOpen, openStatus } = useOpenClose(true, 4000);
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
      className=" font-quicksand relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer shadow-xl"
    >
      <MdApartment />
      <div>
        <p className="md:text-sm ">Select a Property type</p>
        <p className="md:text-[10px] xl:text-xs ">Select rent or sale properties</p>
      </div>
      {openStatus ? <GrFormUp /> : <GrFormDown />}
      <div className={`${openStatus ? "absolute  z-[110]" : "hidden"}  rounded-sm  bg-white w-full left-0 top-[60px] border `}>
        {openStatus && (
          <div>
            <div onClick={handleRentClick} className="p-2 hover:cursor-pointer text-start hover:bg-gray-300 text-gray-400 text-[13px] flex justify-between gap-1">
              <div className="px-2 text-left" >For Rent...</div>
              <GiHouseKeys className="text-yellow-400 text-[15px]" />
            </div>
            <div onClick={handleSaleClick} className="p-2 hover:cursor-pointer text-start hover:bg-gray-300 text-gray-400 text-[13px] flex justify-between gap-1">
              <div className="px-2 text-left" >For Sale...</div>
              <GiHouseKeys className="text-yellow-400 text-[15px]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchProperty;
