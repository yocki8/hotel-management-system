"use client";
import FeaturedRooms from "./ui/FeaturedRooms";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import SplitType from "split-type";

const FeaturedRoomsSection = ({ isDark }) => {
    const featuredText = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(featuredText.current, {
            wordSpacing: "400px",
            letterSpacing: "20px",
            delay: 0.1,
            scrollTrigger: {
                trigger: featuredText.current,
                start: "top 90%",
            },
        });
    });

    return (
        <section className="h-[150dvh] min-h-screen">
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

export default function ContentBody({ isDark }) {
    console.log(isDark);
    return (
        <main>
            <FeaturedRoomsSection isDark={isDark} />
        </main>
    );
}
