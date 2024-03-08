import { useEffect, useState, useLayoutEffect, useRef } from "react";
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";
import ContentBody from "../components/ContentBody.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const lenis = new Lenis({
                duration: 1.3,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smooth: true,
            });

            function raf(time) {
                lenis.raf(time);
                ScrollTrigger.update();
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);
        });

        return () => ctx.revert();
    }, []);

    const [darkMode, setDarkMode] = useState(true);
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches,
    );

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener("change", (e) => setMatches(e.matches));

        const data = window.localStorage.getItem("darkMode");
        const isDark = JSON.parse(data);
        if (isDark !== null) setDarkMode(isDark);
    }, []);

    useEffect(() => {
        window.localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div
            className={` font-['Poppins'] text-[--darky] transition  duration-300 selection:bg-yellow-600 selection:text-yellow-200 dark:text-[--lighty] ${darkMode ? "dark bg-[--darky]" : "bg-[--lighty]"}`}
        >
            <Navbar
                matches={matches}
                toggleDarkMode={toggleDarkMode}
                isDark={darkMode}
            />
            <Header isDark={darkMode} matches={matches} />
            <ContentBody isDark={darkMode} matches={matches} />
        </div>
    );
}
