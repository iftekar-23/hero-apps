
import { createBrowserRouter } from "react-router";
import Homes from "../Pages/Homes";
import MainLayouts from "../Layouts/MainLayouts";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";


const router = createBrowserRouter([

    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                index:true,
                Component: Homes,
            },
            {
                path:'/apps',
                element: <Apps></Apps>
            },
            {
                path:'/installation',
                element:<Installation></Installation>
            },
        ]
    }

])

export default router