import React from 'react';

const Footer = () => {
    return (
        <footer className='fixed bottom-0 left-0 right-0 z-50'>
            <ul 
                className='list-none flex gap-[150px] py-[30px] px-[0] m-[0] justify-center bg-black text-white'>
                <li><a href="© denis.herzhyk@gmail.com"><span className='text-lime-500'>©</span> denis.herzhyk@gmail.com</a></li>
            </ul>
        </footer>
    )
}

export default Footer;