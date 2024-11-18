import { useEffect, useState } from "react";
import ResCards from "./ResCards";
import Shimmer from "./Shimmer";

const BodyContainer=()=>{
    const [list,updateList]=useState([])
    const [newList,setNewList]=useState([])
    const [searchText,setSearchText]=useState("")

    useEffect(()=>{
        getData()
    },[])

    const getData=async()=>{
        const res=await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonRes=await res.json()
        updateList(jsonRes?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setNewList(jsonRes?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    }

    
    return(
        <div>
            <div className="top-bar">
                <div>
                    <input className="search-bar" type="text" placeholder="Kya khaoge aaj?"
                    value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
                    <button onClick={()=>{
                        const newSearchList=list.filter((lis)=>lis.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setNewList(newSearchList)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>
                {
                    const filterlist=list.filter((temp)=>temp.info.avgRating>4.3)
                    console.log(filterlist)
                    updateList(filterlist)
                }
                }>Click to Filter</button>
            </div>
            {(list.length===0)?<Shimmer/>:<div className="res-cards">
                {newList.map(restraunt=><ResCards resDetails={restraunt} key={restraunt.info.id}/>)}
            </div>}
        </div>
    )
}
export default BodyContainer;