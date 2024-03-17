import React from 'react'
import logo from '../assets/images/logo.jpeg'

function Footer() {
    const timing = [
        {
            "day" : "Monday",
            "time" : "9 am - 5 pm"
        },
        {
            "day" : "Tuesday",
            "time" : "Off"
        },
        {
            "day" : "Wednesday",
            "time" : "9 am - 5 pm"
        },
        {
            "day" : "Thursday",
            "time" : "9 am - 5 pm"
        },
        {
            "day" : "Friday",
            "time" : "9 am - 5 pm"
        },
        {
            "day" : "Saturday",
            "time" : "9 am - 5 pm"
        },
        {
            "day" : "Sunday",
            "time" : "9 am - 5 pm"
        },
    ]
  return (
    <div className='w-full bg-zinc-800 p-20 px-40 text-white'>
        <div className='flex justify-between'>
            <div className="flex flex-col gap-5 items-center">
                <img src={logo} className='rounded-xl shadow-lg shadow-black'></img>
                <div className='text-6xl font-["Bauhaus_93_Regular"]'>Zoooopie!</div>
                <div>Copyright @2024 . Created by Madhura Jituri. All right reserved.</div>
                <div>Contact us at : 9999999999</div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-3xl font-semibold my-2 text-center'>Timings of Zoopie : </div>
                {timing.map((item , index) => (
                    <div key={index}>{item.day} : {item.time}</div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Footer