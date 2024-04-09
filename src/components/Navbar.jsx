import { NavLink } from "react-router-dom"

const Navbar = () => {
    return(
        <nav>
            <div className="flex justify-between bg-black py-5 px-10 text-white">
                <NavLink to='/' className='font-bold'>Home</NavLink>
                <NavLink to='/about' className='font-bold'>About</NavLink>
                <NavLink to='/blog' className='font-bold'>Blog</NavLink>
            </div>
        </nav>
    )
}

export default Navbar