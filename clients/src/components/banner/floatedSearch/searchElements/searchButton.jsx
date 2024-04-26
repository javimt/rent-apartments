import { GoSearch } from "react-icons/go";

function SearchButton() {
  return (
    <div className="relative bg-secondary hover:bg-black mb-2 md:mb-0 flex  items-center gap-5 px-5 md:px-5 border-[1px] rounded-2xl py-2 justify-center cursor-pointer">
      <GoSearch className="text-white text-3xl" />
    </div>
  );
}

export default SearchButton;
