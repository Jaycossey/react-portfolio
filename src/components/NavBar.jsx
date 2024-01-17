import { NavLink } from "react-router-dom";

// Navbar component
const NavBar = () => {
    return (
        // Nav container
        <nav className='w-screen h-14 fixed z-10 radial-green'>
            {/* list of navlinks */}
            <ul className='flex items-center justify-center gap-14'>
                {/* if active/pending toggle classes to handle css styles */}
                <NavLink 
                    to="/About"
                    className={({isActive, isPending}) =>
                        isPending ? "pending" : isActive ? "active" : "navlink"
                    }
                ><li>About</li></NavLink>

                <NavLink 
                    to="/*"
                    className={({isActive, isPending}) =>
                        isPending ? "pending" : isActive ? "active" : "navlink"
                    }
                ><li>My Work</li></NavLink>
                
                <NavLink 
                    to="/Contact"
                    className={({isActive, isPending}) =>
                        isPending ? "pending" : isActive ? "active" : "navlink"
                    }
                ><li>Contact</li></NavLink>
                
            </ul>
        </nav>
    );
}

export default NavBar;