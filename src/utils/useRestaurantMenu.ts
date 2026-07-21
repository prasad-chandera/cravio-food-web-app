import {useState, useEffect} from 'react'
import{API_URL} from './constants'

const useRestaurantMenu = (resId?: string) => {
    const [resInfo,setResInfo] = useState<any>(null)
     
    useEffect(()=>{
        fetchMenuData()
    }, [])

    const fetchMenuData = async () => {
        if (!resId) return
        const data = await fetch(`${API_URL}/listRestaurantMenu/${resId}` )
        const jsonData = await data.json() 
        const resultData = jsonData?.data
        setResInfo(resultData)
    }

    return {resInfo}
}

export {useRestaurantMenu}