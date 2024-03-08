"use client";
import FeaturedRooms from "./Sections/FeaturedRooms";
import AboutHotel from "./Sections/AboutHotel";
import Offers from "./Sections/Offers";
import { useState, useEffect } from "react";


export default function ContentBody({ isDark, matches }) {
    return (
        <main>
            <FeaturedRooms isDark={isDark} matches={matches} />
            <Offers isDark={isDark} matches={matches} />
            <AboutHotel isDark={isDark} matches={matches} />
        </main>
    );
}
