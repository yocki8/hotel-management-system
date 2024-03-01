import { useEffect, useState } from "react";
import header1 from "/src/assets/images/header1.jpg";
import header2 from "/src/assets/images/header2.jpg";
import header3 from "/src/assets/images/header3.jpg";
import { useSpring, animated } from "react-spring";

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },

    });
    // return 10;
    return <animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>
}
export default function Header() {
    return (
        <header className=" bg-white dark:bg-black dark:text-white px-4 py-20 md:flex">
            <div className="grid gap-16 md:w-[57%]">
                <div>
                    <h1 className="text-[3.7rem] font-bold">
                        Explore our Exquisite Hotel
                    </h1>
                    <p className="w-1/2 text-[#4a4a4a]">
                        Experience an Exquisite Hotel Immersed in Rich History
                        and Timeless Elegance.
                    </p>
                </div>

                <div>
                    <button className="rounded-xl bg-[#038C7F] px-20 py-4 text-2xl font-semibold text-white">
                        Get Started
                    </button>
                </div>

                <ul className="flex items-center justify-between px-10">
                    <li>
                        <h2 className="text-xl text-[#4a4a4a]">Basic Rooms</h2>
                        <h1 className="text-center text-[3rem] font-bold ">
                            <Number n={50} />
                        </h1>
                    </li>
                    <li>
                        <h2 className="text-xl text-[#4a4a4a]">Luxury Rooms</h2>
                        <h1 className="text-center text-[3rem] font-bold ">
                            <Number n={120} />
                        </h1>
                    </li>
                    <li>
                        <h2 className="text-xl text-[#4a4a4a]">Suite</h2>
                        <h1 className="text-center text-[3rem] font-bold ">
                            <Number n={60} />
                        </h1>
                    </li>
                </ul>
            </div>

            <div className=" mt-5 grid grid-cols-2 grid-rows-[repeat(2,210px)] gap-6 *:rounded-3xl md:mt-0 md:w-[43%] ">
                <div className=" col-span-2 overflow-hidden">
                    <img
                        className="h-full w-full object-cover transition-all duration-700 hover:scale-125"
                        src={header1}
                    ></img>
                </div>
                <div className="overflow-hidden">
                    <img
                        className="h-full w-full object-cover transition-all duration-700 hover:scale-125"
                        src={header2}
                    ></img>
                </div>
                <div className="overflow-hidden">
                    <img
                        className="h-full w-full object-cover transition-all duration-700 hover:scale-125"
                        src={header3}
                    ></img>
                </div>
            </div>
        </header>
    );
}
