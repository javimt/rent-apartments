import { GrLocation, GrFormDown, GrFormUp } from "react-icons/gr";
import useOpenClose from "../../../../hooks/OpenCloseMenu";

function SearchLocation() {
  const { toogleOpen, openStatus } = useOpenClose();

  return (
    <div
      onClick={toogleOpen}
      className=" font-quicksand relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer"
    >
      <GrLocation />
      <div>
        <p>Localizacion</p>
        <p className="text-xs">Seleccione una localizacion</p>
      </div>
      <div>{openStatus ? <GrFormUp /> : <GrFormDown />}</div>
      {openStatus && (
        <div className="absolute top-[60px] py-3 px-4 bg-white shadow-light w-full left-0 z-[50]">
          <>
            <p className="font-semibold">Medellin</p>
          </>
          <>
            <p className="font-semibold">Antioquia</p>
          </>
          <>
            <p className="font-semibold">Colombia</p>
          </>
          <>
            <p className="font-semibold">Cali</p>
          </>
        </div>
      )}
    </div>
  );
}

export default SearchLocation;
