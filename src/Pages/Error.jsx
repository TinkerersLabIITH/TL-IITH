import React from "react";
// import styled from "styled-components";
// import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    // <Wrapper>
    //   <img src="../images/error.svg" alt="error" />
      
    // </Wrapper>
    <div className="flex flex-col items-center m-8">
      <figure>
        <img src = "src/Images/error.svg" alt="error" className=""/>
      </figure>
      <h2 className='md:text-4xl text-2xl font-bold py-8'>The site is under maintenance</h2>
      <NavLink to="/">
        <button className="border-2 border-purple-400 rounded px-8 py-2 mt-8 bg-purple-800 text-gray-100 font-bold"> Go Back</button>
      </NavLink>
    </div>
  );
};

// const Wrapper = styled.section`
//   padding: 9rem 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;

//   .btn {
//     font-size: 1.8rem;
//     margin-top: 3rem;
//   }
// `;

export default Error;
