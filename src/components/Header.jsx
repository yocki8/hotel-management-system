import header1 from "/src/assets/images/header1.jpg";
import header2 from "/src/assets/images/header2.jpg";
import header3 from "/src/assets/images/header3.jpg";
import halfSun from "/src/assets/images/half-sun.png";
import { useSpring, animated } from "react-spring";
import "animate.css";

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Welcome = () => {
    const GetStarted = () => {
        return (
            <div className="grid place-items-center">
                <button className="duration-400 my-auto rounded-xl bg-yellow-600 px-20 py-4 text-2xl font-semibold text-white transition hover:bg-yellow-400">
                    Get Started
                </button>
            </div>
        );
    };

    const Counters = ({ roomType, number }) => {
        return (
            <li>
                <h2 className="md:text-xl text-[#4a4a4a]  dark:text-[#bcb1b1]">
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
                <div className=" overflow-hidden">
                    <h1 className="animate__animated animate__slideInUp text-center text-[3.7rem] font-bold  leading-[4.7rem]">
                        Welcome to sunrise Hotels
                    </h1>
                </div>
                <p className="mt-4  w-1/2 min-w-60 text-center text-lg text-[#4a4a4a] md:text-xl  dark:text-[#bcb1b1]">
                    Experience an Exquisite Hotel Immersed in Rich History and
                    Timeless Elegance.
                </p>
            </div>

            <GetStarted />

            <ul className="text-center flex items-center justify-between md:px-10">
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
            <img src={halfSun} className="max-w-[80%] rotate-[45deg] opacity-20 dark:md:opacity-10"></img>
        </span>
    );
};

const HotelImages = () => {
    const Image = ({ imgNo }) => {
        return (
            <img
                className="h-full w-full object-cover transition-all duration-700 hover:scale-125"
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
                <Image imgNo={header1} />
            </div>
        </div>
    );
};
export default function Header() {
    return (
        <>
            <SunExtra />
            <header className=" px-4 py-20 md:flex">
                <Welcome />
                <span className="bg mx-5 hidden w-[0.1%] bg-gradient-to-b from-transparent via-black to-transparent md:inline-block dark:via-white"></span>
                <HotelImages />
            </header>
        </>
    );
}
