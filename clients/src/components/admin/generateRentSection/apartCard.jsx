import useUpdateRentStatus from "../../../hooks/admin/updateRentStatus";
import { useState } from "react";

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

function ApartCard({ apartment, onRentSelect, getDetail }) {
  const { updateRentStatus, loading, error } = useUpdateRentStatus();

  const handleCancelRent = () => {  // 808c4b91-c3b1-4a51-ab62-124a46881c9d
    if (apartment.Rents.length) {
      updateRentStatus(apartment.Rents[0].id, "cancelled")
        .then(() => {
          alert("Rent status updated to cancelled successfully");
          getDetail(apartment.id)
        })
        .catch((error) => {
          console.error(error);
          alert("Failed to update rent status");
        });
    } else {
      alert("No rent ID provided");
    }
  };

  const handleRentSelect = () => {
    onRentSelect(rentId);
  };

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
          { !apartment.availability ?
            <button
            onClick={handleCancelRent}
            className="bg-yellow-500 p-1 rounded hover:bg-black text-xs text-white hover:text-white cursor-pointer transition-all delay-200"
          >
            cancelar renta
          </button>: <span className="bg-red-500 p-1 rounded hover:bg-black text-xs text-white delay-200">not rented</span>}
          {apartment && (
            <div className="absolute top-[0px] -left-6">
              {apartment.availability ? (
                <span className="bg-green-500 p-1 rounded text-white block text-xs transform -rotate-45">
                  Available
                </span>
              ) : (
                <span className="bg-blue-500 p-1 rounded block text-white text-xs  transform -rotate-45">
                  Not Available
                </span>
              )}
            </div>
          )}
        </div>
      ) : (
        <NonApartment />
      )}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </>
  );
}

export default ApartCard;
