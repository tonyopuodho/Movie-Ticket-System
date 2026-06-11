import React from 'react'
import { assets } from '../assets/assets.js'
import { ArrowRight, Calendar, Timer } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Herosection() {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16
    lg:px-36 bg-[url("src/assets/backgroundImage.png")] bg-cover bg-center h-screen'>
        <img src={assets.marvelLogo} alt="" className='max-h-11 lg:h-11 mt-20'/>
        <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110'>
            Guardians <br />
            of the Galaxy
        </h1>
        <div className='flex items-center gap-4'>
            <span className='text-gray-200 flex gap-1'>
                Action | Adventure | Sci-Fi 
                <Calendar className='h-4.5'/> 2018 <Timer className='w-4.5'/> 2h 18min
            </span>
        </div>
        <div>
            <p className='max-w-md'>In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.</p>
           <button onClick={() => navigate("/movies")} className='flex gap-2 items-center py-2 px-6 rounded-full transition font-medium mt-3 bg-primary hover:bg-primary-dull'>
            Explore movies <ArrowRight/>
           </button>
        </div>
    </div>
  )
}

export default Herosection