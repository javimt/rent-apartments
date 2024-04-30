import { parseToColombianMoney } from "../../utils/parseMoney";
import {
  LiaStarSolid,
  LiaBedSolid,
  LiaBathSolid,
  LiaRulerCombinedSolid,
} from "react-icons/lia";
import Form from "./form";
import { useState } from "react";
import useGetAllCities from "../../hooks/getAllCities";

function Property({ apartment }) {
  const [imagePos, setImagePos] = useState(0);
  const { city, getOneCity } = useGetAllCities();

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
    bedrooms,
    urbanizacion,
    price,
    rating,
    images,
    bathrooms,
    size,
    description,
    CityId,
  } = apartment.data;

  return (
    <main className="max-w-5xl mx-auto font-quicksand">
      <div className=" grid md:grid-cols-[70%,1fr] my-3 py-5">
        <div className="px-6">
          <h1 className="text-3xl mb-1 text-secondary flex justify-between">
            <span>{urbanizacion}</span>
            <div className="flex flex-col">
              <span className="font-semibold">
                {parseToColombianMoney(price)}
              </span>
              <p className="text-[1.2rem] mt-2">
                imagen: <span>{imagePos + 1 + " - " + images.length}</span>
              </p>
            </div>
          </h1>
          <div className="mb-5 text-sm text-secondary">
            <h3>City</h3>
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
              <span>{rating.media}</span>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${images[imagePos]})` }}
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
          <div className="mt-5 text-sm text-secondary">
            <h3>description</h3>
            <p>{description}</p>
          </div>

          <div className="flex flex-col mt-2">
            <h3 className="text-secondary text-sm font-semibold">Politicas</h3>
            <div className="mt-1 text-sm color">
              <p>
                1. Prohibido el ingreso de menores de edad, drogas y trabajadoras sexuales 
                2. Compromiso de Cero Tolerancia: Nos comprometemos a adoptar una política de cero tolerancia hacia
                  cualquier forma de explotación sexual infantil en nuestras propiedades de alquiler de apartamentos amoblados en Colombia.
                3. 
              </p>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </main>
  );
}

export default Property;
