import React from 'react';
import { Link } from 'react-router-dom';
import { DiApple } from "react-icons/di";
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";



const Header = () => {
    return (
        <nav className='fixed top-0 left-0 right-0 z-50'>
            <ul 
                className='list-none flex gap-[150px] py-[30px] px-[0] m-[0] justify-center bg-black'>
                <li><Link to="/"><DiApple className="text-4xl" /></Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/form1">Registration Form <TbCircleNumber1Filled className="inline-block text-2xl text-lime-500" /></Link></li>
                <li><Link to="/form2">Registration Form <TbCircleNumber2Filled className="inline-block text-2xl text-lime-500" /></Link></li>
            </ul>
        </nav>
    )
}

export default Header;