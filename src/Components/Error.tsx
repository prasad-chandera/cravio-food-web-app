import {isRouteErrorResponse, useRouteError} from 'react-router'

const Error = () =>{
    const err = useRouteError()

    const errorMessage = isRouteErrorResponse(err)
        ? `${err.status}: ${err.statusText}`
        : typeof err === 'object' && err !== null && 'message' in err && typeof (err as {message?: unknown}).message === 'string'
            ? (err as {message: string}).message
            : 'Unknown error'

    return (
        <div>
            <h1>Oops!!!</h1>
            <h1>Something went wrong!!!</h1>
            <h3>{errorMessage}</h3>
        </div>
    )
}

export default Error