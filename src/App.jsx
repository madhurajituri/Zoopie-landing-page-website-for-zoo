import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Move from './components/Move'
import Rules from './components/Rules'
import Play from './components/Play'
import Twocard from './components/Twocard'
import Cards from './components/Cards'

const App = () => {
  return (
    <div className='w-full bg-zinc-900'>
      <Navbar />
      <Hero />
      <Move />
      <Rules />
      <Play />
      <Twocard />
      <Cards />
    </div>
  )
}

export default App