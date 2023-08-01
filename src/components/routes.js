
import {useRoutes} from "react-router-dom";
import React from "react";
import {SkinEffect} from "../pages/SkinEffect";
import {RectangularWaveguides} from "../pages/RectangularWaveguides";
import {Main} from "../pages/Main";

export const PublicRoutes = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Main/>
        },
        {
            path: '/RectangularWaveguides',
            element: <RectangularWaveguides/>
        },
        {
            path: '/SkinEffect',
            element: <SkinEffect/>
        },
    ])

    return (
        <>
            {routes}
        </>
    )

}
