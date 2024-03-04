"use client";
import FeaturedRooms from "./ui/FeaturedRooms";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import SplitType from "split-type";
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
import sun from "/src/assets/svg/sun.svg";
import AnimatedCursor from "react-animated-cursor";

const FeaturedRoomsSection = ({ isDark }) => {
    const featuredText = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(featuredText.current, {
            wordSpacing: "400px",
            letterSpacing: "20px",
            duration: 1,
            delay: 0.3,
            scrollTrigger: {
                trigger: featuredText.current,
                toggleActions: "play none none reverse",
                start: "top bottom",
            },
        });
    });

    return (
        <section className="h-[120dvh] ">
            <div className="sticky top-0 h-dvh overflow-hidden">
                <h1
                    ref={featuredText}
                    className=" mx-auto my-10 w-fit text-center text-[2rem] font-bold uppercase"
                >
                    Featured Rooms
                </h1>
                <FeaturedRooms isDark={isDark} />
            </div>
        </section>
    );
};

const OffersSection = () => {
    const offer = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const text = new SplitType(offer.current, { types: "chars,words" });

        text.chars.forEach((char, i) => {
            gsap.from(char, {
                y: i % 2 ? 120 : -120,
                duration: 1,
                scrollTrigger: {
                    trigger: char,
                    delay: 0.3,
                    start: `${i % 2 ? "-184%" : "317%"} bottom`,
                    toggleActions: "play none none reverse",
                },
            });
        });
    });

    const Facility = ({ name, imgSvg, imgNo }) => {
        const element = useRef(null);
        const icon = useRef(null);
        gsap.registerPlugin(ScrollTrigger);

        useGSAP(() => {
            gsap.to(element.current, {
                opacity: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: element.current,
                    start: "top 25%",
                    end: "end 15%",
                    scrub: true,
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
                className="relative flex h-40 items-center justify-between overflow-hidden"
            >
                <h1 className="pointer-events-none z-10 ml-4 text-[5rem] font-bold">
                    {name}
                </h1>
                <img
                    ref={icon}
                    src={imgSvg}
                    className="pointer-events-none z-10 h-28 w-28 translate-x-[120px] opacity-100 drop-shadow-2xl transition duration-500 dark:invert   "
                ></img>
                <img
                    src={imgNo}
                    onMouseOver={imgHover}
                    onMouseOut={imgLeave}
                    className=" absolute h-[1/2] w-full bg-bottom object-cover opacity-30 transition-all duration-500 hover:opacity-70 dark:opacity-10 dark:hover:opacity-50 "
                ></img>
            </div>
        );
    };
    return (
        <section className="">
            <div className="sticky top-24 my-24 flex h-[7rem] items-center justify-center overflow-hidden">
                <h1 ref={offer} className=" text-[2rem] font-bold uppercase">
                    What we offer
                </h1>
            </div>
            <div className="grid gap-10 ">
                <Facility
                    imgSvg={poolSvg}
                    imgNo={pool}
                    name={"swimming pool"}
                />
                <Facility imgSvg={gymSvg} imgNo={gym} name={"gym"} />
                <Facility
                    imgSvg={foodSvg}
                    imgNo={food}
                    name={"food & beverages"}
                />
                <Facility imgSvg={spaSvg} imgNo={spa} name={"spa"} />
                <Facility
                    imgSvg={theatreSvg}
                    imgNo={theatre}
                    name={"entertainment"}
                />
            </div>
        </section>
    );
};

const AboutHotel = () => {
    const about = useRef(null);
    const sunSvg = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const text = new SplitType(about.current, { types: "chars,words" });

        gsap.from(text.words, {
            opacity: 0,
            stagger: 0.1,
            delay: 1,
            scrollTrigger: {
                trigger: text.words,
                start: "top bottom",
            },
        });

        gsap.from(sunSvg.current, {
            opacity: 0,
            duration: 3,
            scrollTrigger: {
                trigger: sunSvg.current,
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
        });
    });

    return (
        <section className="mt-64 h-[150dvh]">
            <div className=" sticky top-0 flex h-dvh justify-center px-52">
                <h1
                    ref={about}
                    className="link my-40  text-center text-[2rem] font-bold transition-all duration-1000"
                >
                    Welcome to <span className="text-yellow-600">Sunrise</span>,
                    where comfort meets luxury and every stay is a memorable
                    experience. Our rooms are designed to be your home away from
                    home, with modern amenities and breathtaking views. Book
                    your stay with us today and discover the essence of
                    hospitality at Sunrise.
                </h1>
                <img
                    ref={sunSvg}
                    src={sun}
                    className="absolute bottom-0 left-1/2 h-52 -translate-x-1/2"
                ></img>
            </div>
        </section>
    );
};

export default function ContentBody({ isDark }) {
    console.log(isDark);
    return (
        <main>
            <FeaturedRoomsSection isDark={isDark} />
            <OffersSection />
            <AboutHotel />
        </main>
    );
}
