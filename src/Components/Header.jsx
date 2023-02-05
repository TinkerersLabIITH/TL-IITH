import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to='/' className="nav-link-header">
        <img src='./Images/Logo.svg'  alt='logo' className='logo'/>
      </NavLink>
      <Navbar />
    </MainHeader>
  )
};

const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({theme})=>theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-link-header{
      width: 15rem;
      height: 100%;
      .logo{
        width: 100%;
        height: 100%;
      }
    }

`;

export default Header;
