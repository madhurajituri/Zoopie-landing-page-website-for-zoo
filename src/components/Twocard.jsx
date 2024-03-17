import React from 'react'
import animal from '../assets/images/animal.jpg'
import bird from '../assets/images/bird.jpeg'

function Twocard() {
    return (
        <div className='w-full py-10 px-8 bg-zinc-900'>
            <div className='border-t-[1px] border-t-zinc-600 p-10'></div>
            <div className='text-7xl font-mono text-white tracking-tighter'>
                Categories of our Zoopie the Zoo
            </div>
            <div className='flex gap-20 m-10 relative items-center justify-center'>
                <div className='w-full rounded-md h-[60vh] bg-zinc-200 items-center justify-center flex  shadow-black shadow-lg'>
                    <div className='w-4/5 h-4/5 rounded-lg overflow-hidden shadow-zinc-600 shadow-lg'>
                        <img src={animal} className='bg-cover w-full h-full'></img>
                    </div>
                </div>
                <div className='absolute text-bold font-["Britannic_Bold"] tracking-tight leading-none text-7xl text-purple-900 '>Animals</div>
                <div className='w-full rounded-md h-[60vh] bg-purple-200 items-center justify-center flex  shadow-black shadow-lg'>
                    <div className='w-4/5 h-4/5 rounded-lg overflow-hidden  shadow-zinc-700 shadow-lg'>
                        <img src={bird} className='bg-cover w-full h-full'></img>
                    </div>
                </div>
                <div className='absolute text-bold font-["Britannic_Bold"] tracking-tight leading-none text-7xl text-purple-900 '>Birds</div>

            </div>
        </div>
    )
}

export default Twocard