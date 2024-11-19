import { CDN_URL } from "../utils/data";

const ResCards=({resDetails})=>{
    const {name,costForTwo,avgRatingString,sla,cuisines,cloudinaryImageId}=resDetails.info
    return(
        <div className="res-card">
            <div className="res-img">
                <img src={CDN_URL+cloudinaryImageId}/>
            </div>
            <div>
                <p className="link-remove">{name}</p>
                <p className="link-remove">{costForTwo.toUpperCase()}</p>
                <p className="link-remove">{avgRatingString}⭐</p>
                <p className="link-remove">{sla.deliveryTime} Mins</p>
                <p className="cuisines link-remove">{cuisines.join(",")}</p>
            </div>
        </div>
    )

}
export default ResCards;