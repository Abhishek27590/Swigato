import React from "react"
import ReactDOM from "react-dom/client"
import data from "./data"

const Header=()=>{
    return(
        <div className="nav-bar">
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzYyCgejRiCjhB3tOqz0jNeMfgh6o_TeLMA&s" className="logo"/>
            </div>
            <div className="">
                <ul className="nav-items">
                    <li>Menu</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const ResCards=({resDetails})=>{
    const {name,costForTwo,avgRatingString,sla,cuisines,cloudinaryImageId}=resDetails.info
    return(
        <div className="res-card">
            <div>
                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+cloudinaryImageId}/>
            </div>
            <div>
                <p>{name}</p>
                <p>{costForTwo.toUpperCase()}</p>
                <p>{avgRatingString}⭐</p>
                <p>{sla.deliveryTime} Mins</p>
                <p>{cuisines.join(",")}</p>
            </div>
        </div>
    )
}

const BodyContainer=()=>{
    return(
        <div>
            <div>
                Search
            </div>
            <div className="res-cards">
                {data.map(restraunt=><ResCards resDetails={restraunt} key={restraunt.info.id}/>)}
            </div>
        </div>
    )
}

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