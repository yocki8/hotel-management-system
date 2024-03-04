import { useRef } from "react";
import room1 from "/src/assets/images/rooms/room1.png";
import room2 from "/src/assets/images/rooms/room2.webp";
import room3 from "/src/assets/images/rooms/room3.jpg";
import room4 from "/src/assets/images/rooms/room4.jpg";
import room5 from "/src/assets/images/rooms/room5.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Room = ({ roomNo, id, currImg, isDark }) => {
    const image = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(image.current, {
            opacity: 0.2,
            duration: 0.5,
            scrollTrigger: {
                trigger: image.current,
                start: "top 80%",
            },
        });
    });

    const handleImgHover = (roomNo) => {
        currImg.current.style.opacity = 0.4;
        currImg.current.style.backgroundImage = `url('${roomNo}')`;
    };

    const handleImgOut = (roomNo) => {
        currImg.current.style.opacity = 0;
    };

    return (
        <div
            className="relative h-fit w-fit overflow-hidden rounded-2xl"
            style={{
                boxShadow: `0px 0px 150px 2px ${isDark ? "black" : "white"}`,
            }}
        >
            <span className="dark:text-black text-white pointer-events-none absolute -bottom-[0.8rem] left-5 z-10 text-4xl font-bold ">
                0{id}
            </span>
            <img
                ref={image}
                onMouseOver={() => handleImgHover(roomNo)}
                onMouseOut={() => handleImgOut()}
                src={roomNo}
                className="h-96 w-40 rounded-2xl object-cover transition-all duration-500 hover:w-96"
            />
        </div>
    );
};

export default function FeaturedRooms({ isDark }) {
    const currImg = useRef(null);

    return (
        <>
            <span className=" absolute h-full w-full">
                <div
                    ref={currImg}
                    className=" h-full w-full bg-cover bg-center opacity-0 blur-sm transition-all duration-300"
                    style={{ backgroundImage: `url('${room1}')` }}
                ></div>
            </span>
            <div className="mx-auto flex w-fit translate-y-[35%] items-center justify-center gap-2 rounded-2xl">
                <Room isDark={isDark} currImg={currImg} roomNo={room1} id={1} />
                <Room isDark={isDark} currImg={currImg} roomNo={room2} id={2} />
                <Room isDark={isDark} currImg={currImg} roomNo={room3} id={3} />
                <Room isDark={isDark} currImg={currImg} roomNo={room4} id={4} />
                <Room isDark={isDark} currImg={currImg} roomNo={room5} id={5} />
            </div>
        </>
    );
}
