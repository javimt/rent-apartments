import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarDay, FaCalendarWeek } from "react-icons/fa";
import useGenerateRent from '../../../hooks/custom/rentHook';


function RentComponent({apartmentId}) {
// console.log("🚀 ~ RentComponent ~ apartmentId:", apartmentId)


    const { dateHandler, date } = useGenerateRent()

    return (
        <div className='flex flex-col items-center justify-center gap-2 '>
            <div className='flex gap-2 items-center'>
                <FaCalendarDay className='size-6' />
                <DatePicker
                    selected={date.start}
                    onChange={(e) => dateHandler({ type: 'start', date: e })}
                    selectsStart
                    startDate={date.start}
                    endDate={date.end}
                    placeholderText={"Start Date"}
                    className="w-full p-2 rounded border text-xs border-gray-300 focus:outline-none focus:border-blue-500"
                    minDate={new Date()}

                />
                <FaCalendarWeek className='size-6' />
                <DatePicker
                    selected={date.end}
                    onChange={(e) => dateHandler({ type: 'end', date: e })}
                    selectsEnd
                    startDate={date.start}
                    endDate={date.end}
                    minDate={date.start}
                    placeholderText="End Date"
                    className="w-full p-2 rounded border text-xs border-gray-300 focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className='border p-1 text-white bg-black text-sm rounded-md hover:border-blue-500'>
                <button onClick={''}>Generate Rent</button>
            </div>
        </div>
    );
}

export default RentComponent;
