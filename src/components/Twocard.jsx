import {React , useState} from 'react'
import animal from '../assets/images/animal.jpg'
import bird from '../assets/images/bird.jpeg'
import {motion} from 'framer-motion'

function Twocard() {
    const [animals , setanimals] = useState(false);
    const [birds , setbirds] = useState(false);
    return (
        <div className='w-full py-10 px-8 bg-zinc-900'>
            <div className='border-t-[1px] border-t-zinc-600 p-10'></div>
            <div className='text-7xl font-mono text-white tracking-tighter'>
                Categories of our Zoopie the Zoo
            </div>
            <div className='flex gap-20 m-10 relative items-center justify-center'>
                <div onMouseEnter={()=>setanimals(true)} onMouseLeave={()=>setanimals(false)} className='w-full rounded-md h-[60vh] bg-zinc-200 items-center justify-center flex  shadow-black shadow-lg'>
                    <div className='w-4/5 h-4/5 rounded-lg overflow-hidden shadow-zinc-600 shadow-lg'>
                        <img src={animal} className='bg-cover w-full h-full'></img>
                    </div>
                </div>
                {animals && <div className='flex overflow-hidden absolute text-bold font-["Britannic_Bold"] tracking-tighter leading-none text-7xl text-orange-300'>
                    {["A" , "N" , "I" , "M" , "A" , "L" , "S"].map((item , index) => (
                        <motion.span initial={{y:"100%"}} animate={{y:0}} transition={{ease:[0.22 , 1, 0.36, 1] , delay:index*.04}} key={index}>{item}</motion.span>
                    ))}
                </div>}
                <div onMouseEnter={()=>setbirds(true)} onMouseLeave={()=>setbirds(false)} className='w-full rounded-md h-[60vh] bg-purple-200 items-center justify-center flex  shadow-black shadow-lg'>
                    <div className='w-4/5 h-4/5 rounded-lg overflow-hidden  shadow-zinc-700 shadow-lg'>
                        <img src={bird} className='bg-cover w-full h-full'></img>
                    </div>
                </div>
                {birds && <div className='flex overflow-hidden absolute text-bold font-["Britannic_Bold"] tracking-tighter leading-none text-7xl text-orange-300'>
                    {"BIRDS".split("").map((item , index) => (
                        <motion.span initial={{y:"100%"}} animate={{y:0}} transition={{ease:[0.22 , 1, 0.36, 1] , delay:index*.04}} key={index}>{item}</motion.span>
                    ))}
                </div>}
            </div>
        </div>
    )
}

export default Twocard