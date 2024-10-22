import Image from 'next/image'
import React from 'react'
import icon from '../public/assets/blue-button.svg'
import gradient from '../public/assets/Gradient.svg'
import hero from '../public/assets/Image.svg'
import google from '../public/assets/Google.svg'
import slak from '../public/assets/Slack.svg'
import trust from '../public/assets/Trustpilot.svg'
import cnn from '../public/assets/CNN.svg'
import clutch from '../public/assets/Clutch.svg'
import bg from '../public/assets/bg.png'

const Hero = () => {
  return (
    <div className='lg:container lg:mx-auto'>

      <div className="py-10 lg:py-16 ">
        <h1 className='text-4xl px-10 lg:px-40 md:text-6xl lg:text-7xl text-center font-medium leading-[40px] text-[#434a78]'>Start Monitoring Your Website like A Pro</h1>
        <p className='mt-10 text-center font-medium text-xl px-10 lg:px-32'>Get a Bird iey for loking for your website with your coustomigable dashbord, Stay of top of thigs, Revamp your work prosses with our game cenging featere</p>
      </div>

      <div className="flex w-full font-bold justify-center gap-8">
        <button type='button' className='bg-[#1b64f5] text-white py-4 px-5 rounded-[5px]'>Try For Free</button>
        <button type='button' className='px-5 text-[#1b64f5] flex items-center gap-3'>View Pricing <span ><Image src={icon} alt='icon'/></span></button>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <Image src={gradient} alt='Gradient' className='min-h-[500px] lg:min-h-[850px] object-cover'/>
      </div>
      <div className="absolute flex flex-col items-center">
        <Image src={hero} alt='Hero' className='-mt-[400px] -ml-10 lg:-mt-[805px] lg:-ml-20'/>
      </div>
      <div className="flex flex-col items-center object-cover relative">
        <Image src={bg} alt='bacground' className='h-40'/>
          <p className='font-semibold text-lg absolute text-white py-2'>Trusted by these Company</p>
          <div className="grid grid-cols-3 lg:grid-cols-5 items-center justify-center justify-items-center absolute pt-10 lg:pt-20">
            <Image src={google} alt='com'/>
            <Image src={slak} alt='slak'/>
            <Image src={trust} alt='com'/>
            <Image src={cnn} alt='com'/>
            <Image src={clutch} alt='com'/>
          </div>
        </div>
    </div>
  )
}

export default Hero