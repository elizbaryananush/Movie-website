import React, { useEffect, useState } from 'react'
import { Stack, Skeleton } from '@mui/material';

function Bottom({ style }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const api_key = process.env.REACT_APP_API_KEY;
    const [popularList, setPopularList] = useState()
    const [popularSeries, setPopularSeries] = useState()
    let grid = document.querySelector('.grid')
    const movie = document.querySelector('.movie')
    const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    const getData = async (e) => {

        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`, {
            method: 'GET',
            headers: {
                accept: 'aplication/json'
            }
        })

        const data = await response.json()

        const response2 = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2YwYTgwNjRmNjkwODExMWFjMWE2YjY2ODhiZjdmZiIsInN1YiI6IjY0NWE0ZjVhZmUwNzdhNWNhYzZjNmU3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z4wbXymQA6bJVAVf6gB93Yb6Lw7k2cOoEtL6u_FKJdA'
            }
        })
        const data2 = await response2.json()
        setPopularList(data.results)
        setPopularSeries(data2.results)
    }

    useEffect(() => {
        getData()
    }, [])

    const goToNext = (e) => {
        e.stopPropagation()
        if (grid) {
            setCurrentIndex((prevIndex) =>
                prevIndex >= (Math.round(grid.clientWidth / 240) * (20 / Math.round(grid.clientWidth / 240) - 1)) ? 0 : (prevIndex + Math.round(grid.clientWidth / 240))
            );
        }
    };

    const goToPrev = (e) => {
        e.stopPropagation()
        if (grid) {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? (Math.round(grid.clientWidth / 240) * (20 / Math.round(grid.clientWidth / 240) - 1)) : (prevIndex - Math.round(grid.clientWidth / 240))
            );
        }
    };

    const goToNext2 = (e) => {
        e.stopPropagation()
        if (grid) {
            setCurrentIndex2((prevIndex) =>
                prevIndex >= (Math.round(grid.clientWidth / 240) * (20 / Math.round(grid.clientWidth / 240) - 1)) ? 0 : (prevIndex + Math.round(grid.clientWidth / 240))
            );
        }
    };

    const goToPrev2 = (e) => {
        e.stopPropagation()
        if (grid) {
            setCurrentIndex2((prevIndex) =>
                prevIndex === 0 ? (Math.round(grid.clientWidth / 240) * (20 / Math.round(grid.clientWidth / 240) - 1)) : (prevIndex - Math.round(grid.clientWidth / 240))
            );
        }
    };

    useEffect(() => {
        setCurrentIndex(0)
        setCurrentIndex2(0)
    }, [style])

    return (
        <div style={style ? { display: 'none' } : { display: 'flex' }} className='Bottom'>
            <div className="popular popmov">
                <h1>Popular <span>Movies</span></h1>
                <div className="arrowDiv">
                    <div className="grid">
                        <div style={movie && currentIndex !== 0 ? { transform: `translateX(-${currentIndex * movie.clientWidth + currentIndex * 40}px)` } : null} className="movies">
                            {
                                popularList ? popularList.map((item, index) => {
                                    return <div
                                        onClick={() => {
                                            window.location.href = `/${item.id}`
                                        }}
                                        key={index}
                                        className='movie'>
                                        <div className="text">
                                            <h4>{item.title}</h4>
                                            <p>{item.release_date}</p>
                                        </div>
                                        <img key={index} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
                                    </div>
                                }) : array.map((item, index) => {
                                    return <Stack className='movie' spacing={1}>
                                        <Skeleton className='skeleton' variant='rectangular' width={200} height={280} />
                                    </Stack>
                                })
                            }
                        </div>
                    </div>
                    <div onClick={(e) => goToNext(e)} className="arrow right">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" >
                            <path d="M9,17.88V6.71A1,1,0,0,1,10.71,6l5.58,5.59a1,1,0,0,1,0,1.41l-5.58,5.59A1,1,0,0,1,9,17.88Z" />
                        </svg>
                    </div>
                    <div onClick={(e) => goToPrev(e)} className="arrow left">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" >
                            <path d="M13.29,18.59,7.71,13a1,1,0,0,1,0-1.41L13.29,6A1,1,0,0,1,15,6.71V17.88A1,1,0,0,1,13.29,18.59Z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="popular latest">
                <h1>Latest <span>Movies</span></h1>
                <div className="arrowDiv">
                    <div className="grid">
                        <div style={movie ? { transform: `translateX(-${currentIndex2 * movie.clientWidth + currentIndex2 * 40}px)` } : null} className="movies">
                            {
                                popularSeries ? popularSeries.map((item, index) => {
                                    return <div
                                        onClick={() => {
                                            window.location.href = `/${item.id}`
                                        }}
                                        key={index}
                                        className='movie'>
                                        <div className="text">
                                            <h4>{item.title}</h4>
                                            <p>{item.release_date}</p>
                                        </div>
                                        <img key={index} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
                                    </div>
                                }) : <Stack className='movie' spacing={1}>
                                    <Skeleton className='skeleton' variant='rectangular' width={200} height={280} />
                                </Stack>
                            }
                        </div>
                    </div>
                    <div onClick={(e) => goToNext2(e)} className="arrow right">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" >
                            <path d="M9,17.88V6.71A1,1,0,0,1,10.71,6l5.58,5.59a1,1,0,0,1,0,1.41l-5.58,5.59A1,1,0,0,1,9,17.88Z" />
                        </svg>
                    </div>
                    <div onClick={(e) => goToPrev2()} className="arrow left">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" >
                            <path d="M13.29,18.59,7.71,13a1,1,0,0,1,0-1.41L13.29,6A1,1,0,0,1,15,6.71V17.88A1,1,0,0,1,13.29,18.59Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bottom