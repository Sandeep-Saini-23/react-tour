const Child = (props) => {

    const {firstName,age} = props

    return (
        <>
            <h4>{firstName}</h4>
            <h4>Child component</h4>
            <h4>{age}</h4>
        </>
    )
}

export default Child