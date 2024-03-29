import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../Images/Logo.svg'


const Navigationbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='bg-purple-900'>
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-gray-100'>
                <div className='flex flex-row items-center'>
                    <NavLink to='/' className="">
                        <img src={Logo} alt='TL logo' className='w-24' />
                    </NavLink>
                    <NavLink to='/' className="">
                        <div className='flex flex-col'>
                            <h1 className='w-full text-2xl font-bold'>Tinkerers' Lab </h1>
                            <h1 className='w-full text-2xl font-bold'>IITH</h1>
                        </div>
                    </NavLink>

                </div>

                <ul className='hidden md:flex flex-row justify-between font-bold '>
                    <li className='p-4'><NavLink to="/">Home</NavLink></li>
                    <li className='p-4'><NavLink to="/Team">Team</NavLink></li>
                    <li className='p-4'><NavLink to="/Event">Events</NavLink></li>
                    <li className='p-4'><NavLink to="/Inventory">Inventory</NavLink></li>
                    <li className='p-4'><NavLink to="/Blog">Blog</NavLink></li>
                    <li className='p-4'><NavLink to="/Contacts">Contact</NavLink></li>
                </ul>
                <div onClick={handleNav} className='block md:hidden absolute right-4 z-20'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                {/* <div className={nav ? 'fixed left-0 top-0 w-[80%] h-full px-4 font-extrabold drop-shadow-md text-gray-900 bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed h-full left-[-100%]'}> */}
                <div className={nav ? 'fixed top-0 left-0 z-10 h-full w-full transform opacity-95 duration-300 ease-in-out dark:bg-gray-800 font-extrabold translate-x-0' : 'fixed top-0 left-0 z-10 h-full w-full transform opacity-95 duration-300 ease-in-out dark:bg-gray-800 font-extrabold translate-x-full'}>
                <h1 className='w-full text-3xl  font-bold px-4 py-8 h-24 text-white bg-purple-900'>Tinkerers' Lab IITH</h1>
                <ul>
                    <li className='p-4 border-b border-gray-600' onClick={handleNav}><NavLink to="/">Home</NavLink></li>
                    <li className='p-4 border-b border-gray-600' onClick={handleNav}><NavLink to="/Team">Team</NavLink></li>
                    <li className='p-4 border-b border-gray-600' onClick={handleNav}><NavLink to="/Event">Events</NavLink></li>
                    <li className='p-4 border-b border-gray-600' onClick={handleNav}><NavLink to="/Inventory">Inventory</NavLink></li>
                    <li className='p-4 border-b border-gray-600' onClick={handleNav}><NavLink to="/Blog">Blog</NavLink></li>
                    <li className='p-4' onClick={handleNav}><NavLink to="/Contacts">Contact</NavLink></li>
                    
                </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Navigationbar