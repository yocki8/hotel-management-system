import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitType from "split-type";
import sun from "/src/assets/svg/sun.svg";
import { MaskContainer } from "/src/components/Aceternity/components/MaskContainer.tsx";

export default function AboutHotel({ isDark, matches }) {
    const about = useRef(null);
    const about2 = useRef(null);
    const sunSvg = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        if (matches) {
            gsap.from(about.current, {
                y: 400,
                autoalpha: 0,
                duration: 2,
                scrollTrigger: {
                    trigger: about.current,
                    start: "top 90%",
                },
            });

            gsap.from(about2.current, {
                y: 400,
                autoalpha: 0,
                duration: 2,
                scrollTrigger: {
                    trigger: about2.current,
                    start: "top 90%",
                },
            });
        }
        gsap.from(sunSvg.current, {
            autoalpha: 0,
            duration: 3,
            scrollTrigger: {
                trigger: sunSvg.current,
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
        });
    });

    const btn = useRef(null);

    return (
        <section className="relative">
            <div className=" sticky top-0 flex justify-center ">
                {matches && (
                    <MaskContainer
                        revealText={
                            <h1
                                ref={about}
                                className="link pointer-events-none -z-[10] w-2/3 text-center text-[2rem] font-bold text-black dark:text-white"
                            >
                                Welcome to{" "}
                                <span className=" text-yellow-600">
                                    Sunrise
                                </span>
                                , where comfort meets luxury and every stay is a
                                memorable experience. Our rooms are designed to
                                be your home away from home, with modern
                                amenities and breathtaking views. Book your stay
                                with us today and discover the essence of
                                hospitality at Sunrise.
                            </h1>
                        }
                    >
                        <h1
                            ref={about2}
                            className=" text-blue z-[10] mx-auto w-2/3 text-center text-[2rem] font-bold opacity-40 blur-[2px] dark:text-black "
                        >
                            Welcome to{" "}
                            <span className="text-yellow-600">Sunrise</span>,
                            where comfort meets luxury and every stay is a
                            memorable experience. Our rooms are designed to be
                            your home away from home, with modern amenities and
                            breathtaking views. Book your stay with us today and
                            discover the essence of hospitality at Sunrise.
                        </h1>
                        <button
                            style={{
                                boxShadow: `-10px 10px 5px ${isDark ? "black" : "white"}`,
                            }}
                            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 -skew-x-6 overflow-hidden bg-yellow-600 px-6 py-6 text-[2rem] transition duration-500 hover:scale-105"
                        >
                            <div className="absolute left-0 top-0 grid h-full w-full place-items-center *:scale-0 *:hover:scale-[15]  ">
                                <div
                                    ref={btn}
                                    className="-z-10 h-4 w-4 rounded-full bg-yellow-700 transition-all duration-1000 "
                                ></div>
                            </div>
                            <h1 className="pointer-events-none">Book Now</h1>
                        </button>
                    </MaskContainer>
                )}

                <img
                    alt="half sun"
                    ref={sunSvg}
                    src={sun}
                    className="absolute bottom-0 left-1/2 h-52 -translate-x-1/2"
                ></img>
            </div>
        </section>
    );
}
