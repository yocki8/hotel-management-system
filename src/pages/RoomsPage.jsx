import { NavLink, Outlet, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RoomPage() {
    return (
        <>
            <Navbar />
            <div className="d2 flex gap-10 p-52 text-3xl">
                <div className="grid gap-4">
                    {[1, 2, 3, 4, 5].map((ele) => (
                        <NavLink
                            key={ele}
                            to={`/rooms/${ele}`}
                            className={({ isActive }) => {
                                if (isActive) return "d4";
                            }}
                        >
                            room {ele}
                        </NavLink>
                    ))}
                </div>
                <Outlet />
            </div>
        </>
    );
}
