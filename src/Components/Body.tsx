import React, { useState , useEffect} from "react";
import RestaurantCard from './RestaurantCard'
import { Restaurant } from "../models/models";
import Shimmer from "../Components/Shimmer";
import {Link} from 'react-router'
import { useOnlineStatus } from "../utils/useOnlineStatus";
const Body = () =>{
    const [listOfRestaurants, setListOfRestaurants] = useState<Restaurant[]>([]) 
    const [searchText, setSearchText] = useState('') 
    const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]) 
    const {onlineStatus} = useOnlineStatus()
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () =>{
        const data = await fetch('https://corsproxy.io/?https://namastedev.com/api/v1/listRestaurants');
        const json = await data.json();
        console.log(json?.data?.data)
        const restaurants = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
        const resultData: Restaurant[] = restaurants.map((resInfo: { info: Restaurant }) => resInfo.info);
        setListOfRestaurants(resultData)
        setFilteredRestaurants(resultData)
    }
    if(!onlineStatus){
        return (
            <div>Please check your connection!!!</div>
        )
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
                            <Link key={restaurant?.id} to={`/restaurant/${restaurant?.id}`} ><RestaurantCard  resData={restaurant}/></Link>
                        ))
                    }
                    
                </div>
            </div>
        )
}
export default Body