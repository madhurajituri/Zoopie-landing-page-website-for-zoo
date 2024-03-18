import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import lion from '../assets/images/lion.png'
import zoo from '../assets/images/zoo.png'
import { motion } from 'framer-motion'

function Hero() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.2" className='bg-zinc-900 text-white h-screen w-full pt-10'>
            <div className='justify-between flex'>
                <div className='textstructure mt-[18vh] px-[5vh] gap-5 w-full'>
                    {["Where every", "roar", "tells a story"].map((item, index) => {
                        return <div key={index} className="masker flex items-center">
                            {index == 1 && (<motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.5, 1, 0.89, 1] , duration:1}} className='w-[8vw] h-[5vw] rounded-sm mr-4 bg-cover bg-center' style={{backgroundImage : `url(${zoo})`}}></motion.div>)}
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