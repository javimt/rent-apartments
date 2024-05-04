import { GrLocation, GrFormDown, GrFormUp } from "react-icons/gr";
import useOpenClose from "../../../../hooks/OpenCloseMenu";
import useGetApartments from "../../../../hooks/GetApartments";
import useGetAllCities from "../../../../hooks/getAllCities";

function SearchLocation() {
  const { toogleOpen, openStatus } = useOpenClose();
  const {filterByCity} = useGetApartments();
  const {city} = useGetAllCities();
console.log(city)

  const handleCitySelect = (city) => {
    filterByCity(city);
  };

  return (
    <div
      onClick={toogleOpen}
      className=" font-quicksand relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer"
    >
      <GrLocation />
      <div>
        <p className="md:text-sm ">Localizacion</p>
        <p className="md:text-[10px] xl:text-xs ">
          Seleccione una localizacion
        </p>
      </div>
      {openStatus ? <GrFormUp /> : <GrFormDown />}
      <div className={`${openStatus ? "absolute" : "hidden"} rounded-sm z-100 bg-white w-full left-0 top-[60px] border`}>
        {city.map((e) => {
          return (
            <button
              key={e.id}
              onClick={() => handleCitySelect(e)}
              value={e.id}
              className="p-1 hover:cursor-pointer w-full block hover:bg-gray-300 text-gray-400 text-[12px]"
            >{`${e.city} - ${e.barrio}`}</button>
          );
        })}
      </div>
    </div>
  );
}

export default SearchLocation;
