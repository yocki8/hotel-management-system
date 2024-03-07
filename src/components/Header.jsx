import header1 from "/src/assets/images/header/header1.jpg";
import header2 from "/src/assets/images/header/header2.jpg";
import header3 from "/src/assets/images/header/header3.jpg";
import header4 from "/src/assets/images/header/header4.webp";
import halfSun from "/src/assets/images/half-sun.png";
import { useSpring, animated } from "react-spring";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { useRef } from "react";
import gsap from "gsap";
import ReactCurvedText from "react-curved-text";
import { _colorStringFilter } from "gsap/gsap-core";

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const GetStarted = () => {
    return (
        <div className="grid place-items-center">
            <button className="duration-400  my-auto rounded-xl border-4 border-black/50 bg-yellow-600 px-20 py-4 text-2xl font-semibold text-white transition hover:bg-yellow-400 dark:border-white">
                BOOK NOW
            </button>
        </div>
    );
};

const Counters = ({ roomType, isDark, number, matches }) => {
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
        if (roomType == "Suite") roomType += " Rooms";
        return (
            <li className="relative h-full">
                <div
                    className=" relative mt-10"
                    style={{
                        transform: "perspective(2cm) rotateX(50deg)",
                    }}
                >
                    <ReactCurvedText
                        width={100}
                        height={100}
                        cx={50}
                        cy={50}
                        rx={35}
                        ry={35}
                        reversed={"reversed"}
                        text={roomType}
                        textProps={{
                            style: {
                                fontSize: 20,
                                fontWeight: "bold",
                            },
                        }}
                        textPathProps={{
                            fill: `${isDark ? "#F1EFE6" : "black"}`,
                        }}
                        svgProps={{ className: "rotating-curved-text" }}
                    />
                    <div
                        style={{
                            background: `radial-gradient( ${!isDark ? "gray" : "black"},transparent)`,
                        }}
                        className="absolute left-1/2 top-1/2 grid h-[6.4rem] w-[6.4rem] -translate-x-1/2 -translate-y-1/2 items-center rounded-full bg-white/0"
                    >
                        <h1 className="m-auto grid h-14 w-14 items-center rounded-full text-2xl  font-bold outline">
                            <Number n={number} />
                        </h1>
                    </div>
                </div>
            </li>
        );
    }
};

const Welcome = ({ isDark, matches }) => {
    const welcomeText = useRef(null);

    useGSAP(() => {
        const text = new SplitType(welcomeText.current, {
            types: "chars,words",
        });

        text.chars.forEach((char) => {
            char.classList.add("transition-all", "duration-200", "mb-1/2");
            char.addEventListener("mouseover", () => {
                char.style.transform = "scaleY(2) translateY(-12%)";
            });

            char.addEventListener("mouseout", () => {
                char.style.transform = "scaleY(1) translateY(0)";
            });
        });

        gsap.from(text.words, {
            opacity: 0,
            stagger: 0.3,
            delay: 1,
            scaleY: 2,
        });
    });

    return (
        <div className="grid gap-16 md:w-[57%]">
            <div className="z-10 mx-4 cursor-pointer grid place-items-center md:mx-0">
                <h1
                    ref={welcomeText}
                    className="text-center text-[3.7rem] font-bold  leading-[4.7rem]"
                >
                    Welcome to sunrise Hotels
                </h1>
                <p className="mt-4 w-1/2 min-w-60 text-center text-[#4a4a4a]  dark:text-[#bcb1b1]">
                    Experience an Exquisite Hotel Immersed in Rich History and
                    Timeless Elegance.
                </p>
            </div>

            <GetStarted />

            <ul className="flex h-[200%] -translate-y-24 items-center justify-evenly overflow-x-hidden text-center md:h-[100%] md:translate-y-0 md:justify-between md:overflow-hidden md:px-10">
                <Counters
                    matches={matches}
                    isDark={isDark}
                    roomType={"Basic Rooms"}
                    number={50}
                />
                <Counters
                    matches={matches}
                    isDark={isDark}
                    roomType={"Luxury Rooms"}
                    number={120}
                />
                <Counters
                    matches={matches}
                    isDark={isDark}
                    roomType={"Suite"}
                    number={60}
                />
            </ul>
        </div>
    );
};

const SunExtra = () => {
    return (
        <span className="pointer-events-none absolute select-none">
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
        <div className=" mx-4 -mt-8 grid grid-cols-2 gap-2 *:overflow-hidden md:mt-0 md:w-[43%]  md:grid-rows-[repeat(2,210px)] md:gap-6 ">
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
            <header className="py-20 md:flex md:min-h-[85vh]">
                <Welcome matches={matches} isDark={isDark} />
                <span className="bg ml-5 mr-7 hidden w-[0.1%] bg-gradient-to-b from-transparent via-black to-transparent md:inline-block dark:via-white"></span>
                <HotelImages isDark={isDark} />
            </header>
        </>
    );
}
