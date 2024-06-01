import { useState } from "react"

const ItemCategories = (props) => {
    const {title,itemCards} = props.data
    const [openAccordion,setOpenAccordion] = useState(false)
    
    return (
        <div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}
                onClick={() => setOpenAccordion(!openAccordion)}
            >
                <h3>{title} ({itemCards.length})</h3>
                <span style={{fontSize: '24px',fontWeight: 900}}>^</span>
            </div>
            {openAccordion && <div>
                <span>{title} sub items</span>
            </div>}
        </div>
    )
}

export default ItemCategories