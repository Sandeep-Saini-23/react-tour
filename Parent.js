import Child from "./Child"

const Parent = () => {

    return (
        <>
            <h4>Parent component</h4>
            <Child firstName={'Manish'} age={25}/>
        </>
    )
}
export default Parent