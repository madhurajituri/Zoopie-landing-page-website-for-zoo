import React from 'react'
import {motion} from 'framer-motion'

function Move() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".2">
            <div className='text bg-emerald-800 w-full py-[5vh] rounded-tl-lg rounded-tr-lg'>
                <div className='border-t-[2px] border-b-[2px] border-t-zinc-400 border-b-zinc-400 overflow-hidden whitespace-nowrap flex'>
                    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , duration:8 , repeat:Infinity}} className='pl-40 pr-20 uppercase text-zinc-200 font-["Calibri"] text-[12vw] tracking-tight leading-none font-bold'>Zebro - We are waiting for you!</motion.h1>
                    <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , duration:8 , repeat:Infinity}} className='font-bold uppercase text-zinc-200 font-["Calibri"] text-[12vw] tracking-tight leading-none'>Zebro - We are waiting for you!</motion.h1>
                </div>
            </div>
        </div>
    )
}

export default Move