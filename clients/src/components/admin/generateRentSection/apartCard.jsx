function NonApartment() {

  return (
    <div className="flex  h-full justify-around items-center  mx-2 font-quicksand">
      <img
        className="size-[60px] "
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNNj6V_RIdixIPuRqA6FLa0ysmxC8P2rRIA&s"
        }
        alt="card apartment images"
      />
      <span className=" text-center md:text-sm text-[13px]">
        {"ingrese id para obtener apartamento"}
      </span>
    </div>
  );
}

function ApartCard({ apartment }) {

  return (
    <>
      {apartment ? (
        <div className="flex relative  h-full justify-around items-center  mx-2">
          <img
            className="size-[80px] rounded-lg"
            src={
              apartment.images
                ? apartment.images[0]
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNNj6V_RIdixIPuRqA6FLa0ysmxC8P2rRIA&s"
            }
            alt="card apartment images"
          />
          <span>
            {apartment.urbanizacion
              ? apartment.urbanizacion
              : "inrese id para obtener apartamento"}
          </span>
          <button className="bg-yellow-500 p-1 rounded hover:bg-black hover:text-white cursor-pointer transition-all delay-200 ">
            chanage availability
          </button>
          {apartment && (
            <div className="absolute top-[-20px] left-0">
              {apartment.availability ? (
                <span className="bg-blue-500 p-1 rounded text-white">
                  Available
                </span>
              ) : (
                <span className="bg-blue-500 p-1 rounded text-white">
                  Not Available
                </span>
              )}
            </div>
          )}
        </div>
      ) : (
        <NonApartment />
      )}
    </>
  );
}

export default ApartCard;
