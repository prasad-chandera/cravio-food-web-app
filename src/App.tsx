import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router";

// import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
// import Grocery from "./Components/Grocery";

const Grocery = lazy(() => import('./Components/Grocery'))
const About = lazy( () => import('./Components/About'))

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
                element:<Suspense fallback={<h1>Loading....</h1>} ><About/></Suspense>
            },
            {
                path:'/contact',
                Component:Contact
            },
            {
                path:'/grocery',
                element:<Suspense fallback={<h1>"Loading....."</h1>} ><Grocery/></Suspense> 
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
