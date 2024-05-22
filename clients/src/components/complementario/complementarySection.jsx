import Transition from "../complements/transition";
import { FaRegPaperPlane } from "react-icons/fa";

function Complementary() {
  return (
    <Transition className="grid items-center  min-w-[400px] px-4 py-8 md:py-48 md:px-10 md:gap-3 md:grid-cols-2 xl:px-48 bg-secondary font-quicksand">
      <h3 className="max-w-3xl text-4xl text-c font font-semibold text-white">
        Do you want to rent or sell your property?
      </h3>
      <div className="mx-auto mt-5 ">
        <button className="flex gap-2 items-center justify-between text-white bg-black px-5 py-5 rounded-xl">
          <FaRegPaperPlane />
          <span></span>
          <a href="https://api.whatsapp.com/send?phone=+573024470241&text=hola">Contact the commercial area</a>
        </button>
      </div>
    </Transition>
  );
}

export default Complementary;
