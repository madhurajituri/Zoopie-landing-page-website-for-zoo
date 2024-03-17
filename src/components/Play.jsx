import React, { useEffect, useState } from 'react'
import leopard from '../assets/images/leopard.jpg'

function Play() {
    const [rotate, setrotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", e => {
            const x = e.clientX;
            const y = e.clientY;
            const diffx = x - window.innerWidth / 2;
            const diffy = y - window.innerHeight / 2;
            let angle = Math.atan2(diffy, diffx) * (180 / Math.PI);
            setrotate(angle);
        })
    })

    return (
        <div className='p-[20vh] w-full h-screen bg-zinc-900'>
            <div className='w-full h-full bg-cover bg-center rounded-3xl relative' style={{ backgroundImage: `url(${leopard})` }}>
                <div className='flex gap-5 absolute bg-transparent top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className="bg-white flex items-center justify-center rounded-full w-[20vh] h-[20vh]">
                        <div className='w-2/3 bg-black rounded-full h-2/3 flex items-center justify-center'>
                            <div className='line w-full h-6 flex flex-row-reverse' style={{ transform: `rotate(${rotate}deg)` }}>
                                <div className='w-6 h-6 bg-white rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white flex items-center justify-center rounded-full w-[20vh] h-[20vh]">
                        <div className='w-2/3 bg-black rounded-full h-2/3 flex items-center justify-center'>
                            <div className='line w-full h-6 flex flex-row-reverse' style={{ transform: `rotate(${rotate}deg)` }}>
                                <div className='w-6 h-6 bg-white rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-[8vh] text-white text-center font-["Britannic_Bold"] font-bold'>I can see you!</div>
        </div>
    )
}

export default Play