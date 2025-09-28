import { createBrowserRouter } from "react-router";
import AppLayout from "../Layout/AppLayout";
import Home from "../Pages/Home";
import Collections from "@/Pages/Collections";
import About from "@/Pages/About";
import Faq from "@/Pages/Faq";
import NotFound from "@/Pages/NotFound";

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
            },
            {
                path: "/faq",
                element: <Faq />
            }
        ]
    },
    {
        path:"*",
        element:<NotFound/>
    }
])