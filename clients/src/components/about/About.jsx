import Transition from "../complements/transition";
import { useState } from "react";

function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Transition className="grid  min-w-[400px] py-3 px-4 md:py-20 md:px-36 md:grid-cols-2 bg-slate-200/60  xl:px-36  font-quicksand  ">
      <div className="max-w-[100%] flex justify-center flex-col ">
        <h4 className="text-secondary font-semibold ">About us...</h4>
        <h2 className="my-4 text-3xl font-semibold">
          We are a company made up of a great, very talented team, 
          and our goal is to be the leading company in real estate.
        </h2>
        <div
          className={`my-2 text-3xl font-semibold ${
            isExpanded ? "" : "line-clamp-3"
          }`}
          onClick={toggleExpanded}
        >
          <p className="mb-1 mt-2 text-secondary text-xs md:pr-1">
            Our mission is to provide our customers with experiences unique and
            comfortable in high quality furnished apartments in Medellin. We
            strive to exceed the expectations of our guests and provide
            exceptional service. To be recognized as the leading option in
            furnished accommodation in Medellin. We seek to expand our offer and
            reach more destinations, always maintaining our high quality standards
            and service.
          </p>
        </div>
        <div>
          <button className="mx-auto block xl:mt-8 xl:mb-0  my-5 text-xl  bg-secondary rounded-xl px-5 py-5 font-quicksand  text-white hover:bg-black">
            Contactar
          </button>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundImage:
              'url("https://storage.atlasplan.com/public/assets/press/2023-03-office/1-stone-effect-porcelain-stoneware-office-clamp_960_960_50.webp")',
          }}
          className=" bg-cover bg-center h-[300px] object-fill md:h-[300px] md:max-w-[100%]  xl:h-[500px] xl:max-w-[700px] rounded-xl"
        ></div>
      </div>
    </Transition>
  );
}

export default About;
