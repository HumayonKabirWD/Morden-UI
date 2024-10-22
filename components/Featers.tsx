import React from 'react'
import feater1 from '../public/assets/feature-1.svg'
import feater2 from '../public/assets/feature-2.svg'
import feater3 from '../public/assets/feature-3.svg'
import bluebutn from '../public/assets/blue-button.svg'
import greebutn from '../public/assets/green-button.svg'
import pink from '../public/assets/pink-button.svg'
import Featertext from './Featertext'
import Image from 'next/image'
import { Check } from 'lucide-react'


const Featers = () => {
  return (
    <div className='flex flex-col gap-y-8 py-20'>
        <div className="flex flex-col">
            <div >
                <div className="hidden  lg:flex mt-10">
                    <Image src={feater1} alt='feater'/>
                    <div className="mx-20">
                    <h3 className='font-medium text-lg text-[#0085ff]'>Seeing Monitoring</h3>
                    <h1 className='mt-3 text-3xl font-medium mb-6'>Simplify your selce Monitoring</h1>
                    <p className='px-10 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic totam expedita nesciunt asperiores repellendus magnam delectus fugit laborum voluptatem suscipit, officia tenetur dolor modi dicta quas praesentium iste ex!</p>
                      <ul className='px-16 py-10 space-y-5 font-medium'>
                        <li className='flex gap-2'><Check/><p>Confirm optimizetion</p></li>
                        <li className='flex gap-2'><Check/><p>Anathere legality of this</p></li>
                        <li className='flex gap-2'><Check/><p>Non stable for abala</p></li>
                        <button className='flex gap-2 text-xl font-medium text-[#0085FF]'>Learn More <span><Image src={bluebutn}alt='blue button'/></span></button>
                      </ul>
                      
                    </div>
                </div>

                <div className="hidden  lg:flex mt-10">
                    <div className="mx-20">
                    <h3 className='font-medium text-lg text-[#9AFC81]'>customer support</h3>
                    <h1 className='mt-3 text-3xl font-medium mb-6'>Get in Tuch in your customars</h1>
                       <p className='px-10 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic totam expedita nesciunt asperiores repellendus magnam delectus fugit laborum voluptatem suscipit, officia tenetur dolor modi dicta quas praesentium iste ex!</p>
                      <ul className='px-16 py-10 space-y-5 font-medium'>
                        <li className='flex gap-2'><Check/><p>Top seling report</p></li>
                        <li className='flex gap-2'><Check/><p>Every day optimaijetion</p></li>
                        <li className='flex gap-2'><Check/><p>Giveing summery per houre</p></li>
                        <button className='flex gap-2 text-xl font-medium text-[#9AFC81]'>Learn More <span><Image src={greebutn}alt='blue button'/></span></button>
                      </ul>
                    </div>
                    <Image src={feater2} alt='feater'/>
                </div>

                <div className="hidden  lg:flex mt-10">
                <Image src={feater3} alt='feater'/>
                    <div className="mx-20">
                    <h3 className='font-medium text-lg text-[#EC3799]'>Sit monitoring</h3>
                    <h1 className='mt-3 text-3xl font-medium mb-6'>Monitoring your seeting count</h1>
                       <p className='px-10 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic totam expedita nesciunt asperiores repellendus magnam delectus fugit laborum voluptatem suscipit, officia tenetur dolor modi dicta quas praesentium iste ex!</p>
                       <div className="flex items-center justify-around">
                        <div className="py-10"><p className='text-2xl font-bold'>100+</p><p className='text-sm font-medium'>Daily visited</p>
                        </div>
                        <div className=""><p className='text-2xl font-bold'>800+</p><p className='text-sm font-medium'>Weekly visited</p></div>
                       </div>
                        <button className='flex gap-2 text-xl font-medium text-[#EC3799]'>Learn More <span><Image src={pink}alt='blue button'/></span></button>
                    </div>
                </div>


            </div>
            <div className="block lg:hidden">
                <Featertext img={feater1} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic totam expedita nesciunt asperiores repellendus magnam delectus fugit laborum voluptatem suscipit, officia tenetur dolor modi dicta quas praesentium iste ex!' li1='Confirm optimizetion' li2='Anathere legality of this' li3='Non stable for abala' h1='Simplify your selce Monitoring'/>

                <Featertext img={feater2} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic totam expedita nesciunt asperiores repellendus magnam delectus fugit laborum voluptatem suscipit, officia tenetur dolor modi dicta quas praesentium iste ex! ' li1='Top seling report' li2='Every day optimaijetion' li3='Giveing summery per houre'h1='Get in Tuch in your customars'/>

                <Featertext img={feater3} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic totam expedita nesciunt asperiores repellendus magnam delectus fugit laborum voluptatem suscipit, officia tenetur dolor modi dicta quas praesentium iste ex!' li1='Take yor fortune ' li2='For erning long tarm' li3='Take your seemlase experience'h1='Monitoring your seeting count'/>
            </div>
        </div>
    </div>
  )
}

export default Featers