import React from 'react'
import { About, Hero, Stats } from './Layout/Index'

const App = () => {
  return (
    <div className='bg-default flex flex-col'>
        <Hero  />
        <Stats/>
        <About/>
    </div>
  )
}

export default App