import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
const Home = () => {
    const [input, setInuput]=useState('')
    const navigate=useNavigate()
    const handleSearch= ()=>{
         navigate(`/profile/${input}`)

    }
    const handleInput=(e)=>{
        setInuput(e.target.value)
        console.log(input)
    }
  return (
    <div class="overflow-hidden h-full">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
    
          <div class="text-center">
            <p class="text-xs font-bold text-gray-900 tracking-wide uppercase mb-3">
              Aquera
            </p>
            <h1 class="text-3xl text-gray-900 font-semibold sm:text-5xl lg:text-6xl lg:leading-tight">
              Enter your github ID and <span class="text-blue-500">View it's details</span>
            </h1>
          </div>

          <div class="sm:flex sm:justify-center sm:items-center text-center sm:text-start">
    
            <div class="pt-5 sm:pt-0 sm:ps-5">
              <div class="text-lg font-light text-gray-800">Trust Github</div>
             
            </div>
          </div>
 
          <form>
            <div class="mx-auto max-w-2xl sm:flex sm:space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
              <div class="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
                <label for="hs-hero-name-1" class="block text-sm font-medium dark:text-white"><span class="sr-only">Your name</span></label>
                <input onChange={(e)=>handleInput(e)} type="text" id="hs-hero-name-1" class="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Github id"/>
              </div>
              <div class="pt-2 sm:pt-0 grid sm:block sm:flex-[0_0_auto]" onClick={handleSearch}>
                <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                  Search
                </a>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  
  )
}

export default Home