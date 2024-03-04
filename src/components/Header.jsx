import header1 from "/src/assets/images/header1.jpg";
import header2 from "/src/assets/images/header2.jpg";
import header3 from "/src/assets/images/header3.jpg";
import header4 from "/src/assets/images/header4.webp";
import halfSun from "/src/assets/images/half-sun.png";
import { useSpring, animated } from "react-spring";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 3, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Welcome = ({ isDark }) => {
    const welcomeText = useRef(null);
    const sunriseWord = useRef(null);

    useGSAP(() => {
        const text = new SplitType(welcomeText.current, {
            types: "chars,words",
        });

        gsap.from(text.words, {
            opacity: 0,
            stagger: 0.3,
            delay: 1,
        });
    });

    const GetStarted = () => {
        return (
            <div className="grid place-items-center">
                <button className="duration-400  my-auto rounded-xl border-4 border-black/50 bg-yellow-600 px-20 py-4 text-2xl font-semibold text-white transition hover:bg-yellow-400 dark:border-white">
                    BOOK NOW
                </button>
            </div>
        );
    };

    const Counters = ({ roomType, number }) => {
        return (
            <li>
                <h2 className="text-[#4a4a4a] md:text-xl  dark:text-[#bcb1b1]">
                    {roomType}
                </h2>
                <h1 className="text-center text-[3rem] font-bold ">
                    <Number n={number} />
                </h1>
            </li>
        );
    };
    return (
        <div className="grid gap-16  md:w-[57%]">
            <div className="grid place-items-center">
                <h1
                    ref={welcomeText}
                    className="text-center text-[3.7rem] font-bold  leading-[4.7rem]"
                >
                    Welcome to <span ref={sunriseWord}>sunrise</span> Hotels
                </h1>
                <p className="mt-4 w-1/2 min-w-60 text-center text-[#4a4a4a]  dark:text-[#bcb1b1]">
                    Experience an Exquisite Hotel Immersed in Rich History and
                    Timeless Elegance.
                </p>
            </div>

            <GetStarted />

            <ul className="flex items-center justify-between text-center md:my-0 -mt-8 md:px-10">
                <Counters roomType={"Basic Rooms"} number={50} />
                <Counters roomType={"Luxury Rooms"} number={120} />
                <Counters roomType={"Suite"} number={60} />
            </ul>
        </div>
    );
};

const SunExtra = () => {
    return (
        <span className="pointer-events-none absolute">
            <img
                src={halfSun}
                className="max-w-[80%] rotate-[45deg] opacity-20 dark:md:opacity-10"
            ></img>
        </span>
    );
};

const HotelImages = () => {
    const Image = ({ imgNo }) => {
        return (
            <img
                className="h-full w-full object-cover opacity-80 transition-all duration-700 hover:scale-125 hover:opacity-100"
                draggable={false}
                src={imgNo}
            ></img>
        );
    };
    return (
        <div className=" mt-5 grid grid-cols-2 grid-rows-[repeat(2,210px)] gap-6 *:overflow-hidden  md:mt-0 md:w-[43%] ">
            <div className="rounded-l-full">
                <Image imgNo={header1} />
            </div>

            <div className="rounded-t-full drop-shadow-2xl">
                <Image imgNo={header2} />
            </div>
            <div className="rounded-t-full">
                <Image imgNo={header3} />
            </div>
            <div className="rounded-r-full">
                <Image imgNo={header4} />
            </div>
        </div>
    );
};
export default function Header({ isDark }) {
    return (
        <>
            <SunExtra />
            <header className="px-4  py-20 md:flex md:min-h-[85vh]">
                <Welcome isDark={isDark} />
                <span className="bg ml-5 mr-7 hidden w-[0.1%] bg-gradient-to-b from-transparent via-black to-transparent md:inline-block dark:via-white"></span>
                <HotelImages />
            </header>
        </>
    );
}
