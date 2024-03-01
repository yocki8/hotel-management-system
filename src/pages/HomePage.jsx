import { useEffect, useState } from "react";
import ContactSection from "../components/ContactSection.jsx";
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";
import ContactPage from "./ContantPage.jsx";

export default function HomePage() {

    const [darkMode,setDarkMode] = useState(false);

    useEffect(()=>{
        
    })
    const handleDarkMode= () =>{

        setDarkMode(!darkMode);
    }
    return (
        <div className={`bg-blue-00 grid h-full p-2 font-['Poppins'] *:mb-2 *:rounded-2xl *:shadow-[0_0_10px_1px_black] ${darkMode ? 'dark': ''}`}>
            <Navbar toggleDark={handleDarkMode} isDark={darkMode}/>
            <Header />
            <ContactPage />
            <ContactSection />
        </div>
    );
}
