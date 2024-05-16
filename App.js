import React from "react"
import ReactDOM from 'react-dom/client'
import Parent from "./Parent"

function App() {
    return (
        <>
        <h1>React App</h1>
            <Parent />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>)
