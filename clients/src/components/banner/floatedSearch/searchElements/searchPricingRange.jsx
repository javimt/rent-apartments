import { GrFormDown, GrFormUp } from "react-icons/gr";
import { MdOutlinePriceChange } from "react-icons/md";
import useOpenClose from "../../../../hooks/custom/OpenCloseMenu";
import { parseToDollarsMoney } from "../../../../utils/parseMoney";
import { GoArrowSwitch } from "react-icons/go";
import { getApartmentsByPrice } from "../../../../redux/actions/apartmentActions";
import { useDispatch } from "react-redux";
import { MdPriceChange } from "react-icons/md";

function SearchPricingRange() {
  const { toogleOpen, openStatus } = useOpenClose();
  const dispatch = useDispatch();

  const handleRangeClick = (minPrice, maxPrice) => {
    if (openStatus) {
      dispatch(getApartmentsByPrice(minPrice, maxPrice));
    }
  };

  return (
    <div
      onClick={toogleOpen}
      className=" font-quicksand relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer shadow-xl"
    >
      <MdOutlinePriceChange />
      <div>
        <p>Select a price range </p>
        <p className="md:text-[10px] xl:text-xs ">Select a range price</p>
      </div>
      <div>{openStatus ? <GrFormUp /> : <GrFormDown />}</div>
      {openStatus && (
        <div className="absolute top-[60px]  bg-white text-secondary shadow-light w-full left-0 z-[50] ">
          <div className="font- flex  p-1 hover:cursor-pointer text-start hover:bg-gray-300 text-gray-400 text-[13px]">
            <span
              onClick={() => handleRangeClick(4000000, 6000000)}
              className="cursor-pointer flex w-full  justify-between px-1 items-center"
            >
              {parseToDollarsMoney(4000000)} 
              {" - "} 
              {parseToDollarsMoney(6000000)}
              <MdPriceChange className=" text-blue-400 text-[15px]" />
            </span>
          </div>
          <div className="font- flex p-1 hover:cursor-pointer text-start hover:bg-gray-300 text-gray-400 text-[13px]">
            <span
              onClick={() => handleRangeClick(6000000, 9000000)}
              className="cursor-pointer flex w-full  justify-between px-1 items-center"
            >
              {parseToDollarsMoney(6000000)} 
              {" - "} 
              {parseToDollarsMoney(9000000)}
              <MdPriceChange className=" text-blue-400 text-[15px]" />
            </span>
          </div>
          <div className="font- flex p-1 hover:cursor-pointer text-start hover:bg-gray-300 text-gray-400 text-[13px]">
            <span
              onClick={() => handleRangeClick(9000000, 13000000)}
              className="cursor-pointer flex w-full  justify-between px-1 items-center"
            >
              {parseToDollarsMoney(9000000)} 
              {" - "} 
              {parseToDollarsMoney(13000000)}
              <MdPriceChange className=" text-blue-400 text-[15px]" />
            </span>
          </div>
          <div className="font- flex p-1 hover:cursor-pointer text-start hover:bg-gray-300 text-gray-400 text-[13px]">
            <span
              onClick={() => handleRangeClick(13000000, 20000000)}
              className="cursor-pointer flex w-full  justify-between px-1 items-center"
            >
              {parseToDollarsMoney(13000000)}
              {" - "} 
              {parseToDollarsMoney(20000000)}
              <MdPriceChange className=" text-blue-400 text-[15px]" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPricingRange;
