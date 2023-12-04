import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation()
    const [sideBar, setSideBar] = useState(false)
    return (
        <div className='Navbar'>
            <div className="navbar">

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
                <div
                    onClick={() => {
                        setSideBar(!sideBar)
                    }}
                    className="smallNavbar">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512;' }} space="preserve">
                        <g>
                            <path d="M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z" />
                            <path d="M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z" />
                            <path d="M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z" />
                        </g>
                    </svg>
                    <svg className='hover' xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M24,3.5c0,.83-.67,1.5-1.5,1.5H1.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5H22.5c.83,0,1.5,.67,1.5,1.5ZM6.5,20H1.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H6.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5ZM14.5,11H1.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H14.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Z" /></svg>
                </div>
            </div>
                <div
                    style={sideBar ? { right: '-5%' } : { right: '-105%' }}
                    className="smallUl">
                    <div
                        onClick={() => {
                            setSideBar(!sideBar)
                        }}
                        className="cross">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="512" height="512"><path d="M14.121,12,18,8.117A1.5,1.5,0,0,0,15.883,6L12,9.879,8.11,5.988A1.5,1.5,0,1,0,5.988,8.11L9.879,12,6,15.882A1.5,1.5,0,1,0,8.118,18L12,14.121,15.878,18A1.5,1.5,0,0,0,18,15.878Z" /></svg>
                    </div>
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
                </div>
        </div>
    )
}

export default Navbar