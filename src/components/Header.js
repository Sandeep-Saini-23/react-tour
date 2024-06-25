import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { useNetworkStatus } from "../utils/hooks/useNetworkStatus"
import { ResContext } from "../context/ResContext"
import { useSelector } from "react-redux"

const Header = () => {
    const [btnText, setBtnText] = useState('LogIn')
    const {isOnline} = useNetworkStatus()
    const {userName} = useContext(ResContext)
    const {items} = useSelector((state) => state.CartSlice)

    const statusStyle = {
        height: '25px',
        width: '25px',
        background: isOnline ? 'green': 'red',
        borderRadius: '100%'
    }

    return (
        <div className="headerContainer">
            <div className='header'>
                <div className="logoContainer">
                    <img src={'https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg'} alt="logo not found" height={100} width={100} />
                </div>
                <div className="navContainer">
                    <ul>
                        <li><div style={{display: 'flex', gap: '10px'}}>Online Status: <div style={statusStyle}></div></div></li>
                        <Link to={'/'}><li><strong>Home</strong></li></Link>
                        <Link to={'/about'}><li><strong>About Us</strong></li></Link>
                        <li><strong>Contact Us</strong></li>
                        <Link to={'/instamart'}><li>Instamart</li></Link>
                        <li>{userName}</li>
                        <li><span style={{fontWeight: 900}}>cart : {items.length ?? 0}</span></li>
                    </ul>
                </div>
                <div>
                    <button className="logIn-btn"
                        onClick={() => btnText == 'LogIn' ? setBtnText('LogOut') : setBtnText('LogIn')}
                    >{btnText}</button>
                </div>
            </div>
        </div>
    )
}

export default Header