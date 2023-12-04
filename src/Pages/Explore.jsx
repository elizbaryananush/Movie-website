import React, { useState } from 'react'
import css from '../css/Explore.scss'
import Bottom from '../Components/Explore/Bottom'
import image1 from '../assets/bladeRunner.jpg'
import image2 from '../assets/Spider-Man_ Across the Spider-Verse (2023).jpg'
import image3 from '../assets/媽的多重宇宙 (EVERYTHING EVERYWHERE ALL AT ONCE).jpg'
import image4 from '../assets/The Amazing Spiderman  Movie Review.jpg'
import image5 from '../assets/download (20).jpg'

function Explore2() {
  const [search, setSearch] = useState()
  const [name, setName] = useState()
  const [searchingPage, setSearchingPage] = useState(false)
  const [searchMovieData, setSearchMovieData] = useState()
  const [pages, setPages] = useState()
  const [number, setNumber] = useState(1)

  const getSearchingMovie = async (e, page, urlname) => {
    if (e) {
      e.preventDefault()
    }
    setSearchingPage(true)

    if (urlname) {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${urlname}&include_adult=false&language=en-US&page=${page}`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2YwYTgwNjRmNjkwODExMWFjMWE2YjY2ODhiZjdmZiIsInN1YiI6IjY0NWE0ZjVhZmUwNzdhNWNhYzZjNmU3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z4wbXymQA6bJVAVf6gB93Yb6Lw7k2cOoEtL6u_FKJdA'
        }
      })
      const data = await response.json();
      setSearchMovieData(data)
      setPages(new Array(data.total_pages).fill(0).map((_, index) => index + 1))
    }
  }

  return (
    <div className='Explore'>
      <div className="five">
        <img
          onClick={() => {
            window.location.href = `/335984`
          }}
          src={image1} />
        <img
        onClick={() => {
          window.location.href = `/569094`
        }}
         src={image2} />
        <img
        onClick={() => {
          window.location.href = `/545611`
        }}
        src={image3} />
        <img
        onClick={() => {
          window.location.href = `/1930`
        }} 
        src={image4} />
        <img 
        onClick={() => {
          window.location.href = `/19995`
        }}
        src={image5} />
      </div>
      <div className="top">
        <h1 style={searchingPage ? { display: 'none' } : { display: 'block' }}>Recomendations</h1>
        <div className="heading">
          <form onSubmit={(e) => {
            getSearchingMovie(e, 1, search)
            if (search != '') {
              setNumber(1)
              setName(search)
            }
            setSearchingPage(true)
          }} action="submit">
            <input
              placeholder='Search...'
              type="text"
              // value={search}
              onChange={(e) => {
                setSearch(e.target.value)
              }} />
            <div className="right">
              <button type='submit'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18.1641 16.8359L14.9844 13.6563C16.0113 12.3456 16.5672 10.7275 16.5625 9.0625C16.5625 7.57914 16.1226 6.1291 15.2985 4.89573C14.4744 3.66236 13.3031 2.70106 11.9326 2.13341C10.5622 1.56575 9.05418 1.41722 7.59933 1.70661C6.14447 1.996 4.8081 2.71031 3.7592 3.7592C2.71031 4.8081 1.996 6.14447 1.70661 7.59933C1.41722 9.05418 1.56575 10.5622 2.13341 11.9326C2.70106 13.3031 3.66236 14.4744 4.89573 15.2985C6.1291 16.1226 7.57914 16.5625 9.0625 16.5625C10.7275 16.5672 12.3456 16.0113 13.6563 14.9844L16.8359 18.1641C17.0129 18.3387 17.2514 18.4366 17.5 18.4366C17.7486 18.4366 17.9872 18.3387 18.1641 18.1641C18.2515 18.077 18.3208 17.9735 18.3681 17.8595C18.4154 17.7456 18.4398 17.6234 18.4398 17.5C18.4398 17.3766 18.4154 17.2544 18.3681 17.1405C18.3208 17.0265 18.2515 16.923 18.1641 16.8359ZM3.4375 9.0625C3.4375 7.94998 3.7674 6.86245 4.38549 5.93742C5.00357 5.01239 5.88207 4.29142 6.90991 3.86568C7.93774 3.43994 9.06874 3.32854 10.1599 3.54559C11.251 3.76263 12.2533 4.29836 13.04 5.08503C13.8266 5.8717 14.3624 6.87398 14.5794 7.96512C14.7965 9.05626 14.6851 10.1873 14.2593 11.2151C13.8336 12.2429 13.1126 13.1214 12.1876 13.7395C11.2626 14.3576 10.175 14.6875 9.0625 14.6875C7.5713 14.6854 6.14175 14.0921 5.08731 13.0377C4.03287 11.9833 3.43957 10.5537 3.4375 9.0625Z" />
                  </svg>
                </span>
              </button>

              <div
                style={!searchingPage ? { display: 'none' } : { display: 'flex' }}
                onClick={() => setSearchingPage(false)} className="cross">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M16,8a1,1,0,0,0-1.414,0L12,10.586,9.414,8A1,1,0,0,0,8,9.414L10.586,12,8,14.586A1,1,0,0,0,9.414,16L12,13.414,14.586,16A1,1,0,0,0,16,14.586L13.414,12,16,9.414A1,1,0,0,0,16,8Z" /><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" /></svg>
                </span>
              </div>
            </div>

          </form>
          <div
            style={searchingPage ? { display: 'grid' } : { display: 'none' }}
            className="list">
            {
              searchMovieData && searchMovieData.results ? searchMovieData.results.length > 0 ? searchMovieData.results.map((item, index) => {
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
              }) : 'no results' : null
            }
          </div>
          <div style={searchingPage ? { display: 'flex' } : { display: 'none' }} className="pagesButtons">
            <div
              onClick={(e) => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
                getSearchingMovie(e, 1, name)
                setNumber(1)
              }}
              style={searchMovieData && searchMovieData.results && searchMovieData.total_pages > 1 ? { display: 'flex' } : { display: 'none' }}
              className="btn">
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M10.48,19a1,1,0,0,1-.7-.29L5.19,14.12a3,3,0,0,1,0-4.24L9.78,5.29a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.42L6.6,11.29a1,1,0,0,0,0,1.42l4.59,4.58a1,1,0,0,1,0,1.42A1,1,0,0,1,10.48,19Z" /><path d="M17.48,19a1,1,0,0,1-.7-.29l-6-6a1,1,0,0,1,0-1.42l6-6a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.42L12.9,12l5.29,5.29a1,1,0,0,1,0,1.42A1,1,0,0,1,17.48,19Z" /></svg>
            </div>
            {
              searchMovieData && searchMovieData.total_pages && pages.length > 1 ? pages.map((item, index) => {
                if (pages[index] === number && searchMovieData.page < searchMovieData.total_pages) {
                  return <button
                    className={pages[index] === searchMovieData.page ? 'btn first active2' : 'btn'}
                    onClick={(e) => {
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                      if (pages[index] == 1) {
                        setNumber(1)
                        getSearchingMovie(e, pages[index], name)
                      } else if (pages[index] !== 1) {
                        setNumber(pages[index] - 1)
                        getSearchingMovie(e, pages[index], name)
                      }
                    }}
                  >{pages[index]}</button>
                } else if (pages[index] === number + 1 && searchMovieData.page + 1 < searchMovieData.total_pages) {
                  return <button
                    className={pages[index] === searchMovieData.page ? 'btn active2' : 'btn'}
                    onClick={(e) => {
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                      if (pages[index] == 1) {
                        setNumber(1)
                        getSearchingMovie(e, pages[index], name)
                      } else if (pages[index] !== 1) {
                        setNumber(pages[index] - 1)
                        getSearchingMovie(e, pages[index], name)
                      }
                    }}
                  >{pages[index]}</button>
                } else if (pages[index] === number + 2 && searchMovieData.page + 2 < searchMovieData.total_pages) {
                  return <button
                    className={pages[index] === searchMovieData.page ? 'btn active2' : 'btn'}
                    onClick={(e) => {
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                      if (pages[index] == 1) {
                        setNumber(1)
                        getSearchingMovie(e, pages[index], name)
                      } else if (pages[index] !== 1) {
                        setNumber(pages[index] - 1)
                        getSearchingMovie(e, pages[index], name)
                      }
                    }}
                  >{pages[index]}</button>
                }
              }) : null
            }
            <button style={searchMovieData && pages && searchMovieData.page + 2 < searchMovieData.total_pages && searchMovieData.total_pages > 5 ? null : { display: 'none' }} className='btn btn_dot'>...</button>
            {
              searchMovieData && searchMovieData.total_pages && pages.length >= 5 ? pages.map((item, index) => {
                if (pages[index] === pages.length) {
                  return <button
                    className={pages[index] === searchMovieData.page ? 'btn active2' : 'btn'}
                    onClick={(e) => {
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                      if (pages[index] == 1) {
                        setNumber(1)
                        getSearchingMovie(e, pages[index], name)
                      } else if (pages[index] !== 1) {
                        setNumber(pages[index] - 1)
                        getSearchingMovie(e, pages[index], name)
                      }
                    }}
                  >{pages[index]}</button>
                } else if (pages[index] === pages.length - 1) {
                  return <button
                    className={pages[index] === searchMovieData.page ? 'btn active2' : 'btn'}
                    onClick={(e) => {
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                      if (pages[index] == 1) {
                        setNumber(1)
                        getSearchingMovie(e, pages[index], name)
                      } else if (pages[index] !== 1) {
                        setNumber(pages[index] - 1)
                        getSearchingMovie(e, pages[index], name)
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
                getSearchingMovie(e, searchMovieData.total_pages)
                setNumber(searchMovieData.total_pages)
              }}
              style={searchMovieData && searchMovieData.results && searchMovieData.total_pages > 1 ? { display: 'flex' } : { display: 'none' }}
              className="btn">
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M13.1,19a1,1,0,0,1-.7-1.71L17,12.71a1,1,0,0,0,0-1.42L12.4,6.71a1,1,0,0,1,0-1.42,1,1,0,0,1,1.41,0L18.4,9.88a3,3,0,0,1,0,4.24l-4.59,4.59A1,1,0,0,1,13.1,19Z" /><path d="M6.1,19a1,1,0,0,1-.7-1.71L10.69,12,5.4,6.71a1,1,0,0,1,0-1.42,1,1,0,0,1,1.41,0l6,6a1,1,0,0,1,0,1.42l-6,6A1,1,0,0,1,6.1,19Z" /></svg>
            </div>
          </div>
        </div>
      </div>
      <div style={searchingPage ? { display: 'none' } : { display: 'block' }} className="line"></div>
      <Bottom style={searchingPage} />
    </div>
  )
}

export default Explore2