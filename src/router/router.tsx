import { createBrowserRouter } from "react-router";
import AppLayout from "../Layout/AppLayout";
import Home from "../Pages/Home";

export const routes = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])