"use client";
import FeaturedRooms from "./sections/FeaturedRooms";
import AboutHotel from "./sections/AboutHotel";
import Offers from "./sections/Offers";


export default function ContentBody({ isDark }) {
    return (
        <main>
            <FeaturedRooms isDark={isDark} />
            <Offers isDark={isDark} />
            <AboutHotel isDark={isDark}/>
        </main>
    );
}
