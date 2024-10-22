import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import bluebutn from '../public/assets/blue-button.svg'

const Featertext = (
    {
        img,
        text,
        li1,
        li2,
        li3,
        h1
    }:{
        img:string,
        text:string,
        li1:string,
        li2:string,
        li3:string,
        h1:string
    }) => {
  return (
    <div className='mt-10 '>
        <h3 className='font-medium text-lg text-[#0085ff]'>Seeing Monitoring</h3>
        <h1 className='mt-3 text-3xl font-medium mb-6'>{h1}</h1>
        <Image src={img} alt='Featers'/>
    <p className='py-5 text-lg'>{text}</p>

    <div className="flex flex-col gap-3 font-semibold text-[#09021c]">

        <div className='flex items-center gap-2'>
            <Check/>
            <p>{li1}</p>
        </div>
        <div className='flex items-center gap-2'>
            <Check/>
            <p>{li2}</p>
        </div>
        <div className='flex items-center gap-2'>
            <Check/>
            <p>{li3}</p>
        </div>
    </div>
        <button className='flex gap-2 text-xl font-medium mt-5 text-[#0085FF] '>
            Learn More 
            <span>
                <Image src={bluebutn}alt='blue button'/>
            </span>
        </button>
    </div>
  )
}

export default Featertext