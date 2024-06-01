import ResturantCard, { SpecialCard } from "./ResturantCard"
import { useEffect, useState } from "react"
import { Shimmer } from "./Shimmer"

//Higher order components

const Body = () => {
    const [filterRestro, setFilterRestro] = useState([])
    const SpecialRestroCard = SpecialCard(ResturantCard)

    //UI layer
    //Data layer

    const filterTopRatedRestaurants = () => {
        setFilterRestro(resData.filter((res) => Number(res.info.rating.rating_text) >= 4))
    }

    const getData = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}restaurants/list/v5?lat=22.7512288&lng=75.8713822&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
            const jsonData = await res.json()
            setFilterRestro(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    //conditional rendering
    // if (!filterRestro.length) {
    //     return <Shimmer />
    // }

    return (
        !filterRestro.length ? <Shimmer /> : (
            <div style={{ padding: '10px' }}>
                <button onClick={filterTopRatedRestaurants}>Top rated restaurants</button>
                <div className='bodyContainer'>
                    {filterRestro?.map((res, i) => {
                        return res.info.avgRating >= 4  ? <SpecialRestroCard resData={res.info}/> :<ResturantCard key={i} resData={res.info} />
                    })}
                </div>
            </div>)
    )
}

export default Body