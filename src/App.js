import React from "react"
import ReactDOM from "react-dom/client"
import BodyContainer from "./components/BodyContainer"
import Header from "./components/Header"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorScreen from "./components/ErrorScreen"
import About from "./components/About"
import Contact from "./components/Contact"

const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <BodyContainer/>
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<ErrorScreen/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    }
])


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)