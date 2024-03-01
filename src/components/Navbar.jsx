import React from "react";

export default function Navbar({ toggleDark,isDark }) {
    return (
        <nav className="flex  justify-between bg-white px-12 py-0 dark:bg-black">
            <ul className="flex items-center gap-4">
                <li>
                    <h1 className="text-2xl font-extrabold text-orange-600 ">
                        Hotelzz
                    </h1>
                </li>

                <li>
                    <svg
                        stroke="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 496 512"
                        className="cursor-pointer dark:fill-white"
                        height="1.5em"
                        width="1.5em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
                    </svg>
                </li>

                <li>
                    <svg
                        onClick={toggleDark}
                        stroke="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="cursor-pointer dark:fill-white"
                        height="1.5em"
                        width="1.5em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        {!isDark ? (
                            <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"></path>
                        ) : (
                            <path d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path>
                        )}
                    </svg>
                </li>
            </ul>

            <ul className="flex items-center  text-xl dark:text-white ">
                <li className="px-4 py-5 transition duration-300 hover:bg-[#090c9bac] hover:text-white dark:hover:bg-[#090c9b]">
                    <button>Home</button>
                </li>
                <li className="px-4 py-5 transition duration-300 hover:bg-[#090c9bac] hover:text-white dark:hover:bg-[#090c9b]">
                    <button>Rooms</button>
                </li>
                <li className="px-4 py-5 transition duration-300 hover:bg-[#090c9bac] hover:text-white dark:hover:bg-[#090c9b]">
                    <button>Contact</button>
                </li>
            </ul>
        </nav>
    );
}
