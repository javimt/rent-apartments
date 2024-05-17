import panelOptions from "./panelOptions.json";
import { MdApartment } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaBuildingUser, FaBuildingFlag } from "react-icons/fa6";


function CPanel({ handleOption }) {

  return (
    <div className="p-2 xl:px-10 xl:py-10 flex gap-2 justify-around md:block overflow-x-scroll ">
      {panelOptions &&
        panelOptions.map((opt) => {
          return (
            <div
              key={opt.id}
              onClick={(e) => handleOption(opt.value)}
              className="flex font-quicksand items-center p-2 bg-white mt-2 rounded-xl border-[1px] min-w-[180px] shadow-light hover:shadow-2xl cursor-pointer hover:border-[2px]"
            >
              <span></span>
              <div className="flex justify-center items-center gap-2">
                {
                  <>
                    {opt.icon == "MdApartment" && <MdApartment />}
                    {opt.icon == "FaUsers" && <FaUsers />}
                    {opt.icon == "FaBuildingUser" && <FaBuildingUser />} 
                    {opt.icon == "FaBuildingFlag" && <FaBuildingFlag />}
                  </>
                }

                <div className="flex flex-col items-start ">
                  <span className=" font-semibold text-xs md:text-sm ">{opt.name}</span>
                  <span className="text-xs text-secondary">
                    {opt.description}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CPanel;
