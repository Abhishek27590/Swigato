import { useState } from "react";
import data from "../utils/data"
import ResCards from "./ResCards";

const BodyContainer=()=>{
    const [list,updateList]=useState(data)
    return(
        <div>
            <div>
                <button className="filter-btn" onClick={()=>
                {
                    const filterlist=list.filter((temp)=>temp.info.avgRating>4)
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