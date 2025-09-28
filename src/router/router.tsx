import { createBrowserRouter } from "react-router";
import AppLayout from "../Layout/AppLayout";
import Home from "../Pages/Home";
import Collections from "@/Pages/Collections";
import About from "@/Pages/About";

export const routes = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/collections/:m?",
                element: <Collections />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
])