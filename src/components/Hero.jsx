import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import lion from '../assets/images/lion.png'

function Hero() {
    return (
        <div className='bg-zinc-900 text-white h-screen w-full pt-10'>
            <div className='justify-between flex'>
                <div className='textstructure mt-[18vh] px-[5vh] gap-5 w-full'>
                    {["Where every", "roar", "tells a story"].map((item, index) => {
                        return <div key={index} className="masker flex items-center">
                            {index == 1 && (<div className='bg-red-400 w-[8vw] h-[4vw] rounded-sm mr-4'></div>)}
                            <h1 className='uppercase text-[6vw] tracking-tighter leading-[6vw] font-["Segoe_Print"]'>{item}</h1>
                        </div>
                    })}
                </div>
                <div className='w-full bg-center bg-cover -mt-10 pt-10' style={{ backgroundImage: `url(${lion})` }}></div>
            </div>
            <div className='mt-20 border-t-zinc-800 border-t-[2px] flex justify-between px-10 py-2 gap-5'>
                {["A day full of furry friends and fun.", "Wildly wonderful moments await."].map((item, index) => {
                    return <p className='font-light text-base leading-none tracking-tight'>{item}</p>
                })}
                <div className='flex gap-4 items-center rounded-full px-4 py-2 border-[2px] border-zinc-800'>Discover<FaArrowRightLong className='rotate-[45deg]' /></div>
            </div>
        </div>
    )
}

export default Hero