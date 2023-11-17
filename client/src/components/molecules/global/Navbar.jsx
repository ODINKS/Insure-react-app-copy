import React from 'react'
import { Link } from 'react-router-dom'

// --Orange1: #e76927;
// --Orange2: #ffa074;
// --Orange3: #ff8c69;
// --Orange4: #ff4500;
// --Orange5: #ff7f50;
// --Blue0: #0f4c81;
// --Blue1: #4169e1;
// --Blue2: #1e90ff;
// --Blue3: #6495ed;
// --Blue4: #0000ff;
// --Blue5: #00008b;
// --White0: #ffffff;
// --White1: #f5f5f5;
// --White2: #ececec;
// --White3: #d3d3d3;
// --White4: ##c0c0c0;
// --White5: #a9a9a9;

const Navbar = () => {
    return (
        <div>
            <nav
                class="fixed w-full z-10 transition duration-500 ease-in-out py-1.5 bg-[#111111]"
                id="navbar"
            >
                <div
                    class="flex flex-wrap items-center justify-between mx-auto p-0 w-[90%]"
                >
                    <img
                        id="myImage"
                        src="https://res.cloudinary.com/blackadam/image/upload/v1700189072/Insure/Insure-logo_lydorc.png"
                        alt="Logo"
                        class="w-24 h-16"
                    />

                    <button
                        id="navbar-toggle"
                        data-collapse-toggle="navbar-dropdown"
                        type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-[--Orange4] dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-dropdown"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        class="hidden w-full md:block md:w-auto bg-[#ffa074] lg:bg-transparent text-lg"
                        id="navbar-dropdown"
                    >
                        <div>
                            <ul
                                class="flex flex-col lg:items-center font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:mr-0 lg:mr-22"
                            >
                                <li>
                                    <Link to='/'
                                        class="link block py-2 pl-3 pr-4 rounded hover:bg-[ --Blue2] text-base md:hover:bg-transparent md:border-0 md:hover:text-[--Orange4] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                        aria-current="page"
                                    >Home</Link>
                                </li>
                                <li>
                                    <Link to='/about'
                                        class="link block py-2 pl-3 pr-4 rounded hover:bg-[ --Blue2] text-base md:hover:bg-transparent md:border-0 md:hover:text-[--Orange4] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >About</Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        class="link block py-2 pl-3 pr-4 rounded hover:bg-[ --Blue2] text-base md:hover:bg-transparent md:border-0 md:hover:text-[--Orange4] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >Contact</Link>
                                </li>
                                <li>
                                    <a
                                        href="./HTML/pricing.html"
                                        class="link block py-2 pl-3 pr-4 rounded hover:bg-[ --Blue2] text-base md:hover:bg-transparent md:border-0 md:hover:text-[--Orange4] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >Pricing</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="./HTML/pricing.html"
                                        class="link block py-2 pl-3 pr-4 rounded hover:bg-[ --Blue2] text-base md:hover:bg-transparent md:border-0 md:hover:text-[--Orange4] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >Features</a
                                    >
                                </li>

                                <div class="flex flex-wrap md:flex-col lg:flex-row pl-0 lg:pl-32">
                                    <a
                                        href="./login.html"
                                        class="bg-[#ffffff] border border-[#e76927] text-[#e76927] font-bold py-3 px-6 rounded-[8px] text-bold text-sm m-2 hover:bg-[--Orange2] hover:text-[--White0]"
                                    >
                                        Log-In
                                    </a>
                                    <a
                                        href="./register.html"
                                        class="bg-[#e76927] text-white font-bold py-3 px-6 rounded-[8px] text-bold text-sm m-2 hover:bg-[#ffa074] hover:text-[--White0]"
                                    >
                                        Get Started
                                    </a>
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
