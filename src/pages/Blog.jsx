import { Link, useLoaderData } from 'react-router-dom'

const Blog = () => {
    const { data } = useLoaderData()
    return (
        <ul className='flex flex-col gap-2'>
            {
                data.length > 0 ?
                    data.map(item =>
                        (<li key={item.id}> <Link to={`/blog/${item.id}`} className='font-semibold'>{item.id} - {item.title} </Link> </li>))
                    : (<li>'Not Found'</li>)
            }
        </ul>
    )
}
export default Blog

export const loaderBlog = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return { data }
}

