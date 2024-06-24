import { GrFormDown, GrFormUp } from "react-icons/gr";
import useOpenClose from "../../../../hooks/custom/OpenCloseMenu";
import useGetAllCities from "../../../../hooks/custom/getAllCities";

function SelectSection({ name, value, label, handle }) {
  const { openStatus, toogleOpen } = useOpenClose();
  const { cities } = useGetAllCities();


  return (
    <div className="flex flex-col mx-2 my-2">
      <label className="text-gray-400 text-[13px] mb-1">{label}</label>
      <div
        onClick={toogleOpen}
        className="cursor-pointer max-w-[170px] relative flex border p-[3px] rounded-md "
      >
        <span className="text-gray-400 text-[13px]">Select Bario y cuidad</span>
        {openStatus ? <GrFormUp /> : <GrFormDown />}
        <div
          className={`${
            openStatus ? "absolute" : "hidden"
          } rounded-sm z-100 bg-white w-full left-0 top-[25px] border`}
        >
          {cities &&
            cities.map((e) => {
              return (
                <button
                  key={e.id}
                  name={name}
                  onClick={(e) => handle(e)}
                  value={e.id}
                  className="p-1 hover:cursor-pointer w-full block hover:bg-gray-300 text-gray-400 text-[12px]"
                >{`${e.city} - ${e.barrio}`}</button>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default SelectSection;
