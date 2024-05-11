import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarDay, FaCalendarWeek } from "react-icons/fa";
import useGenerateRent from "../../../hooks/custom/rentHook";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

function RentComponent({ apartmentId }) {
  const { dateHandler, dates, generateRent } = useGenerateRent();
  const { user, isAuthenticated, loginWithPopup } = useAuth0();
  const [error, setError] = useState("");
  const userRole = useSelector((state) => state.user.users);

  const handleGenerateRent = async () => {
    if (!isAuthenticated || !user) {
      // Si el usuario no está logueado, pumm, redirigir al inicio de sesión
      loginWithPopup();
      return;
    }

    if (!dates.start || !dates.end) {
      // Si las fechas no están completas, mostrar error y salir
      setError("Por favor seleccione las fechas de inicio y fin.");
      return;
    }

    // Verificar si el usuario tiene el rol de "admin" o "superAdmin"
    if (userRole !== "admin" && userRole !== "superAdmin") {
      const message = `Nuevo alquiler generado:\n\nEmail: ${user.name}\n\nUser_Name: ${user.nickname}\n\nApartamento:\nID: ${apartmentId}\nFechas: ${dates.start} - ${dates.end}`;
      window.open(`https://wa.me/+573024470241/?text=${encodeURIComponent(message)}`);
      return;
    } else {
      generateRent(apartmentId, user.email);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 ">
      <div className="flex gap-2 items-center">
        <FaCalendarDay className="size-6" />
        <DatePicker
          selected={dates.start}
          onChange={(date) => dateHandler("start", date)}
          selectsStart
          startDate={dates.start}
          endDate={dates.end}
          placeholderText={"Start Date"}
          className="w-full p-2 rounded border text-xs border-gray-300 focus:outline-none focus:border-blue-500"
          minDate={new Date()}
        />
        <FaCalendarWeek className="size-6" />
        <DatePicker
          selected={dates.end}
          onChange={(date) => dateHandler("end", date)}
          selectsEnd
          startDate={dates.start}
          endDate={dates.end}
          minDate={dates.start}
          placeholderText="End Date"
          className="w-full p-2 rounded border text-xs border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <div className="border p-1 text-white bg-black text-sm rounded-md hover:border-blue-500">
        <button onClick={handleGenerateRent}>Generate Rent</button>
      </div>
    </div>
  );
}

export default RentComponent;
