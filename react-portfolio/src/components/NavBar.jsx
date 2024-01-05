import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='w-screen h-14 fixed z-10 radial-green'>
            <ul className='flex items-center justify-center pt-3 lg:gap-30 md:gap-20 gap-8'>
                <li><NavLink>About</NavLink></li>
                <li><NavLink>My Work</NavLink></li>
                <li><NavLink>Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;