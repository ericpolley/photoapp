import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate();
  return (
    <div className='bg-teal-700 flex flex-row justify-between w-full shadow-xl border-b-8 border-t-[2px] border-teal-500 p-1'>
      <div className='md:w-full w-[30%] flex justify-end mr-4'> <img className='w-14 p-1 cursor-pointer border rounded-full bg-teal-800 border-teal-200' src='https://cdn.pixabay.com/photo/2014/04/03/11/37/mouse-312012_960_720.png' alt="mouse" />
      </div> 
        <div className="w-full flex items-end justify-start text-white p-1 cursor-pointer">
            <p className='space-x-5 md:text-base  text-sm'>
            <span className='hidden md:inline-block' onClick={()=>navigate(("/"))}>Home</span>
            <span onClick={()=>navigate(("/offers"))}>Offers</span>
            <span onClick={()=>navigate(("/about"))}>About</span>
            <span onClick={()=>navigate(("/sign-in"))}>Sign In</span>
            </p>
        </div>
      
    </div>
  )
}
