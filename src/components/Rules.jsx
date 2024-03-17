import React from 'react'
import rules from '../assets/images/rules.jpeg'

function Rules() {
    return (
        <div className='w-full p-[10vh] bg-orange-300 rounded-tl-2xl rounded-tr-2xl'>
            <h1 className='text-[7vh] leading-none tracking-tighter'>
                Experience the rare and extraordinary at our zoo, where every visit promises unparalleled encounters with nature's most captivating wonders.
            </h1>
            <div className='w-full border-t-[1px] border-t-orange-500 mt-[3vh] flex justify-between'>
                    <div className='text-[5vh] font-bold text-red-500'>Rules</div>
                    <ul className='p-[3vh] font-["Arial"]'>
                        {["Respect the animals: Observe from a safe distance and refrain from tapping on glass or making loud noises.",
                            "No feeding: Do not feed the animals unless authorized by zoo staff.",
                            "Stay on designated paths: Keep to marked trails and paths to avoid disturbing habitats and ensure safety.",
                            "Dispose of trash responsibly: Use designated bins for waste disposal to keep the zoo clean and protect the environment.",
                            "No littering: Help maintain a clean and hygienic environment by properly disposing of all waste.",
                            "No smoking: Smoking is prohibited in all areas of the zoo to ensure the comfort and safety of all visitors."].map((item, index) => (
                                <li key={index} className='text-[3vh] leading-none p-2 flex items-center'><div className='w-2 h-2 rounded-full bg-red-500 m-2'></div>{item}</li>
                            ))}
                    </ul>
                </div>
            </div>
    )
}

export default Rules