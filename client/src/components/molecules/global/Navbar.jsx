import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import '../../../styles/style.css'



const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');
    const handleLinkClick = (link) => {
        setActiveLink(link);
      };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)


    const description = "Get Started"
    const fontSize = "md:text-[1.125rem]"
    const width = "0"
    const route = "/admin-signup-one"

    return (
        <div>
            <nav className="fixed w-full z-20 transition duration-500 ease-in-out py-[15px] bg-[--black-bg] h-auto]">
                <div className="flex flex-wrap items-center justify-between mx-auto p-0 w-[90%]">
                    {/* Logo */}

                    <img id="myImage" src="https://res.cloudinary.com/blackadam/image/upload/v1700189072/Insure/Insure-logo_lydorc.png" alt="Logo" className='w-24 h-16' />

                    <button  
                    data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-cente text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-[--Orange4] dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">

                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    {/* Navbar drop down */}
                    <div className="hidden w-full lg:block md:w-auto lg:bg-transparent text-lg" id="navbar-dropdown">
                        <div>
                            <ul className="flex flex-col lg:items-center font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-12 md:mt-0 md:mr-0 lg:mr-22 ">
                                {/* Home */}
                                <li>
                                    <Link to="/" 
                                    onClick={() => handleLinkClick('home')}
                                    className={`link border block py-2 pl-3 pr-4 rounded text-[--white-text] text-base md:hover:bg-transparent hover:text-[--orange-hover] md:p-0 dark:text-[--white-text] dark:hover:bg-gray-700  md:dark:hover:bg-transparent md:text-[1.125rem] ${activeLink === 'home'? 'md:border-0 md:border-b-white-900 md:text-xl md:transition-all md:duration-75 md:pb-2 md:no-underline': ''}`} aria-current="page">Home</Link>
                                </li>
                                {/* About */}
                                <li>
                                    <Link to="/about" className="link block py-2 pl-3 pr-4 rounded text-[--white-text] hover:bg-[ --Blue2] text-base md:hover:bg-transparent md:border-0 hover:bg-[--orange-hover] md:p-0 dark:text-white md:dark:hover:text-[--orange-hover] md:dark:hover:bg-transparent md:text-[1.125rem]">About</Link>
                                </li>
                                {/* Contact */}
                                <li>
                                    <Link to="/contact" className="link block py-2 pl-3 pr-4 rounded text-[--white-text] text-base md:hover:bg-transparent md:border-0 md:hover:text-[--orange-hover] md:p-0 dark:text-white md:dark:hover:text-[--orange-hover] dark:hover:bg-gray-700 dark:hover:text-[--orange-hover] md:dark:hover:bg-transparent md:text-[1.125rem]">Contact</Link>
                                </li>
                                {/* Pricing */}
                                <li>
                                    <Link to="/pricing" className="link block py-2 pl-3 pr-4 rounded text-[--white-text] text-base md:hover:bg-transparent md:border-0 hover:text-[--orange-hover] md:p-0 dark:text-white md:dark:hover:text-[--orange-hover] md:dark:hover:bg-transparent md:text-[1.125rem]" >Pricing</Link>
                                </li>
                                {/* Features */}
                                <li>
                                    <Link to="/features" className="link block py-2 pl-3 pr-4 rounded text-[--white-text] text-base md:hover:bg-transparent md:border-0 md:hover:text-[--orange-hover] md:p-0 dark:text-white md:dark:hover:text-[--orange-hover] dark:hover:text-white md:dark:hover:bg-transparent md:text-[1.125rem]">Features</Link>
                                </li>
                                {/* Buttons */}
                                <div className="flex flex-row space-x-6 align-self-center">
                                    {/* Login */}
                                    <button className="bg-[--black-bg] border border-[--white-bg] text-[--white-text] py-3 lg:px-10 rounded-[8px] m-2 hover:bg-[--white-bg] hover:text-[--orange-hover] align-self-center md:text-[1.125rem]">
                                        <Link to="/admin-login">
                                            Log-In
                                        </Link>
                                    </button>

                                    {/* Get started */}
                                    {/* <button className="bg-[#e76927] text-white py-3 px-6 rounded-[8px m-2 hover:bg-[#ffa074] hover:text-[--White0] lg:text-[1.5rem]">
                                        <Link to="/admin-signup-1">
                                            Get Started
                                        </Link>
                                    </button> */}
                                    <Button description={description} width={width} fontSize={fontSize} route={route} />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
