import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center m-8">
      <figure>
        <img src = "https://res.cloudinary.com/dtmgysc9y/image/upload/v1677077863/error_ymfiwq.svg" alt="error" className=""/>
      </figure>
      <h2 className='md:text-4xl text-2xl font-bold py-8'>The site is under maintenance</h2>
      <NavLink to="/">
        <button className="border-2 border-purple-400 rounded-full px-8 py-2 mt-8 bg-purple-800 text-gray-100 font-bold"> Go Back</button>
      </NavLink>
    </div>
  );
};



export default Error;
