import { CDN_URL } from "../utils/constants";
import { Restaurant } from "../models/models";
interface RestaurantCardProps  {
    resData:Restaurant
}

const RestaurantCard = (props:RestaurantCardProps) =>{
    const {resData} = props
    const {name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId} = resData
    return (
        <div className='res-card' >
            <img 
                alt="res-logo" 
                className='res-logo' 
                src={cloudinaryImageId ? `${CDN_URL}/${cloudinaryImageId}` : CDN_URL} 
            />
            <h3>{name}</h3>
            <h4>{cuisines?.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            {/* <h4>{deliveryTime} minutes</h4> */}
        </div>
    )
}

export default RestaurantCard