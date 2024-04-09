import {useRouteError, Link} from 'react-router-dom'

const NotFound = () => {
    const error = useRouteError()

    return(
        <div>
            <h1 className='text-3xl font-bold'>404</h1>
            <p className='fond-semibold text-2xl'>Page Not Found</p>
            <p>{error.statusText || error.message}</p>
            <br/>
            <Link to="/" className='border-2 p-3 border-blue-500 bg-blue-500 text-white rounded-md' >Volver al Home</Link>
        </div>
    )
}

export default NotFound