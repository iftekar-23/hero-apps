
import { createBrowserRouter } from "react-router";
import Homes from "../Pages/Homes";
import MainLayouts from "../Layouts/MainLayouts";


const router = createBrowserRouter([

    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                index:true,
                Component: Homes,
            },
        ]
    }

])

export default router