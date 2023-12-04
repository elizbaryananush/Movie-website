import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation()
    return (
        <div className='Navbar'>
            <div className="logo">
                <h1><span>Movie</span>Mingle</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={location === '/' ? 'active' : null}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/explore" className={location === '/explore' ? 'active' : null}>
                            Explore
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/genre" className={location === '/genre' ? 'active' : null}>
                            Genre
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar