import {useState, useEffect} from 'react'
import Shimmer from "../Components/Shimmer";
import { useParams } from "react-router";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
     
    const {resId} = useParams()
    const {resInfo} = useRestaurantMenu(resId)
    
    
    if(resInfo === null) return <Shimmer/>
    
    const {name, cuisines, costForTwo} = resInfo?.cards?.[2]?.card?.card?.info
    
    const menuGroupCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards

    return ( 
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(', ')} - {costForTwo}</p>
            
            <h2>Menu</h2>
            {
                menuGroupCards?.map((cardItem:any,index:any) => (
                    <div className='menu-groups' key={index} >
                        <h3>{cardItem?.card?.card?.title}</h3>
                        <ul>
                            {
                                cardItem?.card?.card?.itemCards?.map((item:any) =>{
                                    return (
                                        <li key={item?.card?.info?.id} >{item?.card?.info?.name} - {Math.floor(item?.card?.info?.price)/100}</li>       
                                    )
                                })
                            }   

                        </ul>
                    </div>
                ))
            }
            
        </div>
    )
}

export default RestaurantMenu