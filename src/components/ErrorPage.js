import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <>
            <h1>Oops something went wrong...</h1>
            <h4>{`${error.status} ${error.statusText}`}</h4>
        </>
    )
}

export default ErrorPage