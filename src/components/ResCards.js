import { CDN_URL } from "../utils/data";

const ResCards=({resDetails})=>{
    const {name,costForTwo,avgRatingString,sla,cuisines,cloudinaryImageId}=resDetails.info
    return(
        <div className="res-card">
            <div className="res-img">
                <img src={CDN_URL+cloudinaryImageId}/>
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
export default ResCards;