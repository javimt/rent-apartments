import useGetApartments from "../../hooks/GetApartments";
import Transition from "../complements/transition";
import Slider from "./slider";

function Services() {

  return (
    <Transition className="grid justify-center px-4 md:py-16 md:px-36 xl:px-48 xl:gap-0  font-quicksand xl:grid-cols-2 md:gap-20">
      <div className="max-w-xl mb-2 flex justify-center flex-col ">
        <h4 className="text-secondary font-semibold ">Services</h4>
        <h2 className="my-4 text-3xl font-semibold">
          Find the best furnished apartments, modern and secure units.
        </h2>
        <p className="mb-1 mt-7 text-secondary text-xs">
          We know what you're looking for at the price you need
        </p>
      </div>
      <div className=" flex justify-center items-center ">
        <Slider />
      </div>
    </Transition>
  );
}

export default Services;
