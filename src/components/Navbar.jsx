import React from "react";
import profileIcon from "/src/assets/svg/profile.svg";
import nightModeIcon from "/src/assets/svg/night-mode.svg";
import dayModeIcon from "/src/assets/svg/day-mode.svg";

export default function Navbar({ toggleDarkMode, isDark }) {
    return (
        <nav className="flex md:h-[15vh] justify-between px-[2vw] py-5 ">
            <ul className="flex items-center gap-2 md:gap-4">
                <li>
                    <h1 className="text-2xl font-extrabold text-yellow-600 ">
                        Sunrise
                    </h1>
                </li>

                <li>
                    <div className="h-6 w-6 md:h-8 md:w-8">

                        <img alt="profile icon" className="dark:invert" src={profileIcon}></img>
                    </div>
                </li>

                <li className=" flex w-6 items-start  md:w-8">
                    <div className="flex gap-2 transition duration-200 dark:-translate-x-8 dark:md:-translate-x-10 ">
                        <button
                            className=" duration-400 h-6 w-6 transition md:h-8 md:w-8 dark:opacity-0"
                            onClick={toggleDarkMode}
                        >
                            <img alt="day mode icon" src={dayModeIcon}></img>
                        </button>
                        <button
                            className="duration-400 h-6 w-6 opacity-0 transition md:h-8 md:w-8 dark:opacity-100 dark:invert"
                            onClick={toggleDarkMode}
                        >
                            <img alt="night mode icon" src={nightModeIcon}></img>
                        </button>
                    </div>
                </li>
            </ul>

            <ul className=" grid grid-cols-3 items-center gap-4 text-sm font-bold md:gap-10 md:text-base ">
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
