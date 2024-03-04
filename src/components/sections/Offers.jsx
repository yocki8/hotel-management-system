import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import pool from "/src/assets/images/facility/pool.jpg";
import food from "/src/assets/images/facility/food.jpg";
import spa from "/src/assets/images/facility/spa.jpg";
import gym from "/src/assets/images/facility/gym.jpg";
import theatre from "/src/assets/images/facility/theatre.jpg";
import gymSvg from "/src/assets/images/facility/svgs/gym.svg";
import foodSvg from "/src/assets/images/facility/svgs/food.svg";
import spaSvg from "/src/assets/images/facility/svgs/spa.svg";
import poolSvg from "/src/assets/images/facility/svgs/pool.svg";
import theatreSvg from "/src/assets/images/facility/svgs/theatre.svg";

const Facility = ({ name, imgSvg, imgNo, isDark }) => {
    const element = useRef(null);
    const icon = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to(element.current, {
            opacity: 0,
            rotateX: "90deg",
            scrollTrigger: {
                trigger: element.current,
                start: "top 10%",
                toggleActions: "play none none reverse",
            },
        });
    });

    const imgHover = () => {
        icon.current.style.transform = "translateX(-100px)";
    };

    const imgLeave = () => {
        icon.current.style.transform = "translateX(120px)";
    };

    return (
        <div
            ref={element}
            style={{ transform: "perspective(90cm)" }}
            className="relative flex h-40 items-center justify-between overflow-hidden"
        >
            <h1
                style={{
                    filter: `drop-shadow(0 0 40px ${isDark ? "black" : "white"})`,
                }}
                className="pointer-events-none z-10 ml-4 -skew-x-12 text-[5rem] font-bold"
            >
                {name}
            </h1>
            <img
                ref={icon}
                src={imgSvg}
                className={`drop-shadowxl pointer-events-none z-10 h-28 w-28 translate-x-[120px] opacity-100 drop-shadow-[0_0_10px_${isDark ? "black" : "white"}] transition  duration-500 dark:invert`}
            ></img>

            <img
                src={imgNo}
                onMouseOver={imgHover}
                onMouseOut={imgLeave}
                className=" absolute h-full w-full bg-bottom object-cover opacity-30 transition-all duration-500 hover:opacity-100 dark:opacity-20 dark:hover:opacity-70 "
            ></img>
        </div>
    );
};

export default function Offers({ isDark }) {
    const offerText = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(offerText.current, {
            wordSpacing: "400px",
            letterSpacing: "20px",
            duration: 1,
            delay: 0.3,
            ease: "circ.out",
            scrollTrigger: {
                trigger: offerText.current,
                toggleActions: "play none none reverse",
                start: "top bottom",
            },
        });
    });

    return (
        <section>
            <h1
                ref={offerText}
                className="sticky top-8 mx-auto my-8 w-fit overflow-hidden text-[2rem] font-bold uppercase"
            >
                What we offer
            </h1>
            <div className="mt-56 grid gap-10 overflow-hidden ">
                <Facility
                    isDark={isDark}
                    imgSvg={poolSvg}
                    imgNo={pool}
                    name={"swimming pool"}
                />
                <Facility
                    imgSvg={gymSvg}
                    isDark={isDark}
                    imgNo={gym}
                    name={"gym"}
                />
                <Facility
                    imgSvg={foodSvg}
                    isDark={isDark}
                    imgNo={food}
                    name={"food & beverages"}
                />
                <Facility
                    isDark={isDark}
                    imgSvg={spaSvg}
                    imgNo={spa}
                    name={"spa"}
                />
                <Facility
                    imgSvg={theatreSvg}
                    isDark={isDark}
                    imgNo={theatre}
                    name={"entertainment"}
                />
            </div>
        </section>
    );
}
