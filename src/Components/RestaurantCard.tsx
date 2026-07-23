import { CDN_URL } from "../utils/constants";
import { Restaurant } from "../models/models";
interface RestaurantCardProps  {
    resData:Restaurant
}

const RestaurantCard = (props:RestaurantCardProps) =>{
    const {resData} = props
    const {name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId} = resData
    return (
        <div className='res-card w-[300] m-4 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 hover:scale-102 hover:transition duration-300 ease-in-out' >
            <img 
                alt="res-logo" 
                className='res-logo rounded-lg mb-2' 
                src={cloudinaryImageId ? `${CDN_URL}/${cloudinaryImageId}` : CDN_URL} 
            />
            <h3 className="font-bold pb-1 text-lg" >{name}</h3>
            <h4 className="text-black-100 pb-2" >{cuisines?.join(', ')}</h4>
            <h4 className="pb-2" >{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            {/* <h4>{deliveryTime} minutes</h4> */}
        </div>
    )
}

export default RestaurantCard