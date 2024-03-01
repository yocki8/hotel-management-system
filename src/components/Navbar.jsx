import React from "react";
import profileIcon from "/src/assets/svg/profile.svg";
import nightModeIcon from "/src/assets/svg/night-mode.svg";
import dayModeIcon from "/src/assets/svg/day-mode.svg";

export default function Navbar({ toggleDarkMode, isDark }) {
    return (
        <nav className="flex justify-between px-[2vw] py-5 ">
            <ul className="flex items-center gap-2 md:gap-4">
                <li>
                    <h1 className="text-2xl font-extrabold text-yellow-600 ">
                        Sunrise
                    </h1>
                </li>

                <li>
                    <div className="h-6 w-6 md:h-8 md:w-8">
                        <img className="dark:invert" src={profileIcon}></img>
                    </div>
                </li>

                <li>
                    <button
                        className="h-6 w-6 translate-y-1 md:h-8 md:w-8 dark:invert"
                        onClick={toggleDarkMode}
                    >
                        {isDark && <img src={nightModeIcon}></img>}
                        {!isDark && <img src={dayModeIcon}></img>}
                    </button>
                </li>
            </ul>

            <ul className=" grid grid-cols-3 items-center gap-2 text-sm font-bold md:text-base ">
                <li className=" grid h-6 overflow-hidden border-yellow-600  *:translate-y-0 *:transition *:duration-200 hover:border-b-2 hover:*:-translate-y-5 md:h-7 md:hover:*:-translate-y-6">
                    <div className="grid">
                        <button>HOME</button>
                        <button>HOME</button>
                    </div>
                </li>
                <li className=" grid h-6 overflow-hidden border-yellow-600  *:translate-y-0 *:transition *:duration-200 hover:border-b-2 hover:*:-translate-y-5 md:h-7 md:hover:*:-translate-y-6">
                    <div className="grid">
                        <button>ROOMS</button>
                        <button>ROOMS</button>
                    </div>
                </li>
                <li className=" grid h-6 overflow-hidden border-yellow-600  *:translate-y-0 *:transition *:duration-200 hover:border-b-2 hover:*:-translate-y-5 md:h-7 md:hover:*:-translate-y-6">
                    <div className="grid">
                        <button>ABOUT</button>
                        <button>ABOUT</button>
                    </div>
                </li>
            </ul>
        </nav>
    );
}
