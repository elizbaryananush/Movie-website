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
                    <li>
                        <NavLink to="/news" className={location === '/news' ? 'active' : null}>
                            News
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies" className={location === '/movies' ? 'active' : null}>
                            Movies
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/tvshows" className={location === '/tvshows' ? 'active' : null}>
                            TV Shows
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar