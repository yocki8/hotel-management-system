import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import RoomPage from "./pages/RoomsPage";
import NoPageFound from "./pages/NoPageFound";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <NoPageFound />,
    },

    {
        path: "/rooms",
        element: <RoomPage />,
    },

    {
        path: "/contact",
        element: <ContactPage />,
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
