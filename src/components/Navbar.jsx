import React from 'react'
import Logo from '../assets/images/logo.jpeg'

function Navbar() {
  return (
    <div className='z-100 fixed w-full px-10 items-center py-2 bg-black/80 text-white flex justify-between gap-5'>
        <a><img src={Logo} className='w-[100px] rounded-md links'></img></a>
        <div className='links flex gap-10'>
            {['Categories of Zoo' , 'Play Area' , 'Reviews' , 'Timings'].map((item , index) => (
                <a key={index} className={`text-lg ${index===3 && "ml-32"}`}>{item}</a>
            ))}
        </div>
    </div>
  )
}

export default Navbar