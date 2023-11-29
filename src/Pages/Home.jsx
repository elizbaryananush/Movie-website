import React from 'react'
import homecss from '../css/Home.scss'
import Hero from '../Components/Home/Hero'
import List from '../Components/Home/List'

function Home() {
  return (
    <div className='Home'>
        <Hero />
        <List />
    </div>
  )
}

export default Home