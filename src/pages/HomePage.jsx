import Header from "../components/l1/Header.jsx";
import ContentBody from "../components/l1/ContentBody.jsx";
import { useData } from "../components/global/DataContext.jsx";
import Navbar from "../components/global/Navbar.jsx";

export default function HomePage() {
    const { isDark, toggleDarkMode, matches } = useData();
    return (
        <div
            className={` font-['Poppins'] text-[--darky] transition duration-300 selection:bg-yellow-600 selection:text-yellow-200 dark:text-[--lighty] ${isDark ? "dark bg-[--darky]" : "bg-[--lighty]"}`}
        >
            <Navbar
                matches={matches}
                toggleDarkMode={toggleDarkMode}
                isDark={isDark}
                active="Home"
            />

            <Header isDark={isDark} matches={matches} />
            <ContentBody isDark={isDark} matches={matches} />
        </div>
    );
}
