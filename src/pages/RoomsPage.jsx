import React from "react";
import "./RoomPageCss.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef, useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";
import img1 from "/images/image1.jpg";
import img2 from "/images/image2.jpg";
import img3 from "/images/image3.webp";

const Card = ({ imgSrc }) => {
    const cardCont = useRef(null);

    const cardImg = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const lenis = new Lenis({});

            function raf(time) {
                lenis.raf(time);
                ScrollTrigger.update();
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);

            // ---------- card parallax effect
        });

        return () => ctx.revert();
    }, []);

    useGSAP(() => {
        gsap.to(cardImg.current, {
            // bottom: "-70%",
            yPercent: -50,
            ease: "none",
            scrollTrigger: {
                trigger: cardCont.current,
                start: "top 60%",
                end: "bottom 40%",
                scrub: true,
                markers: true,
            },
        });
    });

    return (
        <div
            ref={cardCont}
            className=" d20 overflowhidden relative aspect-[4/3] rounded-2xl"
        >
            <img
                ref={cardImg}
                src={imgSrc}
                className="absolute   h-[200%] w-[100%] object-cover opacity-40"
            />
        </div>
    );
};

export default function RoomsPage() {
    return (
        // ---------- cards ----------
        <>
            <section className="h-dvh"></section>
            <section className="cards">
                <Card imgSrc="https://source.unsplash.com/user/tmokuenko" />
                <Card imgSrc={img2} />
                {/* <Card imgSrc="https://source.unsplash.com/user/mo_design_3d" />
                <Card imgSrc="https://source.unsplash.com/user/zetong" /> */}
            </section>
            <section className="h-dvh"></section>
        </>
    );
}
