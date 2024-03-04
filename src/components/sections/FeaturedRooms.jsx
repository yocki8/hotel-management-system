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
import { EffectCards, Pagination, EffectCoverflow } from "swiper/modules";

const Room = ({ roomNo, id, currImg, isDark }) => {
    const image = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches,
    );

    useGSAP(() => {
        gsap.from(image.current, {
            opacity: 0,
            y: 200,
            duration: 0.5,
            scrollTrigger: {
                trigger: image.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
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
            className="relative h-fit w-fit overflow-hidden rounded-2xl"
            style={{
                boxShadow: `0px 0px 150px 2px ${isDark ? "black" : "white"}`,
            }}
        >
            <span className="pointer-events-none absolute -bottom-[0.7rem] left-5 z-10 text-5xl font-bold text-white dark:text-black ">
                0{id}
            </span>
            <img
                ref={image}
                onMouseOver={() => handleImgHover(roomNo)}
                onMouseOut={() => handleImgOut()}
                src={roomNo}
                className="h-96 w-40 rounded-2xl object-cover transition-all duration-500 hover:h-[30rem] hover:w-96"
            />
        </div>
    );
};

export default function FeaturedRooms({ isDark }) {
    const currImg = useRef(null);
    const featuredText = useRef(null);
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches,
    );

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(featuredText.current, {
            wordSpacing: matches ? "400px" : "0",
            letterSpacing: matches ? "20px" : "6px",
            delay: matches ? "0.3" : "1",
            opacity: matches ? "100" : "0",
            duration: 1,
            scrollTrigger: {
                trigger: featuredText.current,
                toggleActions: "play none none reverse",
                start: "top bottom",
                // markers: true,
            },
        });
    });

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener("change", (e) => setMatches(e.matches));
    }, []);

    return (
        <section className="h-[150dvh]">
            <div className="sticky top-8 h-dvh overflow-hidden">
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
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="overflow-hiden h-96 w-[80vw] rounded-2xl"
                    >
                        <SwiperSlide className="relative h-full w-full rounded-2xl">
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
                                src={room1}
                                className=" m-auto h-96 object-cover"
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
                                src={room2}
                                className=" m-auto h-96 object-cover"
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
                                src={room3}
                                className=" m-auto h-96 object-cover"
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
                                src={room4}
                                className=" m-auto h-96 object-cover"
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
                                src={room5}
                                className=" m-auto h-96 object-cover"
                            ></img>
                        </SwiperSlide>
                    </Swiper>
                )}
            </div>
        </section>
    );
}
