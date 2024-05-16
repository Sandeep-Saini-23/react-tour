import React from 'react'
import ReactDOM from 'react-dom/client'
import resData from './mockData.json'

const Header = () => {
    return (
        <div className="headerContainer">
            <div className='header'>
                <div className="logoContainer">
                    <img src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg" alt="logo not found" height={100} width={100} />
                </div>
                <div className="navContainer">
                    <ul>
                        <li><strong>Home</strong></li>
                        <li><strong>About Us</strong></li>
                        <li><strong>Contact Us</strong></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const Resturant = (props) => {
    return (
        <div className='restroCard'>
            <img className='resImg' src={props.resData.image.url} />
            <h2>{props.resData.name}</h2>
            <h2>{props.resData.rating.rating_text}</h2>
            <p>{props.resData.cfo.text}</p>
            <p>{props.resData.cuisine.map(({ name }) => name).join(',')}</p>
        </div>
    )
}

const Body = () => {
    return (
        <div className='bodyContainer'>
            <Resturant resData={resData[0]}/>
            <Resturant resData={resData[1]}/>
        </div>
    )
}

function App() {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
