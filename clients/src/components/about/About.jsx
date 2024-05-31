import Transition from "../complements/transition";
import { useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa";

function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Transition className="grid w-full  min-w-[400px] py-3 px-4 md:py-16 md:px-10 md:grid-cols-2 bg-slate-200/60 xl:px-48  font-quicksand">
      <div className="max-w-[100%] flex justify-center flex-col ">
        <h4 className="text-secondary font-semibold ">About us...</h4>
        <h2 className="my-4 text-3xl font-semibold">
          We are a company made up of a great, very talented team, and our goal
          is to be the leading company in real estate.
        </h2>
        <div
          className={`my-2 text-3xl font-semibold  ${
            isExpanded ? "" : "line-clamp-3"
          }`}
          onClick={toggleExpanded}
        >
          <p className="mb-1 mt-2 text-secondary text-sm md:pr-1 font-semibold">
            Our mision...
          </p>
          <p className="mb-1 mt-2 text-secondary text-xs md:pr-1">
            Our family-owned furnished apartment rental company stands out for
            offering exceptional accommodation experiences. With a wide range of
            apartments in prime locations, we ensure comfort and convenience for
            our customers. From modern spaces to charming apartments in historic
            areas, each one is carefully equipped to meet all needs. Moreover,
            our personalized approach and attention to detail set us apart,
            providing guests with a feeling of home while exploring new
            destinations. With quality services, security, and flexible rates,
            we strive to exceed expectations with every stay.
          </p>
        </div>
        <div className="flex justify-center items-center gap-2  mx-auto  xl:mt-8 xl:mb-0  my-5 text-xl  bg-secondary rounded-xl px-3 py-3 font-quicksand  text-white hover:bg-black hover:text-green-500 transition-all delay-200 cursor-pointer">
          <span className="text-white">
            Contact
          </span>
          <FaFacebookMessenger/>
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
