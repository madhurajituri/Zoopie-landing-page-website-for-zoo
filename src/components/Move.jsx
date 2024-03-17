import React from 'react'
import {motion} from 'framer-motion'

function Move() {
    return (
        <div>
            <div className='text bg-emerald-600 w-full py-10 rounded-lg'>
                <div className='border-t-[2px] border-b-[2px] border-t-zinc-400 border-b-zinc-400 overflow-hidden whitespace-nowrap'>
                    <h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:"Infinity" ,duration:5}} className='uppercase text-zinc-200 font-["Calibri"] font-semibold text-[10vw] tracking-tight leading-none'>Zebro - Haven't come to visit us yet? We are waiting for you!</h1>
                </div>
            </div>
        </div>
    )
}

export default Move