import React from 'react'
import {AboutPT, Approach, Contact, Footer, Hero, Portofolio, Ratings, Start, Stats } from '../Layout/Index'
import { Navbar } from '../Components/Index'

const Home = () => {
  
  return (
    <div className='bg-default flex flex-col pb-5'>
      <Navbar/>
        <Hero  />
        <Stats/>
        <AboutPT/>
        <Approach/>
        <Ratings/>
        <Portofolio/>
        <Start/>
        <Contact/>
        <Footer/>
    </div>
)
}

export default Home