import { GrLocation, GrFormDown, GrFormUp } from "react-icons/gr";
import useOpenClose from "../../../../hooks/custom/OpenCloseMenu";
import useGetApartments from "../../../../hooks/custom/GetApartments";
import useGetAllCities from "../../../../hooks/custom/getAllCities";
import { FaMapMarkedAlt } from "react-icons/fa";

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
      className=" font-quicksand relative mb-2 px-3 py-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg   justify-between cursor-pointer shadow-xl"
    >
      <GrLocation />
      <div>
        <p className="md:text-sm ">Fiter by location</p>
        <p className="md:text-[10px] xl:text-xs ">
          Select a location in medellin
        </p>
      </div>
      {openStatus ? <GrFormUp /> : <GrFormDown />}
      <div className={`${openStatus ? "absolute  z-[110]" : "hidden"}  rounded-sm  bg-white w-full left-0 top-[60px] border `}>
        {city.map((e, i) => {
          return (
                
            <div onClick={() => handleCitySelect(e.id)}  key={i} className="p-1 hover:cursor-pointer text-start w-full  hover:bg-gray-300 text-gray-400 text-[13px] px-2 flex justify-between"> 
            
              <div
                key={e.id}
                value={e.id}
              >{`${e.city} - ${e.barrio}`}</div>

              <FaMapMarkedAlt className="w-[15px] h-[15px] text-green-500"/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchLocation;
