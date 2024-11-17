import { useEffect, useState } from "react";
import ResCards from "./ResCards";
import Shimmer from "./Shimmer";

const BodyContainer=()=>{
    const [list,updateList]=useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData=async()=>{
        const res=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonRes=await res.json()
        updateList(jsonRes?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    }

    if(list.length===0){
        return <Shimmer/>
    }
    return(
        <div>
            <div>
                <button className="filter-btn" onClick={()=>
                {
                    const filterlist=list.filter((temp)=>temp.info.avgRating>4.3)
                    console.log(filterlist)
                    updateList(filterlist)
                }
                }>Click to Filter</button>
            </div>
            <div className="res-cards">
                {list.map(restraunt=><ResCards resDetails={restraunt} key={restraunt.info.id}/>)}
            </div>
        </div>
    )
}
export default BodyContainer;