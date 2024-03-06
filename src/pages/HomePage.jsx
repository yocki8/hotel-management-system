import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";
import ContentBody from "../components/ContentBody.jsx";

export default function HomePage() {
    const [darkMode, setDarkMode] = useState(true);
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches,
    );

    useEffect(() => {
        const data = window.localStorage.getItem("darkMode");
        const isDark = JSON.parse(data);
        if (isDark !== null) setDarkMode(isDark);
    }, []);

    useEffect(() => {
        window.localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener("change", (e) => setMatches(e.matches));
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div
            className={`grid font-['Poppins'] text-[#2B2B28]  transition duration-300 dark:text-[#F1EFE6] ${darkMode ? "dark bg-[#2B2B28]" : "bg-[#F1EFE6]"}`}
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
