import { useEffect, useState } from "react"

export const useResInfo = (resId) => {
    const [resInfo,setResInfo] = useState(null)

    const getResturantInfo = async() => {
        const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7512288&lng=75.8713822&restaurantId=${resId}`)
        const json = await res.json()
        setResInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    }

    useEffect(() => {
       getResturantInfo() 
    },[])

    return {resInfo}
}