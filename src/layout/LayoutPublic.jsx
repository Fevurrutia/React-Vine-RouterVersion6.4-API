import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LayoutPublic = () => {
    const navigation = useNavigation()
    return (
        <>
            <Navbar />
            <main className='container mx-auto'>
               {
                navigation.state === 'loading' && (<p className='font-bold'> Loading... </p>)
               }
                <Outlet />
            </main>
            <footer className='container text-center'>Footer</footer>
        </>

    )
}

export default LayoutPublic