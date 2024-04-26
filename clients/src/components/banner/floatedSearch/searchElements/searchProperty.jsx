import { GrFormDown, GrFormUp } from "react-icons/gr";
import { MdApartment } from "react-icons/md";
import useOpenClose from "../../../../hooks/OpenCloseMenu";

function SearchProperty() {
  const { toogleOpen, openStatus } = useOpenClose();

  return (
    <div
      onClick={toogleOpen}
      className=" font-quicksand relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer"
    >
      <MdApartment />
      <div>
        <p>Propiedad</p>
        <p className="md:text-[10px] xl:text-xs ">Seleccione tipo de Propiedad</p>
      </div>
      <div>{openStatus ? <GrFormUp /> : <GrFormDown />}</div>
      {openStatus && (
        <div className="absolute top-[60px] py-3 px-4  bg-white shadow-light w-full left-0 z-[50]">
          <>
            <p className="font-semibold"> Alquiler Temporal</p>
          </>
          <>
            <p className="font-semibold"> Alquiler Permanente</p>
          </>
          <>
            <p className="font-semibold"> Propiedad en venta</p>
          </>
        </div>
      )}
    </div>
  );
}

export default SearchProperty;
