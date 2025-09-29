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
import Account from "@/Pages/Account";
import Login from "@/Pages/Login";
import SignUp from "@/Pages/SignUp";

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
            },
            {
                path:"/account",
               element:<Account/>,  
            },
            {
                path:"/account/login",
                element:<Login/>
            },
            {
                path:"/account/register",
                element:<SignUp/>
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