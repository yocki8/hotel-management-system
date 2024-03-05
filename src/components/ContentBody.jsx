"use client";
import FeaturedRooms from "./sections/FeaturedRooms";
import AboutHotel from "./sections/AboutHotel";
import Offers from "./sections/Offers";
import { useState, useEffect } from "react";

export default function ContentBody({ isDark, matches }) {
    return (
        <main
            className=""
            style={{ scrollbarColor: "transparent" }}
        >
            <FeaturedRooms isDark={isDark} matches={matches} />
            <Offers isDark={isDark} matches={matches} />
            <AboutHotel isDark={isDark} matches={matches} />
        </main>
    );
}
