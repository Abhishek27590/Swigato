import React from "react"
import ReactDOM from "react-dom/client"
import BodyContainer from "./components/BodyContainer"
import Header from "./components/Header"
import { createBrowserRouter, RouterProvider ,Outlet } from "react-router-dom"
import ErrorScreen from "./components/ErrorScreen"
import About from "./components/About"
import Contact from "./components/Contact"

const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<BodyContainer/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            }
        ],
        errorElement:<ErrorScreen/>
    },
    
])


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)