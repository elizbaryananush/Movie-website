import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import css from '../css/Movie.scss'

function Movie() {
    const { id } = useParams()
    const api_key = process.env.REACT_APP_API_KEY;
    const [movieData, setMovieData] = useState()

    const getMovieData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2YwYTgwNjRmNjkwODExMWFjMWE2YjY2ODhiZjdmZiIsInN1YiI6IjY0NWE0ZjVhZmUwNzdhNWNhYzZjNmU3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z4wbXymQA6bJVAVf6gB93Yb6Lw7k2cOoEtL6u_FKJdA'
            }
        })

        const data = await response.json()
        setMovieData(data)
    }

    useEffect(() => {
        getMovieData()
    }, [])
    return (
        <div className='Movie'>
            {
                movieData ? <div>
                    <div className="imgDiv">
                        <img src={`https://image.tmdb.org/t/p/w300${movieData.backdrop_path}`} alt="" />
                        <div className="background"></div>
                    </div>
                    <div className="bottom">
                        <div className="text">
                            <h1>{movieData.title}</h1>
                            <p className='tagline'>{movieData.tagline}</p>
                            <p>{movieData.overview}</p>
                        </div>
                        <div className="info">
                            <p>{movieData.release_date}</p>
                            <p>IMDB Rating : {movieData.vote_average}</p>
                            <p>Language : {movieData.original_language}</p>
                        </div>
                        <div className="genres">
                            {
                                movieData.genres.map((item, index) => {
                                    return <div
                                        key={index}
                                        className="item">{item.name}</div>
                                })
                            }
                        </div>
                        <p className='link'>See more about this movie <span><a href={movieData.homepage}>here</a></span></p>
                    </div>
                </div> : null
            }
        </div>
    )
}

export default Movie