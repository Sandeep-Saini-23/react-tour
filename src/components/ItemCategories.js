import { useState } from "react"
import Dishes from "./Dishes"

const ItemCategories = (props) => {
    const {data,openAccordion,index,setIndex} = props
    if(!data) return
    const {title,itemCards} = data

    return (
        <div style={{border: '1px solid #F0F0F0', padding: '10px',borderRadius: '10px',background: '#f7f7f7'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',cursor: 'pointer',background: '#DEDEDE',padding:'10px',borderRadius: '10px'}}
                onClick={() => setIndex(index)}
            >
                <h3 style={{margin:0}}>{title} ({itemCards.length})</h3>
                <span style={{fontSize: '24px',fontWeight: 900}}>^</span>
            </div>
            {openAccordion && <Dishes itemCards={itemCards} />}
        </div>
    )
}

export default ItemCategories