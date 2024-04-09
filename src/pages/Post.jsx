import { Link, useLoaderData } from 'react-router-dom'

const Post = () => {
    const { data } = useLoaderData()
    return (
        <>
            <h1 className='font-bold'>{data.id} - {data.title} </h1>
            <p>{data.body}</p>
            <br />
            <Link
                to='/blog'
                className='border-2 py-2 px-5 border-blue-600 bg-blue-600 text-white rounded-md'
            > Volver al Blog </Link>
        </>
    )
}
export default Post

export const loaderPost = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    if(!res.ok){
        throw ({
            status: res.status,
            statusText: 'No Encontrado'
        })
    }
    const data = await res.json()
    return { data }
}