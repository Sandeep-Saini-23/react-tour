import { useContext } from "react"
import { ResContext } from "../context/ResContext"

const Instamart = () => {
    const { userName } = useContext(ResContext)
    return (
        <>
            <h1>Instamart Component which may have nested components</h1>
            <h1>{userName}</h1>
        </>
    )
}

export default Instamart