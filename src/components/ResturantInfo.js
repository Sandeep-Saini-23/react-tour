import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useResInfo } from "../utils/hooks/useResInfo"
import ItemCategories from "./ItemCategories"

//Modularity
//Testble

//Single resoponsibility principle
//custom hooks

const ResturantInfo = () => {
    const {resId} = useParams()
    const {resInfo} = useResInfo(resId)

    const categoryAccordion = resInfo?.filter(cat => cat?.card?.card["@type"] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')

    console.log(categoryAccordion)

    return (
        <>
            <div style={{width: '60%',margin: 'auto'}}>
                <h1>Restaurant Info</h1>
                {categoryAccordion?.map(cat => {
                    return <ItemCategories data={cat?.card?.card}/>
                })}
            </div>
        </>
    )
}

export default ResturantInfo