import { Link } from "react-router-dom"

const ResturantCard = (props) => {
    const { resData } = props
    const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, id } = resData

    return (
        <Link to={`/resInfo/${id}`}>
            <div className='restroCard'>
                <img className='resImg' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
                <h2>{name}</h2>
                <h2>{avgRating}</h2>
                <p>{costForTwo}</p>
                <p>{cuisines?.join(',')}</p>
            </div>
        </Link>
    )
}

// function ==> Component ===> return new modified component

export const SpecialCard = (ResturantCard) => {
    return (props) => {
        return (
            <div>
                <h1 style={{background: '#000',color: '#fff',position: 'absolute'}}>Special Offer 50% off</h1>
                <ResturantCard {...props} />
            </div>
        )
    }
}

export default ResturantCard