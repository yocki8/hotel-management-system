import React, { useState } from "react";
import profileIcon from "/src/assets/svg/profile.svg";
import nightModeIcon from "/src/assets/svg/night-mode.svg";
import dayModeIcon from "/src/assets/svg/day-mode.svg";

const Btn = ({ btnName, activeButton, changeActiveButton }) => {
    return (
        <li
            onMouseOver={() => changeActiveButton(btnName)}
            onMouseOut={() => changeActiveButton("Home")}
            className="group grid h-full w-full cursor-pointer items-center px-1 md:px-2 "
        >
            <div
                className={` grid h-5 overflow-hidden px-1  transition duration-50 ${btnName == activeButton ? "bg-yellow-600 text-[--lighty]" : ""} rounded-2xl md:h-7 md:px-4`}
            >
                <div className="grid transition duration-300 group-hover:-translate-y-5 md:group-hover:-translate-y-7">
                    <button>{btnName}</button>
                    <button>{btnName}</button>
                </div>
            </div>
        </li>
    );
};

export default function Navbar({ matches, toggleDarkMode }) {
    const [activeButton, setActiveButton] = useState("Home");

    const changeActiveButton = (btnName) => {
        setActiveButton(btnName);
    };
    return (
        <nav
            data-scroll-section
            className="flex justify-between px-2 py-5 md:h-[15vh] md:px-6 "
        >
            <ul className="flex items-center gap-2 md:gap-4">
                <li>
                    <h1 className="text-xl md:text-4xl font-extrabold text-yellow-600 ">
                        Sunrise
                    </h1>
                </li>

                <li>
                    <div className="h-6 w-6 md:h-8 md:w-8">
                        <img
                            alt="profile icon"
                            className="dark:invert"
                            src={profileIcon}
                        ></img>
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
                            <img
                                alt="night mode icon"
                                src={nightModeIcon}
                            ></img>
                        </button>
                    </div>
                </li>
            </ul>

            <ul className="grid grid-cols-3 items-center text-sm font-bold md:gap-0 md:text-xl ">
                <Btn
                    btnName={"Home"}
                    matches={matches}
                    activeButton={activeButton}
                    changeActiveButton={changeActiveButton}
                />
                <Btn
                    btnName={"Rooms"}
                    matches={matches}
                    activeButton={activeButton}
                    changeActiveButton={changeActiveButton}
                />
                <Btn
                    btnName={"About"}
                    matches={matches}
                    activeButton={activeButton}
                    changeActiveButton={changeActiveButton}
                />
            </ul>
        </nav>
    );
}
