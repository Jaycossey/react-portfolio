import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='w-screen h-14 fixed z-10 radial-green'>
            <ul className='flex items-center justify-center pt-3 lg:gap-30 md:gap-20 gap-8'>
                <NavLink 
                    to="/About"
                    className={({isActive, isPending}) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                ><li>About</li></NavLink>

                <NavLink 
                    to="/*"
                    className={({isActive, isPending}) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                ><li>My Work</li></NavLink>
                
                <NavLink 
                    to="/Contact"
                    className={({isActive, isPending}) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                ><li>Contact</li></NavLink>
                
            </ul>
        </nav>
    );
}

export default NavBar;