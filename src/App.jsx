import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Move from './components/Move'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900'>
      <Navbar />
      <Hero />
      <Move />
    </div>
  )
}

export default App