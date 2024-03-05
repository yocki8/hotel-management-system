import { useRef, useState, useEffect } from "react";
import room1 from "/src/assets/images/rooms/room1.png";
import room2 from "/src/assets/images/rooms/room2.webp";
import room3 from "/src/assets/images/rooms/room3.jpg";
import room4 from "/src/assets/images/rooms/room4.jpg";
import room5 from "/src/assets/images/rooms/room5.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Room = ({ roomNo, id, currImg, isDark }) => {
    const image = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(image.current, {
            autoalpha: 0,
            y: 200,
            duration: Math.random() * 0.7 + 1.3,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: currImg.current,
                start: "20% bottom",
                toggleActions: "play none none reset",
            },
        });
    });

    const handleImgHover = (roomNo) => {
        currImg.current.style.opacity = 0.4;
        currImg.current.style.backgroundImage = `url('${roomNo}')`;
    };

    const handleImgOut = () => {
        currImg.current.style.opacity = 0;
    };

    return (
        <div
            ref={image}
            className=" relative h-fit w-fit overflow-hidden rounded-2xl"
            style={{
                boxShadow: `0px 0px 100px 2px ${isDark ? "#2B2B28" : "#F1EFE6"}`,
            }}
        >
            <div>
                <span className="pointer-events-none absolute -bottom-[0.7rem] left-5 z-10 text-5xl font-bold text-[#F1EFE6] dark:text-[#2B2B28]">
                    0{id}
                </span>
                <img
                    alt={`featured room ${id}`}
                    onMouseOver={() => handleImgHover(roomNo)}
                    onMouseOut={() => handleImgOut()}
                    src={roomNo}
                    className="h-96 w-40 rounded-2xl object-cover transition-all duration-500 hover:h-[27rem] hover:w-96"
                />
            </div>
        </div>
    );
};

export default function FeaturedRooms({ isDark, matches }) {
    const currImg = useRef(null);
    const featuredText = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(featuredText.current, {
            wordSpacing: matches ? "400px" : "0",
            letterSpacing: matches ? "20px" : "6px",
            delay: matches ? "0.3" : "1",
            autoalpha: matches ? "1" : "0",
            duration: 1,
            fontSize: matches ? "3rem" : "none",
            scrollTrigger: {
                trigger: featuredText.current,
                toggleActions: "play none none reset",
                start: "top bottom",
            },
        });
    });

    return (
        <section className="mb-44 mt-10 md:my-auto md:h-[200dvh] ">
            <div className="sticky top-8 h-[150%] overflow-hidden md:h-dvh">
                <h1
                    ref={featuredText}
                    className="mx-auto mb-24 w-auto  text-center text-[2rem] font-bold uppercase md:mb-8 md:w-fit"
                >
                    Featured Rooms
                </h1>

                {matches && (
                    <span className=" absolute h-full w-full">
                        <div
                            ref={currImg}
                            className=" h-full w-full bg-cover bg-center opacity-0 blur-sm transition-all duration-300"
                            style={{ backgroundImage: `url('${room1}')` }}
                        ></div>
                    </span>
                )}

                {matches ? (
                    <div className=" mx-auto h-96 w-fit items-center justify-center gap-2 rounded-2xl md:flex md:translate-y-[30%]">
                        <Room
                            isDark={isDark}
                            currImg={currImg}
                            roomNo={room1}
                            id={1}
                        />
                        <Room
                            isDark={isDark}
                            currImg={currImg}
                            roomNo={room2}
                            id={2}
                        />
                        <Room
                            isDark={isDark}
                            currImg={currImg}
                            roomNo={room3}
                            id={3}
                        />
                        <Room
                            isDark={isDark}
                            currImg={currImg}
                            roomNo={room4}
                            id={4}
                        />
                        <Room
                            isDark={isDark}
                            currImg={currImg}
                            roomNo={room5}
                            id={5}
                        />
                    </div>
                ) : (
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 10,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className=" h-96 w-[80vw] overflow-hidden rounded-2xl"
                    >
                        <SwiperSlide className=" relative h-full w-full rounded-2xl">
                            <span className="pointer-events-none absolute -bottom-[0.7rem] left-5 z-10 text-5xl font-bold text-white dark:text-black ">
                                01
                            </span>
                            <span
                                style={{
                                    boxShadow: `inset 0 0 40px 10px ${isDark ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)"}`,
                                }}
                                className=" absolute left-1/2 h-full w-full -translate-x-1/2 rounded-2xl"
                            ></span>
                            <img
                                alt="featured room 1"
                                src={room1}
                                className=" m-auto h-96 rounded-2xl object-cover"
                            ></img>
                        </SwiperSlide>
                        <SwiperSlide className="relative h-full w-full rounded-2xl">
                            <span className="pointer-events-none absolute -bottom-[0.7rem] left-5 z-10 text-5xl font-bold text-white dark:text-black ">
                                02
                            </span>
                            <span
                                style={{
                                    boxShadow: `inset 0 0 40px 10px ${isDark ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)"}`,
                                }}
                                className=" absolute left-1/2 h-full w-full -translate-x-1/2 rounded-2xl"
                            ></span>
                            <img
                                alt="featured room 2"
                                src={room2}
                                className=" m-auto h-96 rounded-2xl object-cover"
                            ></img>
                        </SwiperSlide>
                        <SwiperSlide className="relative h-full w-full rounded-2xl">
                            <span className="pointer-events-none absolute -bottom-[0.7rem] left-5 z-10 text-5xl font-bold text-white dark:text-black ">
                                03
                            </span>
                            <span
                                style={{
                                    boxShadow: `inset 0 0 40px 10px ${isDark ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)"}`,
                                }}
                                className=" absolute left-1/2 h-full w-full -translate-x-1/2 rounded-2xl"
                            ></span>
                            <img
                                alt="featured room 3"
                                src={room3}
                                className=" m-auto h-96 rounded-2xl object-cover"
                            ></img>
                        </SwiperSlide>
                        <SwiperSlide className="relative h-full w-full rounded-2xl">
                            <span className="pointer-events-none absolute -bottom-[0.7rem] left-5 z-10 text-5xl font-bold text-white dark:text-black ">
                                04
                            </span>
                            <span
                                style={{
                                    boxShadow: `inset 0 0 40px 10px ${isDark ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)"}`,
                                }}
                                className=" absolute left-1/2 h-full w-full -translate-x-1/2 rounded-2xl"
                            ></span>
                            <img
                                alt="featured room 4"
                                src={room4}
                                className=" m-auto h-96 rounded-2xl object-cover"
                            ></img>
                        </SwiperSlide>
                        <SwiperSlide className="relative h-full w-full rounded-2xl">
                            <span className="pointer-events-none absolute -bottom-[0.7rem] left-5 z-10 text-5xl font-bold text-white dark:text-black ">
                                05
                            </span>
                            <span
                                style={{
                                    boxShadow: `inset 0 0 40px 10px ${isDark ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)"}`,
                                }}
                                className=" absolute left-1/2 h-full w-full -translate-x-1/2 rounded-2xl"
                            ></span>
                            <img
                                alt="featured room 5"
                                src={room5}
                                className=" m-auto h-96 rounded-2xl object-cover"
                            ></img>
                        </SwiperSlide>
                    </Swiper>
                )}
            </div>
        </section>
    );
}
