import React, { useEffect, useState } from 'react'
import homecss from '../../css/Home.scss'

function List() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const api_key = process.env.REACT_APP_API_KEY;
    const [popularList, setPopularList] = useState()
    const [popularSeries, setPopularSeries] = useState()

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
        console.log(data);
        setPopularList(data.results)
        setPopularSeries(data2.results)
    }

    useEffect(() => {
        getData()
    }, [])

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 12 ? 0 : (prevIndex + 4)
        );
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? 13 - 1 : (prevIndex - 4)
        )
    };

    const goToNext2 = () => {
        setCurrentIndex2((prevIndex) =>
            prevIndex === 12 ? 0 : (prevIndex + 4)
        );
    };

    const goToPrev2 = () => {
        setCurrentIndex2((prevIndex) =>
            prevIndex === 0 ? 13 - 1 : (prevIndex - 4)
        )
    };

    return (
        <div className='List'>
            <div className="popular popmov">
                <h1>Popular Movies</h1>
                <div className="arrowDiv">
                    <div className="grid">
                        <div style={{ transform: `translateX(-${currentIndex * 300}px)` }} className="movies">
                            {
                                popularList ? popularList.map((item, index) => {
                                    return <div key={index} className='movie'>
                                        <div className="text">
                                            <h4>{item.title}</h4>
                                            <p>{item.release_date}</p>
                                        </div>
                                        <img key={index} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
                                    </div>
                                }) : null
                            }
                        </div>
                    </div>
                    <div onClick={goToNext} className="arrow right">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" >
                            <path d="M9,17.88V6.71A1,1,0,0,1,10.71,6l5.58,5.59a1,1,0,0,1,0,1.41l-5.58,5.59A1,1,0,0,1,9,17.88Z" />
                        </svg>
                    </div>
                    <div onClick={goToPrev} className="arrow left">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" >
                            <path d="M13.29,18.59,7.71,13a1,1,0,0,1,0-1.41L13.29,6A1,1,0,0,1,15,6.71V17.88A1,1,0,0,1,13.29,18.59Z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="popular latest">
                <h1>Latest Movies</h1>
                <div className="arrowDiv">
                    <div className="grid">
                        <div style={{ transform: `translateX(-${currentIndex2 * 300}px)` }} className="movies">
                            {
                                popularSeries ? popularSeries.map((item, index) => {
                                    return <div key={index} className='movie'>
                                        <div className="text">
                                            <h4>{item.title}</h4>
                                            <p>{item.release_date}</p>
                                        </div>
                                        <img key={index} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
                                    </div>
                                }) : null
                            }
                        </div>
                    </div>
                    <div onClick={goToNext2} className="arrow right">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" >
                            <path d="M9,17.88V6.71A1,1,0,0,1,10.71,6l5.58,5.59a1,1,0,0,1,0,1.41l-5.58,5.59A1,1,0,0,1,9,17.88Z" />
                        </svg>
                    </div>
                    <div onClick={goToPrev2} className="arrow left">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" >
                            <path d="M13.29,18.59,7.71,13a1,1,0,0,1,0-1.41L13.29,6A1,1,0,0,1,15,6.71V17.88A1,1,0,0,1,13.29,18.59Z" />
                        </svg>
                    </div>
                </div>
            </div>
            <button className='btn'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="80" height="80">
                        <path d="M19.749,9.464,5,.048V23.989L19.743,14.54a3,3,0,0,0,.006-5.076Z" />
                    </svg>
                </div>
                Watch Movie
            </button>
        </div>
    )
}

export default List