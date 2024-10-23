
import Image from 'next/image'
import React from 'react'
import logo from "../public/assets/Logo.svg"
import prof from "../public/assets/User.svg"
import manu from "../public/assets/Menu.svg"
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-5 px-10 lg:container lg:mx-auto lg:px-20 text-[#36385c]'>
        <div className='flex items-center'>
            <Image src={logo} alt='logo'/>
            <div className="hidden md:flex md:gap-6 pl-16 text-lg font-medium">
                <Link href="/">Feature</Link>
                <Link href="#">Pricing</Link>
                <Link href="#">Enterprice</Link>
                <Link href="#">Careers</Link>
            </div>
        </div>
        <div className="flex gap-4 md:gap-7">
            <div className="flex items-center cursor-pointer">
                <p className='px-5 hidden md:flex font-semibold'>Open an Acount</p>
                <Image src={prof} alt='profile'/>
                <p className='hidden md:flex px-2 font-medium'>Sign in</p>
            </div>
            <div className="flex items-center md:hidden">
                <Image src={manu} alt='manue'/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar