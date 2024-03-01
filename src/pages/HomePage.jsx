import { useEffect, useState } from "react";
import ContactSection from "../components/ContactSection.jsx";
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";
import ContentBody from "../components/ContentBody.jsx";

export default function HomePage() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const data = window.localStorage.getItem("darkMode");
        const isDark = JSON.parse(data);

        setDarkMode(isDark);
        console.log(isDark);
    }, []);

    useEffect(() => {
        window.localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div
            className={` grid h-full font-['Poppins']  dark:text-white  ${darkMode ? "dark bg-black" : "bg-white"}`}
        >
            <Navbar toggleDarkMode={toggleDarkMode} isDark={darkMode} />
            <Header />
            {/* <ContentBody /> */}
            {/* <ContactSection /> */}
        </div>
    );
}
