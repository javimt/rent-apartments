import useGetApartments from "../../../../hooks/custom/GetApartments";
import { MdOutlineCleaningServices } from "react-icons/md";

function SearchButton() {
  const { resetApartmentsList } = useGetApartments()

  return (
    <div onClick={resetApartmentsList}
      className="relative  bg-secondary font-quicksand hover:bg-black mb-2 md:mb-0 flex flex-col items-center gap-1 px-5 md:px-5 border-[1px] rounded-2xl py-2 justify-center cursor-pointer shadow-xl"
    >
      <MdOutlineCleaningServices className="text-yellow-400 text-[25px] rotate-[30deg]"/>
      <span className="text-[12px] text-white">Reset</span>
    </div>
  );
}

export default SearchButton;
