import { createBrowserRouter } from "react-router";
import AppLayout from "../Layout/AppLayout";
import Home from "../Pages/Home";
import Collections from "@/Pages/Collections";
import About from "@/Pages/About";
import Faq from "@/Pages/Faq";
import NotFound from "@/Pages/NotFound";
import Contact from "@/Pages/Contact";
import Products from "@/Pages/Products";
import AdminLayout from "@/Layout/AdminLayout";
import Cart from "@/Pages/Cart";

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
                path: "/products/:id?",
                element: <Products />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/contact",
                element: <Contact />
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
        path: "/d",
        element: <AdminLayout />,
        children: [

        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])