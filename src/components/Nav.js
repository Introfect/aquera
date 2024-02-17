import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Nav = () => {
    const [input, setInuput]=useState('')
    const navigate=useNavigate()
    const handleSearch= ()=>{
         navigate(`/profile/${input}`)

    }
    const handleInput=(e)=>{
        setInuput(e.target.value)
  
    }
  return (
    <div className='sticky top-0 bg-slate-900'>
         <nav className="flex items-center justify-evenly h-16 px-4 w-full">
      <div className="hidden md:block">
        <a href="/" className=" text-white text-lg font-bold">
        Aquera
        </a>
      </div>
      <div className="items-center gap-4 flex ">
        <div className="w-[300px] flex items-center rounded-lg bg-black p-2">
         
          <input
          onChange={(e)=>handleInput(e)}
            className="w-full h-8 bg-transparent border-0 placeholder-white-50 text-white font-light appearance-none"
            placeholder="Github ID"
            type="text"
          />
        </div>
        <div class="pt-2 sm:pt-0 grid sm:block sm:flex-[0_0_auto]" onClick={handleSearch}>
                <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-black hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                  Search
                </a>
              </div>
      </div>
    </nav>
    </div>
  )
}

export default Nav
