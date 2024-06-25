import { useContext, useRef, useState } from "react"
import { ResContext } from "../context/ResContext"
import { useDispatch } from "react-redux"
import { addItem, clearCart, removeItem } from "../store/CartSlice"

//useRef

const AboutUs = () => {
    const {userName} = useContext(ResContext)
    const dispatch = useDispatch()

    let x = 0
    const [state,setState] = useState(0)
    const ref = useRef(0) 

    console.log('Rerendering...')

    const handleAddItem = () => {
        dispatch(addItem("Aalu paratha"))
    }

    const handleRemoveItem = () => {
        dispatch(removeItem())
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <>
            <h1>This is aboutUs component</h1>
            <h1>{userName}</h1>
            <button style={{margin: '10px',padding: '10px',fontWeight: 'bold',fontSize: '24px'}} 
                onClick={handleAddItem}            
            >Add + 
            </button>
            <button style={{margin: '10px',padding: '10px',fontWeight: 'bold',fontSize: '24px'}} 
                onClick={handleRemoveItem}            
            >Remove Item
            </button>
            <button style={{margin: '10px',padding: '10px',fontWeight: 'bold',fontSize: '24px'}} 
                onClick={handleClearCart}            
            >Clear Cart
            </button>

            <button onClick={() => {
                x = x + 1
                console.log("x =", x)
            }}>
                let update
            </button>
            <button 
                onClick={() => {
                    setState(state + 1)
                    console.log("state = ",state)
                }}
            >
                state update
            </button>
            <button
                onClick={() => {
                    ref.current = ref.current + 1
                    console.log("ref = ",ref)
                }}
            >
                ref
            </button>
        </>
    )
}

export default AboutUs