import { GrFormDown, GrFormUp } from "react-icons/gr";
import { MdOutlinePriceChange } from "react-icons/md";
import useOpenClose from "../../../../hooks/OpenCloseMenu";
import { parseToDollarsMoney } from "../../../../utils/parseMoney";
import { GoArrowSwitch } from "react-icons/go";
import { IoInfinite } from "react-icons/io5";

function SearchPricingRange() {
  const { toogleOpen, openStatus } = useOpenClose();

  return (
    <div
      onClick={toogleOpen}
      className=" font-quicksand relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer"
    >
      <MdOutlinePriceChange />
      <div>
        <p>Rango de precio</p>
        <p className="text-xs">Seleccione el rango de precios</p>
      </div>
      <div>{openStatus ? <GrFormUp /> : <GrFormDown />}</div>
      {openStatus && (
        <div className=" absolute top-[60px] py-3 px-4 bg-white text-secondary shadow-light w-full left-0 z-[50]">
          <div className="font-semibold flex">
            <span>{parseToDollarsMoney(100)}</span>
            <GoArrowSwitch className="mx-2" />
            <span>{parseToDollarsMoney(500)}</span>
          </div>
          <div className="font-semibold flex">
            <span>{parseToDollarsMoney(500)}</span>
            <GoArrowSwitch className="mx-2" />
            <span>{parseToDollarsMoney(1000)}</span>
          </div>
          <div className="font-semibold flex">
            <span>{parseToDollarsMoney(1000)}</span>
            <GoArrowSwitch className="mx-2" />
            <IoInfinite />
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPricingRange;
