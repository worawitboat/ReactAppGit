import React from "react";
import Main from "./components/Main";
import Detail from "./components/Detail";

const routes = [
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/ReactAppGit",
        element: <Main />,
    },
    {
        path: "/detail",
        element: <Detail />,
    },
];
export default routes;