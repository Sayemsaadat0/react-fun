import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../page/home/Home";
import WhatToDo from "../page/whatToDO/WhatToDo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/what-to-do",
                element: <WhatToDo />,
            }
        ]
    },
]);

export default router