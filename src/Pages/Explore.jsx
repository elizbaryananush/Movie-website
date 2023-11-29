import React, { useEffect, useState } from 'react'
import explorecss from '../css/Explore.scss'

function Explore() {
    const [search, setSearch] = useState()
    const [name, setName] = useState()
    const [searchingPage, setSearchingPage] = useState(false)
    const [searchMovieData, setSearchMovieData] = useState()

    const getSearchingMovie = async (e) => {
        e.preventDefault()
        setSearchingPage(true)

        if (search) {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2YwYTgwNjRmNjkwODExMWFjMWE2YjY2ODhiZjdmZiIsInN1YiI6IjY0NWE0ZjVhZmUwNzdhNWNhYzZjNmU3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z4wbXymQA6bJVAVf6gB93Yb6Lw7k2cOoEtL6u_FKJdA'
                }
            })
            const data = await response.json();
            setSearchMovieData(data.results)
            console.log(data);
        }
    }

    useEffect(() => {
        if (searchMovieData) {
            console.log(searchMovieData.length);
        }
    }, [searchMovieData])

    return (
        <div className='Explore'>
            <div className="heading">
                <form onSubmit={(e) => getSearchingMovie(e)} action="submit">
                    <input
                        placeholder='Search...'
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                    <button>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M18.1641 16.8359L14.9844 13.6563C16.0113 12.3456 16.5672 10.7275 16.5625 9.0625C16.5625 7.57914 16.1226 6.1291 15.2985 4.89573C14.4744 3.66236 13.3031 2.70106 11.9326 2.13341C10.5622 1.56575 9.05418 1.41722 7.59933 1.70661C6.14447 1.996 4.8081 2.71031 3.7592 3.7592C2.71031 4.8081 1.996 6.14447 1.70661 7.59933C1.41722 9.05418 1.56575 10.5622 2.13341 11.9326C2.70106 13.3031 3.66236 14.4744 4.89573 15.2985C6.1291 16.1226 7.57914 16.5625 9.0625 16.5625C10.7275 16.5672 12.3456 16.0113 13.6563 14.9844L16.8359 18.1641C17.0129 18.3387 17.2514 18.4366 17.5 18.4366C17.7486 18.4366 17.9872 18.3387 18.1641 18.1641C18.2515 18.077 18.3208 17.9735 18.3681 17.8595C18.4154 17.7456 18.4398 17.6234 18.4398 17.5C18.4398 17.3766 18.4154 17.2544 18.3681 17.1405C18.3208 17.0265 18.2515 16.923 18.1641 16.8359ZM3.4375 9.0625C3.4375 7.94998 3.7674 6.86245 4.38549 5.93742C5.00357 5.01239 5.88207 4.29142 6.90991 3.86568C7.93774 3.43994 9.06874 3.32854 10.1599 3.54559C11.251 3.76263 12.2533 4.29836 13.04 5.08503C13.8266 5.8717 14.3624 6.87398 14.5794 7.96512C14.7965 9.05626 14.6851 10.1873 14.2593 11.2151C13.8336 12.2429 13.1126 13.1214 12.1876 13.7395C11.2626 14.3576 10.175 14.6875 9.0625 14.6875C7.5713 14.6854 6.14175 14.0921 5.08731 13.0377C4.03287 11.9833 3.43957 10.5537 3.4375 9.0625Z" />
                            </svg>
                        </span>
                    </button>
                </form>
                <div
                    style={searchingPage ? { display: 'grid' } : { display: 'none' }}
                    className="list">
                    {
                        searchMovieData ? searchMovieData.length > 0 ? searchMovieData.map((item, index) => {
                            console.log(item);
                            return <div className="item">
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
                                <h4>{item.title}</h4>
                                <p>{item.release_date}</p>
                            </div>
                        }) : 'no results' : null
                    }
                </div>
            </div>
            <div
                style={!searchingPage ? { display: 'block' } : { display: 'none' }}
                className="List">

            </div>
        </div>
    )
}

export default Explore