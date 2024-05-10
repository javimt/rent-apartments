import { GoSearch } from "react-icons/go";
import useGetApartments from "../../../../hooks/custom/GetApartments";

function SearchButton() {
  const { resetApartmentsList } = useGetApartments()

  return (
    <div onClick={resetApartmentsList}
      className="relative bg-secondary hover:bg-black mb-2 md:mb-0 flex  items-center gap-5 px-5 md:px-5 border-[1px] rounded-2xl py-2 justify-center cursor-pointer shadow-xl"
    >
      <GoSearch className="text-white text-3xl" />
    </div>
  );
}

export default SearchButton;
