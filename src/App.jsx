import React from 'react'
import { Hero, Stats } from './Layout/Index'

const App = () => {
  return (
    <div className='bg-default h-screen flex flex-col'>
        <Hero  />
        <Stats/>
    </div>
  )
}

export default App