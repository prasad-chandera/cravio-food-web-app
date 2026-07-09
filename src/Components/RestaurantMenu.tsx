import {useState, useEffect} from 'react'
import Shimmer from "../Components/Shimmer";
import { useParams } from "react-router";
import{API_URL} from '../utils/constants'

const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState<any>(null)
     
    const {resId} = useParams()
    console.log(resId)

    useEffect(()=>{
        fetchMenuData()
    },[])
    
    const fetchMenuData = async () => {
        const data = await fetch(`${API_URL}/listRestaurantMenu/${resId}` )
        const jsonData = await data.json() 
        console.log(jsonData)
        const resultData = jsonData?.data
        console.log(resultData)
        setResInfo(resultData)
    }
    
    if(resInfo === null) return <Shimmer/>
    
    const {name, cuisines, costForTwo} = resInfo?.cards?.[2]?.card?.card?.info
    
    const menuGroupCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    console.log(menuGroupCards)

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