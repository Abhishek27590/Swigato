import React from "react"
import ReactDOM from "react-dom/client"
import BodyContainer from "./components/BodyContainer"
import Header from "./components/Header"

const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <BodyContainer/>
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)