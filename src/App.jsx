import React from 'react'
import { About, Approach, Hero, Portofolio, Ratings, Stats } from './Layout/Index'

const App = () => {
  return (
    <div className='bg-default flex flex-col'>
        <Hero  />
        <Stats/>
        <About/>
        <Approach/>
        <Ratings/>
        <Portofolio/>
    </div>
  )
}

export default App