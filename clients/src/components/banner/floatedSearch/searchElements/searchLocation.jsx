import { GrLocation, GrFormDown, GrFormUp } from "react-icons/gr";
import useOpenClose from "../../../../hooks/OpenCloseMenu";
import useGetApartments from "../../../../hooks/GetApartments";
import useGetAllCities from "../../../../hooks/getAllCities";

function SearchLocation() {
  const { toogleOpen, openStatus } = useOpenClose();
  const {filterByCity} = useGetApartments();
  const {city} = useGetAllCities();

  const handleCitySelect = (cityId) => {
    filterByCity(cityId);
  };

  return (
    <div
      onClick={toogleOpen}
      className=" font-quicksand relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer shadow-xl"
    >
      <GrLocation />
      <div>
        <p className="md:text-sm ">Fiter by location</p>
        <p className="md:text-[10px] xl:text-xs ">
          Select a location in medellin
        </p>
      </div>
      {openStatus ? <GrFormUp /> : <GrFormDown />}
      <div className={`${openStatus ? "absolute  z-[110]" : "hidden"} p-3 rounded-sm  bg-white w-full left-0 top-[60px] border `}>
        {city.map((e) => {
          return (
            <button
              key={e.id}
              onClick={() => handleCitySelect(e.id)}
              value={e.id}
              className="p-1 hover:cursor-pointer text-start w-full block hover:bg-gray-300 text-gray-400 text-[13px]"
            >{`${e.city} - ${e.barrio}`}</button>
          );
        })}
      </div>
    </div>
  );
}

export default SearchLocation;
