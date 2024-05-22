import { parseToColombianMoney } from "../../utils/parseMoney";
import {
  LiaStarSolid,
  LiaBedSolid,
  LiaBathSolid,
  LiaRulerCombinedSolid,
} from "react-icons/lia";
import Form from "./form";
import { useState } from "react";
import useGetAllCities from "../../hooks/custom/getAllCities";
import useInputQuery from "../../hooks/custom/inpurtQueryForm";

function Property({ apartment }) {
  const [imagePos, setImagePos] = useState(0);
  const { getOneCity } = useGetAllCities();
  const { handleInput } = useInputQuery()

  function handleImagePos(e) {
    if (e.target.name == "next") {

      if (apartment.data.images.length > imagePos + 1) {
        setImagePos((prev) => prev + 1);
      }
    } else {
      if (0 < imagePos) {
        setImagePos((prev) => prev - 1);
      }
    }
  }
  const {
    id,
    bedrooms,
    urbanizacion,
    price,
    rating,
    images,
    bathrooms,
    size,
    description,
    CityId,
    availability
  } = apartment.data;

  return (
    <main className="max-w-5xl mx-auto font-quicksand">
      <div className=" grid md:grid-cols-[65%,1fr] 2xl:grid-cols-[70%,1fr] my-3 py-5">
        <div className="px-6">
          <h1 className="text-2xl mb-1 text-secondary flex justify-between">
            <span className="text-3xl">{urbanizacion}</span>
            <div className="flex flex-col">
              <span className="font-semibold">
                {parseToColombianMoney(price)}
              </span>
              <p className="text-sm mt-2">
                imagen: {images ? <span>{imagePos + 1 + " - " + images.length}</span> : 'no images'}
              </p>
            </div>
          </h1>
          <div className="mb-5 text-sm text-secondary">
            <div className="flex">
              <span className="mr-1">{getOneCity(CityId).city}</span>
              <span>-</span>
              <span className="ml-1">{getOneCity(CityId).barrio}</span>
            </div>
          </div>
          <div className="flex gap-5 items-center my-4">
            <h2 className="font-semibold text-xl text-secondary">
              Valoration:
            </h2>
            <div className="flex items-center px-2 py-1 rounded-lg bg-secondary top-2 right-2 text-white">
              <LiaStarSolid />
              <span>5</span>
            </div>
          </div>
          {/* imagen */}
          <div
            style={{ backgroundImage: `url(${images ? images[imagePos] : ''})` }}
            className="relative w-full h-[500px] rounded-xl bg-cover bg-center object-fill"
          >
            <button
              onClick={handleImagePos}
              name="prev"
              className="absolute text-white font-bold top-[50%] -translate-y-[50%] bg-gray-400/40 rounded-full backdrop:blur z-[1] left-10 px-4 py-3"
            >
              {"<"}
            </button>
            <button
              onClick={handleImagePos}
              name="next"
              className="absolute text-white font-bold top-[50%] right-10  -translate-y-[50%] bg-gray-400/40 rounded-full px-4 py-3 "
            >
              {">"}
            </button>
            <div>
              {availability ? <span className="p-2 absolute rounded-lg top-[10px] left-[10px] bg-green-500 text-white">available</span>: <span className="p-2 absolute rounded-lg font-semibold  top-[10px] left-[10px] bg-yellow-400">not Available</span>}
            </div>
          </div>
          <div className="gap-4 lg:flex mt-4">
            <div className="flex items-center justify-center mt-2 md:mt-0 px-2 py-1 rounded-lg bg-slate-300">
              <LiaBedSolid />
              <span className="text-sm text-secondary mx-1 font-semibold">
                {bedrooms}
              </span>
            </div>
            <div className="flex items-center justify-center mt-2 md:mt-0 px-2 py-1 rounded-lg bg-slate-300">
              <LiaBathSolid />
              <span className="text-sm text-secondary mx-1 font-semibold">
                {bathrooms}
              </span>
            </div>
            <div className="flex items-center justify-center mt-2 md:mt-0 px-2 py-1 rounded-lg bg-slate-300">
              <LiaRulerCombinedSolid />
              <span className="text-sm text-secondary mx-1 font-semibold">
                {size}
              </span>
            </div>
          </div>
          <div className="mt-5 text-[13px] text-gray-400 flex flex-col gap-2">
            <h3 className="text-secondary text-sm font-semibold">Description</h3>
            <p>{description}</p>
          </div>

          <div className="flex flex-col mt-2">
            <h3 className="text-secondary text-sm font-semibold">Politicas</h3>
            <div className="mt-1 text-xs color border text-gray-400 p-2 border-red-600 shadow-xl rounded-lg font-normal">
              <p>
                Entry of minors, drugs, and sex workers is prohibited. Zero
                Tolerance Commitment: We commit to adopting a zero-tolerance
                policy towards any form of child sexual exploitation in our
                furnished apartment rental properties in Colombia. In our
                facilities, we consider any form of sexual abuse against minors
                as a serious violation of human rights and a violation of
                Colombian law against child sexual exploitation. This includes
                any type of sexual contact, indecent exposure, sexual
                exploitation through pornography, or any other sexual act
                performed against a child.
              </p>
            </div>
          </div>
        </div>
        <Form apartmentId={id} availability={availability} />

      </div>
    </main>
  );
}

export default Property;
