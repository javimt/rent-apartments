import { GoSearch } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import {setFilters} from "../../../../redux/actions/apartmentActions";
import { useEffect } from "react";

function SearchButton() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.apartment.filters);

  return (
    <div
      className="relative bg-secondary hover:bg-black mb-2 md:mb-0 flex  items-center gap-5 px-5 md:px-5 border-[1px] rounded-2xl py-2 justify-center cursor-pointer"
    >
      <GoSearch className="text-white text-3xl" />
    </div>
  );
}

export default SearchButton;
