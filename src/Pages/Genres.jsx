import React, { useState, useEffect, useRef } from 'react'
import css from '../css/Genres.scss'
import { motion } from 'framer-motion';
import { Stack, Skeleton } from '@mui/material';

function Genres() {
    const api_key = process.env.REACT_APP_API_KEY;
    const [genres, setGenres] = useState()
    const [genre, setGenre] = useState()
    const [movieData, setMovieData] = useState()
    const [pages, setPages] = useState()
    const [number, setNumber] = useState(1)
    const [width, setWidth] = useState()
    const carousel = document.querySelector('.filters')
    const [size, setSize] = useState(window.innerWidth);
    const [buttons, setButtons] = useState(window.innerWidth > 700)

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
            setButtons(window.innerWidth > 700);
            if (carousel) {
                setWidth(carousel.scrollWidth - carousel.clientWidth)
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2YwYTgwNjRmNjkwODExMWFjMWE2YjY2ODhiZjdmZiIsInN1YiI6IjY0NWE0ZjVhZmUwNzdhNWNhYzZjNmU3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z4wbXymQA6bJVAVf6gB93Yb6Lw7k2cOoEtL6u_FKJdA'
            }
        })

        const data = await response.json()
        setGenres(data.genres)
    }

    const getMovies = async (e, page) => {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${genre}&page=${page}`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2YwYTgwNjRmNjkwODExMWFjMWE2YjY2ODhiZjdmZiIsInN1YiI6IjY0NWE0ZjVhZmUwNzdhNWNhYzZjNmU3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z4wbXymQA6bJVAVf6gB93Yb6Lw7k2cOoEtL6u_FKJdA'
            }
        })

        const data = await response.json()
        setMovieData(data)
        setPages(new Array(data.total_pages).fill(0).map((_, index) => index + 1))
    }

    useEffect(() => {
        setTimeout(() => {

            if (carousel != undefined && buttons) {
                console.log(carousel.scrollWidth - carousel.offsetWidth);
                setWidth(carousel.scrollWidth - carousel.offsetWidth)
            } else if (carousel) {
                setWidth(carousel.scrollWidth - carousel.clientWidth)
                console.log(carousel.scrollWidth - carousel.clientWidth);
            }
        }, [300])
    }, [carousel])

    useEffect(() => {
        getData()
        getMovies()
    }, [genre])

    return (
        <div className="Genres">
            <div className='Bottom'>
                <motion.div
                    className="filters">
                    {
                        carousel ? <motion.div
                            style={{ transform: 'translateX(-1px)' }}
                            drag='x'
                            dragConstraints={{ left: -width, right: 0 }}
                            className="slider">
                            {
                                genres ? genres.map((item, index) => {
                                    return <button
                                        key={index}
                                        className={genre == item.id ? 'active btn' : 'btn'}
                                        onClick={() => {
                                            setGenre(item.id)
                                            setNumber(1)
                                            setPages(1)
                                        }}>{item.name}</button>
                                }) : null
                            }
                        </motion.div> : null
                    }

                </motion.div>
                <div className="list">
                    {
                        movieData && movieData.results ? movieData.results.map((item, index) => {
                            return <div
                                onClick={() => {
                                    window.location.href = `/${item.id}`
                                }}
                                key={index}
                                className="item">
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
                                <h4>{item.title}</h4>
                                <p>{item.release_date}</p>
                            </div>
                        }) : null
                    }
                </div>
                <div className="pagesButtons">
                    <div
                        onClick={(e) => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                            getMovies(e, 1)
                            setNumber(1)
                        }}
                        style={movieData && movieData.results && movieData.total_pages > 1 ? { display: 'flex' } : { display: 'none' }}
                        className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M10.48,19a1,1,0,0,1-.7-.29L5.19,14.12a3,3,0,0,1,0-4.24L9.78,5.29a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.42L6.6,11.29a1,1,0,0,0,0,1.42l4.59,4.58a1,1,0,0,1,0,1.42A1,1,0,0,1,10.48,19Z" /><path d="M17.48,19a1,1,0,0,1-.7-.29l-6-6a1,1,0,0,1,0-1.42l6-6a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.42L12.9,12l5.29,5.29a1,1,0,0,1,0,1.42A1,1,0,0,1,17.48,19Z" /></svg>
                    </div>
                    {
                        movieData && movieData.total_pages && pages.length > 1 ? pages.map((item, index) => {
                            if (pages[index] === number && movieData.page < movieData.total_pages) {
                                return <button
                                    key={index}
                                    className={pages[index] === movieData.page ? 'btn first active2' : 'btn'}
                                    onClick={(e) => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth'
                                        });
                                        if (pages[index] == 1) {
                                            setNumber(1)
                                            getMovies(e, pages[index])
                                        } else if (pages[index] !== 1) {
                                            setNumber(pages[index] - 1)
                                            getMovies(e, pages[index])
                                        }
                                    }}
                                >{pages[index]}</button>
                            } else if (pages[index] === number + 1 && movieData.page + 1 < movieData.total_pages) {
                                return <button
                                    key={index}
                                    className={pages[index] === movieData.page ? 'btn active2' : 'btn'}
                                    onClick={(e) => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth'
                                        });
                                        if (pages[index] == 1) {
                                            setNumber(1)
                                            getMovies(e, pages[index])
                                        } else if (pages[index] !== 1) {
                                            setNumber(pages[index] - 1)
                                            getMovies(e, pages[index])
                                        }
                                    }}
                                >{pages[index]}</button>
                            } else if (pages[index] === number + 2 && movieData.page + 2 < movieData.total_pages) {
                                return <button
                                    key={index}
                                    className={pages[index] === movieData.page ? 'btn active2' : 'btn'}
                                    onClick={(e) => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth'
                                        });
                                        if (pages[index] == 1) {
                                            setNumber(1)
                                            getMovies(e, pages[index])
                                        } else if (pages[index] !== 1) {
                                            setNumber(pages[index] - 1)
                                            getMovies(e, pages[index])
                                        }
                                    }}
                                >{pages[index]}</button>
                            }
                        }) : null
                    }
                    <button style={movieData && pages && movieData.page + 2 < movieData.total_pages && movieData.total_pages > 5 ? null : { display: 'none' }} className='btn btn_dot'>...</button>
                    {
                        movieData && movieData.total_pages && pages.length >= 5 ? pages.map((item, index) => {
                            if (pages[index] === pages.length) {
                                return <button
                                    key={index}
                                    className={pages[index] === movieData.page ? 'btn active2' : 'btn'}
                                    onClick={(e) => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth'
                                        });
                                        if (pages[index] == 1) {
                                            setNumber(1)
                                            getMovies(e, pages[index])
                                        } else if (pages[index] !== 1) {
                                            setNumber(pages[index] - 1)
                                            getMovies(e, pages[index])
                                        }
                                    }}
                                >{pages[index]}</button>
                            } else if (pages[index] === pages.length - 1) {
                                return <button
                                    key={index}
                                    className={pages[index] === movieData.page ? 'btn active2' : 'btn'}
                                    onClick={(e) => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth'
                                        });
                                        if (pages[index] == 1) {
                                            setNumber(1)
                                            getMovies(e, pages[index])
                                        } else if (pages[index] !== 1) {
                                            setNumber(pages[index] - 1)
                                            getMovies(e, pages[index])
                                        }
                                    }}
                                >{pages[index]}</button>
                            }
                        }) : null
                    }
                    <div
                        onClick={(e) => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                            getMovies(e, movieData.total_pages)
                            setNumber(movieData.total_pages)
                        }}
                        style={movieData && movieData.results && movieData.total_pages > 1 ? { display: 'flex' } : { display: 'none' }}
                        className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M13.1,19a1,1,0,0,1-.7-1.71L17,12.71a1,1,0,0,0,0-1.42L12.4,6.71a1,1,0,0,1,0-1.42,1,1,0,0,1,1.41,0L18.4,9.88a3,3,0,0,1,0,4.24l-4.59,4.59A1,1,0,0,1,13.1,19Z" /><path d="M6.1,19a1,1,0,0,1-.7-1.71L10.69,12,5.4,6.71a1,1,0,0,1,0-1.42,1,1,0,0,1,1.41,0l6,6a1,1,0,0,1,0,1.42l-6,6A1,1,0,0,1,6.1,19Z" /></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Genres