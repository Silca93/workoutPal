import React from 'react'
import { Link } from 'react-router-dom'
import { GiWeightLiftingUp } from "react-icons/gi";


export default function Navbar() {
  return (
    <div className='bg-green-600 pl-[10rem] w-full h-[10%]'>
        <header className='w-full h-full'>
            <div className="container w-[30%]  gap-3 h-full flex justify-center items-center">
              <div className="bubble w-[3rem] h-[3rem] bg-white rounded-full flex justify-center items-center">
                <GiWeightLiftingUp className='text-3xl'/>
              </div>
                <Link to="/">
                    <h1 className='font-bold text-3xl text-white'>Workout Pal</h1>
                </Link>
              </div>
        </header>
    </div>
  )
}
