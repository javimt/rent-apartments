import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarDay, FaCalendarWeek } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

function RentComponent({ apartmentId, handleInput, input }) {
  const { isAuthenticated, loginWithPopup } = useAuth0();

  const handleGenerateRent = async () => {
    if (!isAuthenticated) {
      // Si el usuario no está logueado, pumm, redirigir al inicio de sesión
      loginWithPopup();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 ">
        <div onClick={handleGenerateRent} className="flex gap-2 items-center">
          <FaCalendarDay className="size-6" />
          <DatePicker
            selected={input.startDate}
            onChange={(date) =>
              handleInput({ target: { name: "startDate", value: date } })
            }
            selectsStart
            startDate={input.startDate}
            endDate={input.startDate}
            placeholderText={"Start Date"}
            className="w-full p-2 rounded border text-xs border-gray-300 focus:outline-none focus:border-blue-500"
            minDate={new Date()}
          />
          <FaCalendarWeek className="size-6" />
          <DatePicker
            selected={input.endDate}
            onChange={(date) =>
              handleInput({ target: { name: "endDate", value: date } })
            }
            selectsEnd
            startDate={input.startDate}
            endDate={input.endDate}
            minDate={input.startDate}
            placeholderText="End Date"
            className="w-full p-2 rounded border text-xs border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
    </div>
  );
}

export default RentComponent;
