import React from 'react'
import { About, Approach, Hero, Stats } from './Layout/Index'

const App = () => {
  return (
    <div className='bg-default flex flex-col'>
        <Hero  />
        <Stats/>
        <About/>
        <Approach/>
    </div>
  )
}

export default App