import React from 'react'
import { About, Approach, Contact, Footer, Hero, Portofolio, Ratings, Start, Stats } from '../Layout/Index'

const Home = () => {
  return (
    <div className='bg-default flex flex-col'>
        <Hero  />
        <Stats/>
        <About/>
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