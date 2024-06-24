import { useRef } from "react";
import useAdeminApartDetail from "../../../hooks/admin/AdminApartmentDetail";
import ApartCard from "./apartCard";
import useAdminTransaction from "../../../hooks/admin/adminTransacion";

function GenerateRentSection() {
  const { getDetail, detail } = useAdeminApartDetail();
  console.log("🚀 ~ GenerateRentSection ~ detail:", detail)
  const {deleteTransaction} = useAdminTransaction()
  const reference = useRef(null);

  return (
    <div className="flex justify-center flex-col items-center shadow-xl h-[70%] p-0  font-quicksand">
      <div className="flex  gap-2 w-full justify-center">
        <input
          ref={reference}
          type="text"
          placeholder="inser an apartment id"
          className="text-sm w-[80%] border rounded p-2"
        />
        <button
          onClick={() => getDetail(reference.current.value)}
          className="bg-secondary py-2 px-3 text-white font-semibold rounded hover:bg-black transition-all delay-300 cursor-pointer shadow-xl"
        >
          search
        </button>
      </div>
      <div className="h-[80%] w-full flex px-5 ">
        {
          <div className="grid md:grid-cols-2  w-full items-center ">
            <div className="flex justify-center">
              <img
                className="size-[300px]"
                src="https://i.pinimg.com/originals/f9/6f/bf/f96fbf44a4cc955f01be77edf67f8b57.jpg"
                alt="alquiler, amoblados, furnished, apartments, medellin"
              />
            </div>
            <div className="flex justify-center">
              <div className=" w-full md:w-full h-[90px] border rounded-lg shadow-xl">
                <ApartCard getDetail={getDetail} apartment={detail} />
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default GenerateRentSection;
