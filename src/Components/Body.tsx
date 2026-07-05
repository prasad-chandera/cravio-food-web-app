import React, { useState , useEffect} from "react";
import RestaurantCard from './RestaurantCard'
import { Restaurant } from "../models/models";
import Shimmer from "../Components/Shimmer";


const Body = () =>{
    const [listOfRestaurants, setListOfRestaurants] = useState<Restaurant[]>([]) 
    const [searchText, setSearchText] = useState('') 
    const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]) 

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () =>{
        const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
        const resultData: Restaurant[] = restaurants.map((resInfo: { info: Restaurant }) => resInfo.info);
        setListOfRestaurants(resultData)
        setFilteredRestaurants(resultData)
    }

    
    return !listOfRestaurants?.length
        ? <Shimmer/>
        : (
            <div className='body' >
                <div className='filter' >
                    <div className="search" >
                        <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                        <button 
                            className="search-btn" 
                            onClick={()=>{
                                const filteredList = listOfRestaurants?.filter(res => res.name?.toLowerCase()?.includes(searchText?.trim()?.toLowerCase()))
                                setFilteredRestaurants(filteredList)
                            }}
                        >
                            Search
                        </button>
                    </div>
                    <button 
                        className='filter-btn' 
                        onClick={()=>{
                            const filteredList  = listOfRestaurants?.filter((res: Restaurant) => Number(res.avgRating) > 4) 
                            setFilteredRestaurants(filteredList)
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                <div className='res-container' >
                    {
                        filteredRestaurants?.map(restaurant => (
                            <RestaurantCard key={restaurant?.id} resData={restaurant}/>
                        ))
                    }
                    
                </div>
            </div>
        )
}
export default Body