import { Check } from 'lucide-react'
import React from 'react'

const Buying = () => {
  return (
    <div className="py-10">
      <h1 className='text-2xl lg:text-3xl font-medium text-[#172026] text-center'>Flexible Plan For You</h1>
      <p className='text-center text-xl font-medium py-5 text-[#5A5D73]'>No Hidden Fees</p>
      <div className="flex flex-col lg:flex-row lg:gap-4 gap-y-6 mt-2 lg:mt-10">

        <div className="w-full bg-[#f5f4ff] rounded-[8px] p-6 flex flex-col">
          <div>
            <h1 className='font-medium text-[#4328e8] text-lg lg:text-xl'>Free trile</h1>
            <p className='text-lg py-2'>Perfect For Testing Water</p>
            <p className='font-medium text-3xl'>$0 <span className='text-[#5A5D73]'>/mo</span></p>
            <p className='flex text-lg items-center py-1 mt-5'><Check className='mr-2'/>Completly free for 30 days</p>
            <p className='flex text-lg items-center py-1'><Check className='mr-2'/>Free subscribtion for savaral day</p>
            <p className='flex text-lg items-center py-1'><Check className='mr-2'/>Spacial servise for evry trile</p>
          </div>
          <button className='mt-5 lg:mt-10 text-xl font-medium py-2 bg-white rounded-[8px] text-[#4328eB]'>Start Trile</button>
        </div>

        <div className="w-full bg-[#3922E9] rounded-[8px] p-6 flex flex-col text-white">
          <div>
            <h1 className='font-medium text-lg lg:text-xl'>Bussinese</h1>
            <p className='text-lg py-2'>Perfect For Small Bussnsese</p>
            <p className='font-medium text-3xl'>$50 <span>/mo</span></p>
            <p className='flex text-lg items-center py-1 mt-5'><Check className='mr-2'/>Advence Monitoring system</p>
            <p className='flex text-lg items-center py-1'><Check className='mr-2'/>Full survuses support</p>
            <p className='flex text-lg items-center py-1'><Check className='mr-2'/>24 Hour Hot-line servise</p>
            <p className='flex text-lg items-center py-1'><Check className='mr-2'/>Enough time to review prosact</p>
            <p className='flex text-lg items-center py-1'><Check className='mr-2'/>20% off for next trile</p>
          </div>
          <button className='mt-5 lg:mt-10 text-xl font-medium py-2 bg-white rounded-[8px] text-[#4328eB]'>Start Trile</button>
        </div>

        <div className="w-full bg-[#f5f4ff] rounded-[8px] p-6 flex flex-col">
          <div>
            <h1 className='font-medium text-[#4328e8] text-lg lg:text-xl'>Enterprice</h1>
            <p className='text-lg py-2'>Perfect For Big Companis</p>
            <p className='font-medium text-3xl'>Custom</p>
            <p className='flex text-lg items-center py-1 mt-5'>If you have or you owne a big company you can chosse our custom servise</p>
            <p className='flex text-lg items-center py-1'>So lets start our new jurny to take your monitoring system so so far and make is wey bettar compare another</p>
          </div>
          <button className='mt-5 lg:mt-10 text-xl font-medium py-2 bg-white rounded-[8px] text-[#4328eB]'>Start Trile</button>
        </div>

      </div>
    </div>
  )
}

export default Buying