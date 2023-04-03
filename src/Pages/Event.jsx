import React from 'react';
import eventdetails from '../Models/Events.json'
//import { useState } from 'react';
//import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
//import { RxDotFilled } from 'react-icons/rx';

const Event = () => {
  return (
    <div >
      <div className='flex flex-col items-center'>
        <h2 className="text-6xl font-bold py-8">Events</h2>
        <div className='px-8 py-4 grid lg:grid-cols-2 gap-4 items-center max-w-[1240px] lg:flex-row'>
          {eventdetails.Events.map((e) => {
            return (
              <div className='py-4 px-4 w-full'>
                <div className='transform hover:scale-[1.05] hover:p-2 transition-all rounded-xl  bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]'>
                  <div className="flex flex-col h-full bg-white rounded-lg p-4 items-center">
                    <figure>
                    <img className=' rounded-md' src={e.ImagePath} alt={e.NameOfEvent} />
                  </figure>
                    <div className='grid grid-cols-4 gap-2 items-center justify-between px-4 w-full align-center'>
                      <p className='col-span-3 font-bold text-3xl text-center py-4'>{e.NameOfEvent}</p>
                      <p className='col-span-1 font-bold color text-gray-500 text-center'>{e.TimeOfEvent}</p>
                    </div>
                    <p className='font-bold px-2 text-gray-500 text-center'>{e.Description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
};

export default Event;
