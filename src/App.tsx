import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";

const AppLayout = () => {
    return (
        <div className='app' >
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        Component:AppLayout,
        children:[
            {
                path:'/',
                Component:Body
            },
            {
                path:'/about',
                Component:About
            },
            {
                path:'/contact',
                Component:Contact
            },
            {
                path:"/restaurant/:resId",
                Component:RestaurantMenu
            }
        ],
        errorElement:<Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root")!)

root.render(<RouterProvider router={appRouter}/>)
