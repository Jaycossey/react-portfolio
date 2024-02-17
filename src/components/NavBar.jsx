import { NavLink } from "react-router-dom";

// Navbar component
const NavBar = () => {
    return (
        // Nav container
        <nav className='w-screen 
                        h-14 
                        fixed 
                        z-10 
                        radial-green 
                        bg-black'>
                            
            {/* list of navlinks */}
            <ul className='flex items-center justify-center gap-10'>
                {/* if active/pending toggle classes to handle css styles */}
                <NavLink 
                    to="/"
                    className={({isActive, isPending}) =>
                        isPending ? "pending" : isActive ? "active" : "navlink"
                    }
                ><li>About</li></NavLink>

                <NavLink 
                    to="/Portfolio"
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