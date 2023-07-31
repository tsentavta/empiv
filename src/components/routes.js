import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./utils/consts";
import Admin from './pages/Admin';
import Basket from './pages/Basket';
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import {useRoutes} from "react-router";
import React from "react";
import About from "./pages/About";

export const AdminRoutes = () => {
    const routes = useRoutes([
        {
            path: ADMIN_ROUTE,
            element: <Admin/>
        }
    ])
    return (
        <>
            {routes}
        </>
    )
}

export const AuthRoutes = () => {
    const routes = useRoutes([
        {
            path: BASKET_ROUTE,
            element: <Basket/>
        }
    ])
    return (
        <>
            {routes}
        </>
    )

}

export const PublicRoutes = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Shop/>
        },
        {
            path: ABOUT_ROUTE,
            element: <About/>
        },
        {
            path: SHOP_ROUTE,
            element: <Shop/>
        },
        {
            path: LOGIN_ROUTE,
            element: <Auth/>
        },
        {
            path: REGISTRATION_ROUTE,
            element: <Auth/>
        },
        {
            path: DEVICE_ROUTE,
            element: <DevicePage/>
        },
    ])

    return (
        <>
            {routes}
        </>
    )

}
