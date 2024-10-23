import Image from 'next/image'
import React from 'react'
import arrow from '../public/assets/arrow.png'

const CtA = () => {
  return (
    <div className='w-full mt-7 lg:mt-10 bg-gradient-to-tr from-violet-500 via-pink-500 to-yellow-500 py-5 px-6 rounded-[18px]'>
        <p className='mt-4 lg:mt-8 text-center text-2xl lg:text-4xl font-medium text-white lg:px-[340px]'>Monitor your website like a pro</p>
        <p className='py-10 text-center text-white'>Join over 800+ website owener for boosting your productivity and Aficiencey</p>
        <div className="flex flex-col lg:flex-row lg:gap-8 items-center justify-center  gap-y-5">
            <button className='py-3 px-5 bg-white flex items-center justify-center font-semibold rounded-[4px] text-[#B3658C] lg:text-lg'>Try For Free</button>
            <button className='flex text-white font-medium'>Contact Salce <span className='ml-2'><Image src={arrow} alt='Lern more'/></span></button>
        </div>
    </div>
  )
}

export default CtA