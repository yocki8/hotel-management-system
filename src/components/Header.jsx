import header1 from "/src/assets/images/header1.jpg";
import header2 from "/src/assets/images/header2.jpg";
import header3 from "/src/assets/images/header3.jpg";
import header4 from "/src/assets/images/header4.webp";
import halfSun from "/src/assets/images/half-sun.png";
import { useSpring, animated } from "react-spring";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { useRef } from "react";
import gsap from "gsap";

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Welcome = ({ isDark, matches }) => {
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

    const Counters = ({ roomType, number, matches }) => {
        if (matches) {
            return (
                <li className="w-1/4 rounded-2xl bg-[#d1d1d1] md:bg-transparent ">
                    <h2 className="text-xl ">{roomType}</h2>
                    <h1 className="text-center text-[3rem] font-bold ">
                        <Number n={number} />
                    </h1>
                </li>
            );
        } else {
            return (
                <li className="h-full w-[30%] rounded-xl bg-gradient-to-br from-white to-[#d1d1d1] py-5 dark:from-black dark:to-[#2e2e2e]">
                    <h1 className="h-10 text-xs">{roomType}</h1>
                    <h1 className=" font-bold">
                        <Number n={number} />
                    </h1>
                </li>
            );
        }
    };
    return (
        <div className="grid gap-16  md:w-[57%]">
            <div className="z-10 grid place-items-center">
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

            <ul className="-mt-8 flex items-center justify-around text-center md:my-0 md:justify-between md:px-10">
                <Counters
                    matches={matches}
                    roomType={"Basic Rooms"}
                    number={50}
                />
                <Counters
                    matches={matches}
                    roomType={"Luxury Rooms"}
                    number={120}
                />
                <Counters matches={matches} roomType={"Suite"} number={60} />
            </ul>
        </div>
    );
};

const SunExtra = () => {
    return (
        <span className="pointer-events-none absolute">
            <img
                alt="sunrise logo"
                src={halfSun}
                className="max-w-[80%]  opacity-20 dark:md:opacity-10"
            ></img>
        </span>
    );
};

const HotelImages = () => {
    const Image = ({ imgNo }) => {
        return (
            <img
                alt="hotel image"
                className="h-[50vw] w-[50vw] object-cover opacity-80 transition-all duration-700 hover:scale-125 hover:opacity-100 md:h-full md:w-full"
                draggable={false}
                src={imgNo}
            ></img>
        );
    };

    return (
        <div className=" mt-5 grid grid-cols-2 gap-2 *:overflow-hidden md:mt-0 md:w-[43%]  md:grid-rows-[repeat(2,210px)] md:gap-6 ">
            <div className="rounded-tl-[30%] md:rounded-l-full">
                <Image imgNo={header1} />
            </div>

            <div className="rounded-tr-[30%] md:rounded-t-full">
                <Image imgNo={header2} />
            </div>
            <div className="rounded-bl-[30%] md:rounded-t-full">
                <Image imgNo={header3} />
            </div>
            <div className="rounded-br-[30%] md:rounded-r-full">
                <Image imgNo={header4} />
            </div>
        </div>
    );
};
export default function Header({ isDark, matches }) {
    return (
        <>
            <SunExtra />
            <header className="px-4 py-20 md:flex md:min-h-[85vh]">
                <Welcome matches={matches} isDark={isDark} />
                <span className="bg ml-5 mr-7 hidden w-[0.1%] bg-gradient-to-b from-transparent via-black to-transparent md:inline-block dark:via-white"></span>
                <HotelImages />
            </header>
        </>
    );
}
