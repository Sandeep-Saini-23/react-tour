import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { useResInfo } from "../utils/hooks/useResInfo"
import ItemCategories from "./ItemCategories"

//Modularity
//Testble

//Single resoponsibility principle
//custom hooks


//useMemo

const ResturantInfo = () => {
    const { resId } = useParams()
    const { resInfo } = useResInfo(resId)
    const [index, setIndex] = useState(0)

    const categoryAccordion = useMemo(() => {
        return resInfo?.filter(cat => cat?.card?.card["@type"] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    },[resInfo])

    return (
        <>
            <div style={{ width: '60%', margin: 'auto' }}>
                <h1>Restaurant Info</h1>
                {categoryAccordion?.map((cat, i) => {
                    return <div
                        key={cat.card.card.title}
                        style={{ margin: '20px' }}
                    >
                        <ItemCategories
                            data={cat?.card?.card}
                            openAccordion={i == index}
                            setIndex={setIndex}
                            index={i}
                        />
                    </div>
                })}
            </div>
        </>
    )
}

export default ResturantInfo