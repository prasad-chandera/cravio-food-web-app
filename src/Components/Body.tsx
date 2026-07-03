import React, { useState } from "react";
import RestaurantCard from './RestaurantCard'

const Body = () =>{
    const [listOfRestaurants, setListOfRestaurants] = useState([
        {
            data:{
                id:"334475",
                name:"KFC",
                cloudinaryImageId:'RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/6bbef465-aa91-4669-8185-c0c5df4ab6ea_704797.JPG',
                cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
                costForTwo:40000,
                deliveryTime:36,
                avgRating:3.8
            }
        },
        {
            data:{
                id:"334476",
                name:"Dominos",
                cloudinaryImageId:'RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/6bbef465-aa91-4669-8185-c0c5df4ab6ea_704797.JPG',
                cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
                costForTwo:40000,
                deliveryTime:36,
                avgRating:4.5
            }
        },
        {
            data:{
                id:"334477",
                name:"Burger King",
                cloudinaryImageId:'RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/6bbef465-aa91-4669-8185-c0c5df4ab6ea_704797.JPG',
                cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
                costForTwo:40000,
                deliveryTime:36,
                avgRating:4.6
            }
        },
    ]) 

    return (
        <div className='body' >
            <div className='filter' >
                <button 
                    className='filter-btn' 
                    onClick={()=>{
                        const filteredList  = listOfRestaurants?.filter(res => res.data.avgRating > 4) 
                        setListOfRestaurants(filteredList)
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container' >
                {
                    listOfRestaurants?.map(restaurant => (
                        <RestaurantCard key={restaurant?.data?.id} resData={restaurant}/>
                    ))
                }
                
            </div>
        </div>
    )
}
export default Body