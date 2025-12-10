import React from 'react'
import { About, Approach, Hero, Portofolio, Ratings, Start, Stats } from './Layout/Index'

const App = () => {
  return (
    <div className='bg-default flex flex-col'>
        <Hero  />
        <Stats/>
        <About/>
        <Approach/>
        <Ratings/>
        <Portofolio/>
        <Start/>
    </div>
  )
}

export default App