import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarDay, FaCalendarWeek } from "react-icons/fa";
import useGenerateRent from "../../../hooks/custom/rentHook";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

function RentComponent({ apartmentId, handleInput, input }) {

  return (
    <div className="flex flex-col items-center justify-center gap-2 ">
      <div className="flex gap-2 items-center">
        <FaCalendarDay className="size-6" />
        <DatePicker
          selected={input.startDate}
          onChange={(date) => handleInput({target:{name:'startDate',value:date}})}
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
          onChange={(date) =>handleInput({target:{name:'endDate',value:date}})}
          selectsEnd
          startDate={input.startDate}
          endDate={input.endDate}
          minDate={input.endDate}
          placeholderText="End Date"
          className="w-full p-2 rounded border text-xs border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      {/* {error && <div className="text-red-500">{error}</div>}
      <div className="border p-1 text-white bg-black text-sm rounded-md hover:border-blue-500">
        <button onClick={handleGenerateRent}>Generate Rent</button>
      </div> */}
    </div>
  );
}

export default RentComponent;
