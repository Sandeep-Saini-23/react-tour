const Dishes = ({ itemCards }) => {
    return (
        itemCards.map(item => {
            return (
                <div key={item.card.info.id} style={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderBottom: '3px solid' }}>
                    <div style={{ width: '80%' }}>
                        <h4>{item.card.info.name}</h4>
                        <p>₹{(item.card.info.defaultPrice || item.card.info.price) / 100}</p>
                        <p style={{ color: 'green' }}><span>*</span>{item.card.info.ratings.aggregatedRating.rating}</p>
                        <p style={{ color: 'gray' }}>{item.card.info.description}</p>
                    </div>
                    <div style={{ width: '20%', padding: '10px' }}>
                        {item.card.info.imageId && <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`} height={170} width={170} style={{ borderRadius: '10px' }} />}
                    </div>
                </div>
            )
        })
    )
}

export default Dishes