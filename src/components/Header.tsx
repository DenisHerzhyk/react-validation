import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='fixed top-0 left-0 right-0 z-50'>
            <ul 
                className='list-none flex gap-[150px] py-[30px] px-[0] m-[0] justify-center bg-black'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/form1">Registration Form #1</Link></li>
                <li><Link to="/form2">Registration Form #2</Link></li>
            </ul>
        </nav>
    )
}

export default Header;