import { createBrowserRouter, RouteObject } from "react-router-dom";
import MenuPage from "../pages/MenuPage";
import ErrorPage from "../pages/NotFoundPage";


const ROUTERS: RouteObject[] = [
    {
        path: '/',
        element: <MenuPage />,
        errorElement: <ErrorPage />
    },
    
]
export const router = createBrowserRouter(ROUTERS)