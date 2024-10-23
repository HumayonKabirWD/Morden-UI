import Image from 'next/image'
import React from 'react'
import logo from '../public/assets/Logo.svg'
import {  FacebookIcon, TwitterIcon, WifiIcon } from 'lucide-react'

const Fotter = () => {
    const date= new Date().getFullYear()
  return (
    <div className='px-10 lg:px-20 lg:mx-auto mt-10 lg:mt-20 pb-10'>
        <div className="flex items-center justify-center gap-x-4">
            <Image src={logo} alt='Logo'/>
            <p className='text-xl font-bold uppercase'>Jhon Marsal</p>
        </div>
        <ul className='flex flex-col items-center justify-center gap-y-8 pt-10 text-[#36385c] sm:flex-row sm:justify-center sm:gap-x-8 font-medium '>
            <li>Featere</li>
            <li>Pricing</li>
            <li>Enterprice</li>
            <li>Careare</li>
        </ul>
        <p className='text-center font-medium text-sm pt-10 lg:pt-20'>&copy;Copywrite {date} JHON MARSAL</p>
        <div className="flex items-center justify-center gap-8 mt-5">
            <FacebookIcon/>
            <WifiIcon className='rotate-45'/>
            <TwitterIcon/>
        </div>
    </div>
  )
}

export default Fotter